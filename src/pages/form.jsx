import { useState } from "react"

export default function Form(){

    const [name, setName] = useState(null)
    const [age, setAge] = useState(null)

    function saveUser(){
        fetch("/api/form", {
            method : "POST",
            body : { name , age  },
        })
    }

    return (
        <div>
            <h1>Retornando com API</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value) }/>
            <input type="number" value={age}  onChange={e => setAge( + e.target.value)}/>
            <button onClick={saveUser}>Enviar</button>
        </div>
    )
}