import express, { Express, Request, Response } from 'express'
import { createUsr } from '@/model/user'
import { signToken } from '@/utils/jwt'
import { ResponseData } from '@/types'

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

router.post('/api/login', (req: Request, res: Response) => {
  console.log(req.body)
  res.send({
    code: 0,
    data: {
      token: signToken({ name: 'admin' })
    },
    message: '登录成功'
  } as ResponseData)
})

export default router
