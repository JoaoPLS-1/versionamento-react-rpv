import { useState } from "react"

export default function Ex01() {
    const [contador, setContador] = useState(0)
    const [historico, setHistorico] = useState([0])
    return (
        <>
            <div className="w-full h-screen bg-blue-400 flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl ">Exercicio 02</h1>
                <div>
                <p className="text-2xl">Contador: {contador}</p>
                

                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">

                    <button className="min-w-32 cursor-pointer p-4 bg-black rounded-3xl text-center" onClick={() => setContador(contador + 1)}>Aumentar</button>
                    <button className="min-w-32 cursor-pointer p-4 bg-black rounded-3xl text-center" onClick={() => setContador(contador -1)}>Diminuir</button>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                        <button className="p-4 bg-black rounded-3xl" onClick={() => setHistorico((oldState) =>  [...oldState, contador])}>Salvar Historico</button>
                        <p className="text-center text-sl">Historico Salvo: {historico.join(", ")}</p>
                        
                    </div>
                </div>

            </div>
        </>
    )
}