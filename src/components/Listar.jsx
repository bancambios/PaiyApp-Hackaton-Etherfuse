import React, { useState, useEffect } from 'react'
import QRCode from "react-qr-code";

export const Listar = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registroslogin");
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
  }


  const [registroslogin, setRegistrosLogin] = useState(obtenerRegistros());

  const botonEliminar = (miIndex) => {
    if(window.confirm("Are You Sure You Want To Unregister? ")){
      var registrosFiltrados = registroslogin.filter((e, index) => {
          return miIndex !== index
      });
      setRegistrosLogin(registrosFiltrados);
    }
  }


  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin])



  return (
    

    
    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
    Account Register
    </div>

    <div className="table-responsive">
      
      { registroslogin.length > 0 ? 

      <>
        <table className="table table-bordered table-hover" style={{marginTop:12}}>
            <thead className="text-center" style={{background:"lightgray"}}>
                <tr>
                    <th>#</th>
                    <th>Address</th>
                    <th>Transaction</th>
                    <th>Currency</th>
                    <th>Amount</th>
                    <th>Qr</th>
                    <th>X</th>
                </tr>
            </thead>
            <tbody className="text-center align-baseline">
                {
                  registroslogin.map((x, index) => (
                    <tr key={index}>
                      <th>{ index+1 }</th>
                      <td>{ x.direccion }</td>
                      <td>{ x.operacion }</td>
                      <td>{ x.moneda }</td>
                      <td>{ x.cantidad }</td>
                      <td> 
                              <div style={{ height: "auto", margin: "0 auto", maxWidth: 100, width: "100%", display:'flex', alignItems:'center' }}>
                      <QRCode
                      size={256}
                      style={{ height: "auto", maxWidth: "100%", width: "100%", display:'flex', alignItems:'center'}}
                      value={"Direccion:  " + x.direccion + 
                      "\nTipo de Operacion:  " + x.operacion + 
                      "\nTipo de Moneda:  " + x.moneda + 
                      "\nCantidad:  " + x.cantidad}
                      viewBox={`0 0 256 256`}
                        />
                      </div>  
                      </td>
                      <td className="text-center">
                        <button className="btn btn-outline-danger" onClick={()=>botonEliminar(index)}>
                          <i class="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                }
            </tbody>
        </table>
      </> 
      
      : <p className='h5' style={{color:"red"}}>"No Hay Registros Para Listar"</p>
      }
      
    </div>
 
  </div>



  )
}
