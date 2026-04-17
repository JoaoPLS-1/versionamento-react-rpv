import { useState } from "react";
import { useEffect } from "react";
export default function Ex06() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function buscaUsuarios() {
            const response = await fetch ("https://jsonplaceholder.typicode.com/users")
            const data = await response.json();
            setUsers(data);
        }
        buscaUsuarios();
    }, [])
    return(
        <>
        <div className="w-full h-screen bg-violet-950 flex flex-col items-center justify-center">

            <h1 className="text-3xl">Exercicio 06</h1>
            <input type="text" placeholder="Digite algo..." className="bg-black rounded-md"  />
        </div>
        </>
    )
}