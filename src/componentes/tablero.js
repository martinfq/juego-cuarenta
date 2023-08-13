import Jugador from "./jugador";

export default function Tablero() {
  return <div>
    <div>
        <Jugador />
        <Jugador />
        <Jugador />
        <Jugador />
    </div>
    <button>Juego</button>
  </div>;
}
