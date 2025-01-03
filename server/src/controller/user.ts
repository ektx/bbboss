import express, { Express, Request, Response } from 'express'
import { createUsr } from '@/model/user'

const router = express.Router()

const timeLog = (req: Request, res: Response, next: any) => {
  console.log('Time: ', Date.now())
  next()
}

router.use(timeLog)

router.get('/register', (req: Request, res: Response) => {
  const result = createUsr('admin', 'admin')

  console.log(result.code)
  res.send('Register')
})

export default router
