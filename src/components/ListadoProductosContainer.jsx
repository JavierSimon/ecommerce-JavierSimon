import React from 'react'
import ListadoDeProductosLayOut from './ListadoDeProductosLayOut';

export default function ListadoProductosContainer() {
    let productos = [
        {id: 1, name: "adidas", precio: 100},
        {id: 2, name: "nike", precio: 100},
        {id: 3, name: "pumas", precio: 100},
        {id: 4, name: "assics", precio: 100},
        {id: 5, name: "penalty", precio: 100},
    ];

    //fetch 
    //paginar
    //decir el largo de cada pagina
    return <ListadoDeProductosLayOut producto={productos}/>
}
