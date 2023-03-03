import { CommandInteraction, Client, ApplicationCommandType } from 'discord.js'
import type { Command } from '../types/Command.js'

export const pong: Command = {
  name: 'pong',
  description: 'Pong!',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const content = 'pong'

    await interaction.followUp({
      ephemeral: true,
      content,
    })
  },
}
