import React, { useState, useEffect } from 'react'
import QRCode from "react-qr-code";

import { Cluster, clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { encodeURL, createQR } from '@solana/pay';
import BigNumber from 'bignumber.js';

const SolanaPayQRCode = ({ recipient, amount, reference, label, message, memo }) => {
  const encodedURL = `https://pay.solana.com/?recipient=${recipient.toString()}&amount=${amount.toString()}&reference=${reference.toString()}&label=${label}&message=${message}&memo=${memo}`;
  return <QRCode value={encodedURL} />;
};

export const Registrar = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registroslogin");
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
  }

  const [registroslogin, setRegistrosLogin] = useState(obtenerRegistros());

  const [direccion, setDireccion] = useState("");
  const [operacion, setOperacion] = useState("");
  const [moneda, setMoneda] = useState("");
  const [cantidad, setCantidad] = useState("");


  const botonGuardar = (e) => {
    e.preventDefault();
    var miObjeto = { direccion, operacion, moneda, cantidad }
    setRegistrosLogin([...registroslogin, miObjeto]);
    limpiarFormulario();
    Qr();
  }


  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin] );



  const limpiarFormulario = () => {
    setDireccion("");
    setOperacion("");
    setMoneda("");
    setCantidad("");
    document.getElementById("miFormulario").reset();
  }

  const Qr = () => {
      
  }

  return (
    

    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
REMITTANCES Transaction Page     <br/>
      <form id="miFormulario" onSubmit={ botonGuardar } >
      <div className="row" style={{marginTop:20}}>
          <div className="col-6">
            <select className="form-select form-select-lg text-center"  onChange={(e) => setOperacion(e.target.value)}  required  >
              <option value="">Indicates the type of transaction</option>
              <option value="Compra">Deposit</option>
              <option value="Venta">Egress </option>
            </select>
          </div>
        
          <div className="col-6">
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 100, width: "100%" }}>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={direccion}
    viewBox={`50 0 256 256`}
      />
    </div>  
    </div>  

        <div className="row" style={{marginTop:-30}}>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="text" placeholder="Wallet Address"  onChange={(e) => setDireccion(e.target.value)}  required  />
          </div>
          </div>
          
        <div className="row" style={{marginTop:20}}>
          <div className="col-6">
            <select className="form-select form-select-lg text-center"  onChange={(e) => setMoneda(e.target.value)}  required  >
              <option value="">Currency type</option>
              <option value="Lamports">Lamports</option>
              <option value="Solana">Solana</option>
            </select>
          </div>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="number" min="1" max="100000000" placeholder="Enter the amount $$"  onChange={(e) => setCantidad(e.target.value)}  required  />
          </div>
        </div>

        
      </div>    


        <div className="row" style={{marginTop:20}}>
          <div className="col">
            <button className="btn btn-primary btn-lg">Completar</button>
          </div>
        </div>        
      </form>
    </div>
            
  </div>




  )
}
export default SolanaPayQRCode;
