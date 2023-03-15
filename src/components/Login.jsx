import React, { useState } from "react";
import { Menu } from "./Menu";
import {} from "./imagenes/titulo.png";
import { useWallet } from "@solana/wallet-adapter-react";

import {
  WalletModalProvider,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

// useWallet hook can be used to retrive the wallet connection.
/*/
import { useDispatch } from "react-redux";
import { setWallet } from "../../redux/actions/wallet";

const WalletConnector = ({ history }) => {
  const dispatch = useDispatch();
  const wallet = useWallet();
  dispatch(setWallet(wallet));

  if (wallet.connected) {
    console.log("wallet is connected");
    const pathname = window.location.pathname;
   
    if (pathname === "/") {
      history.push("/cm");
    }
  }
  return <></>;
    
};
export default WalletConnector;
/*/

export const Login = () => {

  const ComprobarSesion = () => {
    var sesion = localStorage.getItem("miLogin");
    if(sesion){
      return JSON.parse(sesion);  // true
    } else{
      return false;
    } 
  } 

  const [miLogin, setMiLogin] = useState(ComprobarSesion());
  const [usu, setUsu] = useState("Nalton");
  const [pas, setPas] = useState("123");
  
  function iniciarSesion(e) {
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;

    if (txtusu.length === 0 || txtpas.length === 0) {
      alert("Complete Missing Data!!");
    } else {
      if ((usu === "Nalton" && pas === "123")) {
        setMiLogin(true);
        localStorage.setItem("miLogin", true);
        localStorage.setItem("usu", usu);
        document.getElementById("form_login").style.display = "none";
      }
           
      else {
        setMiLogin(false);
        alert("Error De Usuario y/o Contraseña!!");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
      }
    }
  }

  

  return (
    <div
      className="containerBack"
      style={{
        backgroundImage: `url("https://user-images.githubusercontent.com/17559524/221425655-baced173-a952-46b8-aecc-b1235ca6336f.png")`,
        backgroundSize: 1250,
        marginTop: 10,
        padding: 200,
      }}>
      <div
        className="container"
        style={{
          background: "#000000",
          opacity: 0.8,
          marginTop: -125,
          padding: 125,
          borderRadius: 100,
        }}>
        
        {miLogin === false ?
        
        <form id="form_login">
          <div>
            <h1
              style={{
                color: "#4DEDE8",
                textalign: "center",
                fontWeight: "bolder",
                fontSize: 60,
              }}>
              LOGIN
            </h1>
            <label htmlFor="txtusu">
              <strong>
                <h5 style={{ color: "white" }}>User</h5>
              </strong>
            </label>
            <input
              type="text"
              id="txtusu"
              style={{ color: "green", textAlign: "center" }}
              className="form-control"
              onChange={(e) => setUsu(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="txtpas">
              <strong>
                <h5 style={{ color: "white" }}>Password</h5>
              </strong>
            </label>
            <input
              type="password"
              id="txtpas"
              style={{ color: "green", textAlign: "center" }}
              className="form-control"
              onChange={(e) => setPas(e.target.value)}
              required
            />
          </div>
          <br />
          <input
            type="submit"
            className="btn btn-primary"
            value="Login"
            onClick={iniciarSesion}
          />
        </form>

        :
        
        <Menu/>

        }
      </div>
    </div>
  );
};

/* import React, { useState } from 'react'
import { Menu } from './Menu'

export const Login = () => {

  const [miLogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");


  function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if(txtusu.length===0 || txtpas.length===0){
      alert("Complete Los Datos Faltantes!!");
    }else{
      if(usu === "admin" && pas==="123"){
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
      }else{
        setMiLogin("false");
        alert("Error De Usuario y/o Contraseña!!");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
        
      }
    }
  }


  return (
    

    <div className="container" style={{background:"lightgray", marginTop:20, padding:20}}>
        
    <form id="form_login">
        <div>
            <h1 style={{color:"blue", textalign:"center"}}>LOGIN</h1>
            <label htmlFor="txtusu"><strong>Username</strong></label>
            <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control"  onChange={ (e)=>setUsu(e.target.value) }  required/>
        </div>
        <div>
            <label htmlFor="txtpas"><strong>Password</strong></label>
            <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control"  onChange={ (e)=>setPas(e.target.value) }  required/>
        </div><br/>
        <input type="submit"  className="btn btn-primary" value="Login" onClick={ iniciarSesion }/>
    </form>

    { miLogin === "true" && <Menu usu={usu}/> }

</div>


  )
}
... */
