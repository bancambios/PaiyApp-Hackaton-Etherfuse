import React, { useState, useEffect } from 'react'

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

  const [titulo, setTitulo] = useState("");
  const [estilo, setEstilo] = useState("");
  const [tecnica, setTecnica] = useState("");
  const [precio, setPrecio] = useState("");


  const botonGuardar = (e) => {
    e.preventDefault();
    var miObjeto = { titulo, estilo, tecnica, precio }
    setRegistrosLogin([...registroslogin, miObjeto]);
    limpiarFormulario();
  }


  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin] );



  const limpiarFormulario = () => {
    setTitulo("");
    setEstilo("");
    setTecnica("");
    setPrecio("");
    document.getElementById("miFormulario").reset();
  }


  return (
    

    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
Pagina de Transacciones de REMESAS     <br/>
      <form id="miFormulario" onSubmit={ botonGuardar } >
        <div className="row" style={{marginTop:20}}>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="text" placeholder="Titulo de comprobante (Ingreso - Egreso)"  onChange={(e) => setTitulo(e.target.value)}  required  />
          </div>

          <div className="col-6">
            <select className="form-select form-select-lg text-center"  onChange={(e) => setEstilo(e.target.value)}  required  >
              <option value="">Indique Estilo</option>
              <option value="Compra">Compra</option>
              <option value="Venta">Venta</option>
              <option value="Inversión">Inversión</option>
            </select>
          </div>
        </div>
        
        <div className="row" style={{marginTop:20}}>
          <div className="col-6">
            <select className="form-select form-select-lg text-center"  onChange={(e) => setTecnica(e.target.value)}  required  >
              <option value="">Tipo de moneda</option>
              <option value="USDT">USDT</option>
              <option value="Solana">Solana</option>
            </select>
          </div>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="number" min="1" max="100000000" placeholder="Introduce la cantidad $$"  onChange={(e) => setPrecio(e.target.value)}  required  />
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
