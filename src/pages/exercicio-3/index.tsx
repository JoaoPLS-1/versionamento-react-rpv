import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { use, useState } from "react"


const validacao = z.object({
    user: z.string().min(1, "Campo obrigatório."),
    senha: z.string().min(1, "Campo obrigatório.")
})

type FormType = z.infer<typeof validacao>

export default function Ex03() {
    const userValido = 'admin'
    const senhaValida = '123456'
    const [mensagemLogin, setMensagemLogin] = useState('')


    const formulario = useForm<FormType>({
        resolver: zodResolver(validacao)
    })

    function submeterFormulario(camposDoFormulario: FormType) {
        
        if (camposDoFormulario.user === userValido && camposDoFormulario.senha === senhaValida) {
            setMensagemLogin('Login concluído com sucesso!')
        } else {
            setMensagemLogin('Usuario ou senha inválido!')
        }
        formulario.reset();
    }
    console.log('message: ', mensagemLogin)
    return (
        <>
            <div className="w-full h-screen bg-pink-300 flex items-center justify-center flex-col gap-8">
                <h1 className="text-4xl">Exercicio 03</h1>

                <div className="flex gap-4">
                    <form onSubmit={formulario.handleSubmit(submeterFormulario)}>
                        <div className="flex flex-col">
                            <label className="">User</label>
                            <input type="text" className="p-2 bg-black rounded-md" {...formulario.register("user")} />
                            {formulario.formState.errors.user && <span className="text-red-500">{formulario.formState.errors.user.message}</span>}
                        </div>
                        <div className="flex flex-col">
                            <label className="">Senha</label>
                            <input type="password" className="p-2 bg-black rounded-md" {...formulario.register("senha")} />
                            {formulario.formState.errors.senha && <span className="text-red-500">{formulario.formState.errors.senha.message}</span>}
                        </div>
                        <div className="flex justify-center mt-2 ">
                            <button type="submit" className="bg-black rounded-md py-2 min-w-full cursor-pointer">Enviar</button>
                        </div>
                <div>
                    <p className={`${mensagemLogin === 'Login concluído com sucesso!' ? 'text-green-500' : 'text-red-600'} text-2xl mt-2`}>{mensagemLogin}</p>
                </div>
                    </form>
                </div>

            </div>
        </>
    )
}