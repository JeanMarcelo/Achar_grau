import react from "react";
import { useState } from "react";
import Calculation from "./Calculation";

const Header = () => {
  const [variante, setVariante] = useState({ valor: "0" });

  const takeValue = (event) => {
    const { name, value } = event.target;
    setVariante({ ...variante, [name]: value });
  };

  const valorFinal = variante.valor;

  return (
    <div>
      <h1>Achar Grau Pelo mm</h1>
      <div className={"style"}>
        <label className={"header"}>
          {" "}
          Coloque a distância de centro a centro em mm
        </label>
        <input
          type="number"
          min="0"
          max="50"
          name="valor"
          value={variante.valor}
          onChange={takeValue}
        />
      </div>
      <div className={"result"}>
        <Calculation variante={variante.valor} />
      </div>
    </div>
  );
};

export default Header;
