import { Client } from 'discord.js'
import { fileURLToPath } from 'url'

export const changeAvatarOnDodge = async (
  client: Client,
  isKamilDodge: boolean
): Promise<void> => {
  try {
    if (isKamilDodge) {
      await client.user?.setAvatar(
        `${fileURLToPath(new URL('.', import.meta.url))}/../img/madge.webp`
      )
      return
    }
    await client.user?.setAvatar(
      `${fileURLToPath(new URL('.', import.meta.url))}/../img/madgeMad.jpg`
    )
  } catch (error) {
    console.error(error)
  }

  return
}
