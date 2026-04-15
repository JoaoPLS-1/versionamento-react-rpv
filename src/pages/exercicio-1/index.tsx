import { useState } from "react"

export default function Ex01() {
    const [mudaCor, setMudaCor] = useState(false)

    return(
        <>
            <div className={`w-full h-screen ${ mudaCor ? 'bg-red-700 ': 'bg-blue-300'} flex flex-col items-center justify-center gap-5`}>
                <h1 className="text-4xl">Exercicio 1</h1>
                <button className={`p-4  rounded-2xl  bg-black cursor-pointer`} onClick={() => setMudaCor(!mudaCor)} >Alterar cor</button>
            </div>
        </>
    )
}