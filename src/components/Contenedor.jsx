export function Contenedor({persona}){
    return <div>{persona.estaAutenticado? <h1>{persona.nombre}</h1> : <h1>Nope</h1>}</div>
}

export function Contenedor2({mascota}){
    return <div>{mascota.vacunado ? <h1>{mascota.nombre}</h1> : <h1>Nope</h1>}</div>
}