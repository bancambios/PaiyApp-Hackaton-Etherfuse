import React, { useState } from 'react'
import { useWallet } from "@solana/wallet-adapter-react";
import { useDispatch } from "react-redux";
/*/* ENTER WITH THE WALLET CONNECTION
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Menu } from "./Menu"; 

/*/
// import { reset } from "../../redux/actions/baseNft";


const WalletConnector = ({ history }) => {
  const dispatch = useDispatch();
  const wallet = useWallet();
  dispatch(setWallet(wallet));

  if (wallet.connected) {
    console.log("wallet is connected");
    const pathname = window.location.pathname;
    /*/ ENTER WITH THE WALLET CONNECTION
    document.getElementById("txtusu").value = "Nalton";
    document.getElementById("txtpas").value = "123";
    setMiLogin(true);
        localStorage.setItem("miLogin", true);
        localStorage.setItem("usu", usu);
        document.getElementById("form_login").style.display = "none"
        
    /*/
    
    if (pathname === "/") {
      history.push("/cm");
    }
  }
  return <></>;
    
};
export default WalletConnector;


/*/
import React, { useState } from 'react'
import { useWallet } from "@solana/wallet-adapter-react";
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