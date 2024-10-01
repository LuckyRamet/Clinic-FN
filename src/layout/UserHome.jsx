import axios from 'axios'
import { useEffect, useState } from 'react'
import TodoCard from '../compo/TodoCard'

export default function UserHome() {
  
  // const [todos, setTodos] = useState([])

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     try {
  //       let token = localStorage.getItem('token')
  //       const response = await axios.get('https://clinic-bn.vercel.app/todos', {
  //         headers: { Authorization: Bearer ${token} }
  //       })
  //       setTodos(response.data.todos)
  //     } catch (error) {
  //       console.error('Error fetching todos:', error)
  //     }
  //   }
  //   fetchTodos()
  // }, [])

  return (
    <>
      <div></div>
     
    </>
  )
}