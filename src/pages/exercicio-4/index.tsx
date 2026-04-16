import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputMask } from "./InputMask"
import { Input } from "./Input"



const validacao = z.object({
    nome: z.string().min(1, "Campo obrigatório."),
    email: z.email("Email inválido"),
    endereco: z.string().min(1, "Campo obrigatório."),
    bairro: z.string().min(1, "Campo obrigatório."),
    cep: z.string().min(1, "Campo obrigatório."),
    cpf: z.string().min(1, "Campo obrigatório."),


})

export type FormType = z.infer<typeof validacao>

export default function Ex04() {


    const formulario = useForm<FormType>({
        resolver: zodResolver(validacao)
    })

    function submeterFormulario(camposDoFormulario: FormType) {
        formulario.reset();
        console.log('Campos:', camposDoFormulario)
    }
    return (
        <>
            <div className="w-full h-screen bg-pink-300 flex items-center justify-center flex-col gap-8">
                <h1 className="text-4xl">Exercicio 04</h1>

                <div className="flex">
                    <form onSubmit={formulario.handleSubmit(submeterFormulario)} className="flex flex-col gap-4">
                        <div className="flex gap-5">
                            <div>
                                <InputMask
                                    errors={formulario.formState.errors}
                                    label='CPF'
                                    masks='cpf'
                                    name='cpf'
                                    register={formulario.register}
                                    required
                                    size={9}
                                    placeholder='Digite o seu CPF ou CNPJ'
                                />
                                <Input
                                    errors={formulario.formState.errors}
                                    label='Nome'
                                    name='nome'
                                    register={formulario.register}
                                    required
                                    size={9}
                                />
                                <Input
                                    errors={formulario.formState.errors}
                                    label='Email'
                                    name='email'
                                    register={formulario.register}
                                    required
                                    size={9}
                                />
                            </div>

                            <div>
                                <InputMask
                                    errors={formulario.formState.errors}
                                    label='CEP'
                                    masks='cep'
                                    name='cep'
                                    register={formulario.register}
                                    required
                                    size={9}
                                    placeholder='Digite o seu CEP'
                                />
                                <Input
                                    errors={formulario.formState.errors}
                                    label='Endereco'
                                    name='endereco'
                                    register={formulario.register}
                                    required
                                    size={9}
                                />
                                <Input
                                    errors={formulario.formState.errors}
                                    label='Bairro'
                                    name='bairro'
                                    register={formulario.register}
                                    required
                                    size={9}
                                />
                            </div>
                        </div>


                        <div className="flex justify-center mt-2">
                            <button type="submit" className="bg-black rounded-md py-2 mt-6 min-w-full cursor-pointer">Enviar</button>
                        </div>
                    </form>
                </div>

            </div >
        </>
    )
}