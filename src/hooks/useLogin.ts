import axios from 'axios'
import { useState } from 'react'
import { apiUrl } from '../constants/apiUrl'
import { APIUser } from '../types/apiTypes'
import { useNavigate } from 'react-router-dom'

export default function useLogin() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  async function login(username: string, password: string) {
    if (!username.trim().length || !password) {
      throw 'All fields are required'
    }
    setLoading(true)
    try {
      const res = await axios.post(`${apiUrl}/auth`, { username, password })
      const { data: user } = res as { data: APIUser }
      if (user) {
        localStorage.setItem('token', user.token)
        navigate('/home', { replace: true })
      }
    } catch (error) {
      throw 'Invalid username or password'
    } finally {
      setLoading(false)
    }
  }
  return { loading, login }
}
