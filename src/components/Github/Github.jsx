import React, { useState,useEffect } from 'react'

function Github() {
  const [data,setData] = useState([]);
  useEffect(()=> {
    fetch('https://api.github.com/users/sreejith-sukumaran-nair')
    .then((data) => data.json())
    .then((data) => setData(data))
    .catch((e) => console.log(e))
  },[])
  console.log(data)
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Following: {data.following}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github