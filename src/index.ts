import dotenv from 'dotenv-safe'
import { InteractionCreate } from './listeners/interactionCreate.js'
import { ready } from './listeners/ready.js'

if (!process.env.CI) {
  dotenv.config()
}
// Create a new client instance
import { Client } from 'discord.js'

console.log('Bot is starting...')

const client = new Client({
  intents: [],
})

client.login(process.env.DISCORD_TOKEN)

ready(client)
InteractionCreate(client)
