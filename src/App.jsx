import { useState } from "react";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { BaseTareas } from "./assets/BaseTareas";

function App() {
  const [tareas, setTareas] = useState(BaseTareas);
  const [buscar, setBuscar] = useState('');

  const agregarTarea = (descripcion) => {
    const nuevaTarea = {
      id: (tareas.length + 1).toString(),
      descripcion,
      completado: false,
    };
    console.log(descripcion);
    setTareas([...tareas, nuevaTarea]);
  };

  const tareasFiltradas = tareas.filter((tarea) => 
    tarea.descripcion.toLowerCase().includes(buscar.toLowerCase())
  );

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Buscador buscar={buscar} setBuscar={setBuscar} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Listado tareas={tareasFiltradas} />
          </Col>
          <Col>
            <Formulario agregarTarea={agregarTarea} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
