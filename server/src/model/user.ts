import { DB } from '../utils/db'
export const createUsrTable = () => {
  const db = DB()
  const sql = `create table if not exists user (
    id integer primary key autoincrement, -- id
    account text not null unique, -- 账号
    name text not null, -- 用户名
    password text not null, -- 密码
    created_at timestamp default current_timestamp, -- 创建时间
    updated_at timestamp default current_timestamp -- 更新时间
  )`

  const stmt = db.prepare(sql)
  stmt.run()
  db.close()
}

export const createUsr = (account: string, password: string) => {
  const db = DB()

  try {
    const sql = `insert into user (
      account, name, password, created_at, updated_at
    ) values (?, ?, ?, ?, ?)`
    const stmt = db.prepare(sql)
    stmt.run(account, account, password, Date.now(), Date.now())

    return { code: 0 }
  } catch (error) {
    return { code: 1, error }
  } finally {
    console.log('db close')
    db.close()
  }
}
