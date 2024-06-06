import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Formulario({ agregarTarea }) {
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    

    //if (descripcion.trim()) {
    agregarTarea(descripcion);
    setDescripcion("");
    //}
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Nueva Tarea"
        />
        {/*}    <input className="form-control"></input>*/}
        <Button variant="success" type="submit" className="w-100">
          Agregar
        </Button>
      </Form.Group>
    </Form>
  );
}

export default Formulario;
