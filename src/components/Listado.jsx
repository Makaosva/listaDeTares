import { Table } from "react-bootstrap";

function Listado({ tareas }) {
  return (
    <Table responsive striped bordered>
      <thead>
        <tr>
          <th>ID</th>
          <th>Descripcion</th>
          <th>Completado</th>
        </tr>
      </thead>
      <tbody>
        {tareas.map((tarea) => (
          <tr key={tarea.id}>
            <td>{tarea.id}</td>
            <td>{tarea.descripcion}</td>
            <td>{tarea.completado ? "Completado" : "Incompleto"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Listado;
