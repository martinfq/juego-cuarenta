import { useEffect, useState } from "react";
import Carta from "./carta";

export default function Mazo() {
  const cartas = ["A", "2", "3", "4", "5", "6", "7", "J", "Q", "K"];
  const color = ["Rojo", "Negro"];

  const [valorCarta, setValorCarta] = useState("");
  const [colorCarta, setColorCarta] = useState("");

  function cartaAleatoria() {
    const valorAletorio = Math.floor(Math.random() * cartas.length);
    const colorAletoria = Math.floor(Math.random() * color.length);

    setValorCarta(cartas[valorAletorio]);
    setColorCarta(color[colorAletoria]);
  }
  useEffect(() => {
    cartaAleatoria();
  });
  return (
    <div>
      <Carta valor={valorCarta} color={colorCarta} />
    </div>
  );
}
