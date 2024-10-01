/* eslint-disable react/prop-types */
import axios from 'axios'
import {createContext, useState, useEffect} from 'react'

const InfoContext = createContext()

function InfoContextProvider(props) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [member,setMember] = useState(null)
  useEffect( ()=>{
    const run = async () => {
      try {
        setLoading(true)
        let token = localStorage.getItem('token')
        if(!token) { return }
        const rs = await axios.get('https://clinic-bn.vercel.app/info/infomation', {
          headers : { Authorization : `Bearer ${token}` }
        })
        const wala = await axios.get('https://clinic-bn.vercel.app/info/getall', {
          headers : { Authorization : `Bearer ${token}` }
        })
        setMember(wala.data)
        setData(rs.data)
      }catch(err) {
        console.log(err.message)
      }finally {
        setLoading(false)
      }   
    }
    run()
  }, [])


  return (
    <InfoContext.Provider value={ {data, setData, loading,member} }>
      {props.children}
    </InfoContext.Provider>
  )
}

export { InfoContextProvider }
export default InfoContext