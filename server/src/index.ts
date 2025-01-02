import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { hello } from '@/utils'

dotenv.config({
  path: path.join(__dirname, '../.env')
})

const app: Express = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  hello()
  res.send('This is BBBoss server!')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
