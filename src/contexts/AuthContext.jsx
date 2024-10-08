/* eslint-disable react/prop-types */
import axios from 'axios'
import {createContext, useState, useEffect} from 'react'

const AuthContext = createContext()

function AuthContextProvider(props) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect( ()=>{
    const run = async () => {
      try {
        setLoading(true)
        let token = localStorage.getItem('token')
        if(!token) { return }
        const rs = await axios.get('https://clinic-bn.vercel.app/auth/me', {
          headers : { Authorization : `Bearer ${token}` }
        })
        setUser(rs.data)
      }catch(err) {
        console.log(err.message)
      }finally {
        setLoading(false)
      }   
    }

    run()
  }, [])

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
  }

  const updateProfile = async (data) => {
    const token = localStorage.getItem('token')
    await axios.patch('https://clinic-bn.vercel.app/info/patch', data, {
      headers: {Authorization: `Bearer ${token}`}
    })
    alert('Update Profile Success!!')
  }

  return (
    <AuthContext.Provider value={ {user, setUser, loading, logout, updateProfile} }>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider }
export default AuthContext