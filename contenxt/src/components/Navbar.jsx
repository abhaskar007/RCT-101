import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import {Whishlist} from './Whishlist'

export const Navbar = () => {

  const {isAuthorized, login, logout} = useContext(AuthContext);

  return (
    <div>
      <div >{isAuthorized ? <h1 style={{"color":"green"}}>You are login</h1>:<h1 style={{"color":"red"}}>You are logout</h1>}</div>
      Navbar
      <button style = {{marginLeft : 20 ,"background": "red" ,"border":"none",color:"white"}} onClick={()=>{
        if(isAuthorized) logout();
        else login("R","Z");

      }}>{isAuthorized?"Logout":"Login"}</button>
       {isAuthorized && <Whishlist/>}
    </div>
  )
}
