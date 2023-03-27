import React, { useEffect, useState } from 'react'
import Styles from './home.module.css'
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/project').then(res => setData(res.data))
  }, [])
  return (
    <div className={Styles.Home}>{
      data.map((item, idx)=> <div key={idx}>{item.desc}</div>)
    }</div>
  )
}

export default Home;
