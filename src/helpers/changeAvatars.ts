import { Client } from 'discord.js'
import { fileURLToPath } from 'url'

export const changeAvatarOnDodge = async (
  client: Client,
  isKamilDodge: boolean
): Promise<void> => {
  if (process.env.NODE_ENV === 'development') return
  try {
    if (isKamilDodge) {
      await client.user?.setAvatar(
        `${fileURLToPath(new URL('.', import.meta.url))}/../img/madge.webp`
      )
      return
    }
    await client.user?.setAvatar(
      `${fileURLToPath(new URL('.', import.meta.url))}/../img/madgeMad.webp`
    )
  } catch (error) {
    console.error(error)
  }

  return
}
