import { json } from 'react-router-dom'

interface APIUser {
  name: string
  id: number
}
interface User {
  username: string
  password: string
}

export async function getUser({ username, password }: User) {
  try {
    const response = await fetch('http://3.69.78.92/users/', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjExLCJpYXQiOjE3MjU4OTAwNzAsImV4cCI6MTcyNTk3NjQ3MH0.twBvItFkvDP2OkNAJ92YyBZVKVkWPf_Ynd2Y1-Hi7y8',
      },
    })
    if (!response.ok) {
      return json({ error: 'something went wrong' })
    }
    const users = (await response.json()) as APIUser[]
    const user = users.find(user => user.name === username)
    if (!user) {
      return json({ error: 'User not found' })
    }
    const userPassword = `${user.name.toLowerCase()}-PW`
    if (password !== userPassword) {
      return json({ error: 'invalid password' })
    }
    return json({ user })
  } catch (error) {
    console.error(error)
  }
}
