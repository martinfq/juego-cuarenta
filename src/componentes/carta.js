export default function Carta({valor,color}){
    const carta =  {
        valor: valor,
        color:color
    }
    return <div>{JSON.stringify(carta)}</div>
}