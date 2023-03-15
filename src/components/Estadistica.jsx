import React, { useState, useEffect } from 'react'

export const Estadistica = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registroslogin");
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
  }

  function miEstadistica(opcion){
    var i = 0;
    var resultado = 0;
    var miObjeto;

    if(opcion === 1){
      resultado = registroslogin.length;
    }else if(opcion === 2){
      for(i=0; i<registroslogin.length; i++){
        miObjeto = registroslogin[i];
        resultado += parseInt(miObjeto.cantidad);
      }
    }else if(opcion === 3){
      for(i=0; i<registroslogin.length; i++){
        miObjeto = registroslogin[i];
        resultado += parseInt(miObjeto.cantidad);
      }
      resultado = (resultado/registroslogin.length).toFixed(2);
    }

    return resultado;
  }

  const [registroslogin, setRegistrosLogin] = useState(obtenerRegistros());

  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin])


  return (
    

          
    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
    Statistical Summary
    </div>

    <div className="table-responsive">
      
      { registroslogin.length > 0 ?

        <div className="row row-cols-1 row-cols-md-3 g-2" style={{padding:5, width:"90%", margin:"0 auto"}}>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"># Transactions</h5>
                <p className="card-text"> { miEstadistica(1) } </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
              <h5 className="card-title">Deposit</h5>
                <p className="card-text"> {  } </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Outgoing </h5>
                <p className="card-text"> {  } </p>
              </div>
            </div>
          </div>
        </div>

        : <p className="h5" style={{color:"red"}}>"There are no records for the statistics!        !!"</p>
        }

    </div>
 
  </div>





  )
}
