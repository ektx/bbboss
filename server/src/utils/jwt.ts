import jwt from 'jsonwebtoken'

const secret = 'bbboss' // 秘钥

export function signToken(data: any) {
  return jwt.sign(data, secret, { expiresIn: '1h' }) // 1小时过期
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, secret)
  } catch (error) {
    return null
  }
}
