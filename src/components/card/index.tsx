import Link from "next/link";
interface ICardProps {
    title: string
    id: number
    description: string
}
export default function CardExercicios(props: ICardProps) {


    return (
        <>
            <Link href={`exercicio-${props.id}`} className="min-w-128 p-8 flex items-center justify-center rounded-md border border-zinc-300 bg-green-600">
                <p>{props.title}</p>
                <p>{props.description}</p>
                </Link>
        </>
    )
}