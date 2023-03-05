import { CommandInteraction, Client, Interaction } from 'discord.js'
import commands from '../commands/index.js'
import { changeAvatarOnDodge } from '../helpers/changeAvatars.js'

let isKamilDodge = false

export const InteractionCreate = (client: Client): void => {
  client.on('interactionCreate', async (interaction: Interaction) => {
    if (interaction.isCommand() && interaction.commandName === 'pong') {
      await handleSlashCommand(client, interaction)
    }

    if (interaction.isCommand() && interaction.commandName === 'dodge') {
      await handleDodgeCommand(client, interaction)
    }

    if (interaction.isButton() && interaction.customId === 'dodge') {
      console.info(interaction.user.username)
      await changeAvatarOnDodge(client, isKamilDodge)
      await interaction.update({
        content: `Teraz **${isKamilDodge ? 'Kamil' : 'FCOS'}** dodguje`,
      })

      isKamilDodge = !isKamilDodge
    }
  })
}

const handleSlashCommand = async (
  client: Client,
  interaction: CommandInteraction
): Promise<void> => {
  const command = commands.find(c => c.name === interaction.commandName)
  if (!command) {
    interaction.followUp({ content: 'An error has occurred' })
    return
  }

  await interaction.deferReply()

  command.run(client, interaction)
}

const handleDodgeCommand = async (
  client: Client,
  interaction: CommandInteraction
): Promise<void> => {
  const dodgeCommand = commands.find(c => c.name === interaction.commandName)
  if (!dodgeCommand) {
    interaction.followUp({ content: 'An error has occurred' })
    return
  }

  await interaction.deferReply()

  dodgeCommand.run(client, interaction)
}
