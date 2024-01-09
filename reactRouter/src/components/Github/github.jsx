import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
  return (

    <div>
        <h1>My name: {data.id} </h1>
        <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const res = await fetch ("https://api.github.com/users/lokeshshriwas")
    const resJson = await res.json()
    return resJson
}