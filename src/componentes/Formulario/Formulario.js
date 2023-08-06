import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
const Formulario = () => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo,actualizarEquipo]=useState("")

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("menajar el envio", e);
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo
    }
    console.log(datosAEnviar);
  };
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear al colaborador</h2>
        <CampoTexto
          titulo="Nombre"
          placeholder="Ingresar Nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <CampoTexto
          titulo="Puesto"
          placeholder="Ingresar Puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <CampoTexto
          titulo="Foto"
          placeholder="Ingresar url fotografia"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} />
        {/* <Boton texto="Crear"/> */}
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;