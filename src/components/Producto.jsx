import React from "react";

export default function Producto({ item, color }) {
    //alertHolaMundo() //El padre la crea y se la prresta para que el hijo la pueda usar
    return (
    <div style={{ backgroundColor: color, margin: 5, padding: 5 }}>
      <h2>ID: {item.id} </h2>
      <h2>Nombre: {item.name}</h2>
      <h2>Precio: {item.price}</h2>
    </div>
  );
}
