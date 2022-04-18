import {useEffect, useState} from 'react';
import {Navbar} from '../Navbar/Navbar'
import { Card } from '../Card/Card';
import {post} from '../../../data'
import {io} from "socket.io-client"; 
import './Login.css'

export const Login=()=> {
  const [username, setUsername]=useState("")
  const [user , setUser]= useState("")

  useEffect(()=>{
    const socket = io("http://localhost:3001")
    console.log(socket.on("firstEvent",(msg)=>{
      console.log(msg);
    }));
  },[])

  console.log(user);
  return (
    <div className='container'>
      {/* Si no hay un nombre de usuario entonces se mostrará el inicio si no los componentes */}
      {user ? (
        <>
          <Navbar/>
          {post.map((post)=>(
            <Card key={post.id} post={post}/>
          ))}
          
          <span className='username'>{user}</span>
        </>
      ): (
      <div className="login">
         <h1>Hello word</h1>
         <input type="text" placeholder="Username" 
         onChange={(e)=>setUsername(e.target.value)}></input>
         {/* <input type="password" placeholder="Password"
         onChange={(e)=>setUsername(e.target.value)}></input> */}
         <button onClick={()=>setUser(username)}>Login</button> 
      </div>
      )}
    </div>
  );
}