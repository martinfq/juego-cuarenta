import Carta from "./carta";

export default function Mazo(){
    const cartas = ["A","2","3","4","5","6","7","J","Q","K"];
    const color = ["Rojo","Negro"];

    
    function cartaAleatoria(){
        const valorAletorio = Math.floor(Math.random()* cartas.length);
        const colorAletoria = Math.floor(Math.random()* color.length);

        return <Carta valor={cartas[valorAletorio]} color={color[colorAletoria]}/>
    }
    return (
        <div>
            {cartaAleatoria()}
        </div>
    );
}