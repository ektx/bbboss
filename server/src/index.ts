import express, { Express, Request, Response } from 'express'
import { urlencoded, json } from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { hello } from '@/utils'
import { initTable } from './controller/initTable'
import user from '@/controller/user'

dotenv.config({
  path: path.join(__dirname, '../.env')
})

const app: Express = express()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }))

// parse application/json
app.use(json({ limit: '1mb' }))

const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  hello()
  res.send('This is BBBoss server!')
})

app.get('/init-db', async (req: Request, res: Response) => {
  const result = initTable()

  console.log('result', result)
  res.send('Init database')
})

app.use('/', user)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
