import {
  CommandInteraction,
  Client,
  ApplicationCommandType,
  ButtonStyle,
  ActionRowBuilder,
  ButtonBuilder,
} from 'discord.js'
import type { Command } from '../types/Command.js'

export const dodge: Command = {
  name: 'dodge',
  description: 'Dodge',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const content = 'Test'
    const button: ButtonBuilder = new ButtonBuilder()
      .setCustomId('dodge')
      .setLabel('Ktoś zdodgował')
      .setStyle(ButtonStyle.Primary)
    const actionRow = new ActionRowBuilder().addComponents(button)

    await interaction.followUp({
      ephemeral: true,
      content,
      // @ts-ignore
      components: [actionRow],
    })
  },
}
