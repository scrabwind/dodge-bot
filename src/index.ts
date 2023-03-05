import dotenv from 'dotenv-safe'
import { InteractionCreate } from './listeners/interactionCreate.js'
import { ready } from './listeners/ready.js'

console.log(Object.keys(process?.env))

console.log('xdd')

console.log(process.env.DISCORD_TOKEN)

// Create a new client instance
import { Client } from 'discord.js'

console.log('Bot is starting...')

const client = new Client({
  intents: [],
})

client.login(process.env.DISCORD_TOKEN)

ready(client)
InteractionCreate(client)
