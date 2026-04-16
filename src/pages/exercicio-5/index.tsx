import { useState } from "react";
import { useEffect } from "react";

interface IUsersFetch {
    id: number,
    name: string,
    username: string,
    email: string
}
export default function Ex05() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function buscarUsuarios() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            setUsers(data);
        }
        buscarUsuarios();

    }, []);
    console.log("users:", users)
    return (
        <>
            <div className="w-full h-screen flex flex-col bg-amber-700 items-center justify-center">
                <h1 className="text-3xl">Exercicio 4</h1>
                <p>{users.map((usuarios: IUsersFetch) => {
                    return (
                       
                        
                            <div key={usuarios.id} className="grid grid-cols-3 flex flex-col gap-2 border border-zinc-300">

                                <p><strong>Nome:</strong> {usuarios.name}</p>
                                <p><strong>username:</strong> {usuarios.username}</p>
                                <p><strong>email:</strong> {usuarios.email}</p>

                            </div>
                    

                    )
                })}</p>

            </div>
        </>
    )
}