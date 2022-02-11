import React from 'react'

function MovieList(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.calificacion}</td>
            <td>{props.premios}</td>
            <td>{props.duracion}</td>
        </tr>
    )
}

export default MovieList
