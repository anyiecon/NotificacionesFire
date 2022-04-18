import React, { useState } from "react"
import './Card.css'
import cushion from '../../../Images/cushion.png'
export const Card=({post})=> {
  const [aplicar, setAplicar]= useState(true)

  const handleNotificación =()=>{
    setAplicar(true);
  }
    return (
      <div className="conta">
        <div className="card">
          <h1 className="type">{post.tipo}</h1>
          <img  className="imgProducto" src={post.userImg}></img>
          <p>{post.descripción}</p>
          <p className="estado">Estado: {post.estado}</p>
          <button className="btnAplicar" >Aplicar </button>
        </div>
        {/* <img className="userr" src={post.postImg}></img>
        <h2>{post.username}</h2> */}
      </div>
    )
  }