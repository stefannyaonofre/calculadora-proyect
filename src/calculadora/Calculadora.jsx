import React, { useState } from "react";
import "./calculadora.scss";
import { Button, TextField } from "@mui/material";

const Calculadora = () => {
  const [primerValor, setPrimerValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const handlePrimerValor = (event) => {
    setPrimerValor(event.target.value);
  };

  const handleSegundoValor = (event) => {
    setSegundoValor(event.target.value);
  };

  const handleOperacion = (operador) => {
    console.log(operador);
    console.log(primerValor);
    console.log(segundoValor);
    let result;
    switch (operador) {
      case "+":
        setResultado(Number(primerValor) + Number(segundoValor));
        break;
      case "-":
        setResultado(Number(primerValor) + Number(segundoValor));
        break;
      case "*":
        setResultado(Number(primerValor) * Number(segundoValor));
        break;
      case "/":
        setResultado(Number(primerValor) * Number(segundoValor));
        break;
      case "porcentaje":
        const por = (Number(segundoValor)/100)*Number(primerValor)
        setResultado(`El ${segundoValor}% de ${primerValor} es: ${por}`);
        break;
      case "modulo":
        setResultado(Number(primerValor) % Number(segundoValor))
        break;
    }
  };

  return (
    <main className="main__calculadora">
      <div className="main__calculadora__container">
        <h1>Calculadora</h1>
        <TextField
          id="outlined-basic"
          label="Primer valor"
          variant="outlined"
          value={primerValor}
          onChange={handlePrimerValor}
        />
        <TextField
          id="outlined-basic"
          label="Segundo valor"
          variant="outlined"
          value={segundoValor}
          onChange={handleSegundoValor}
        />
        <p>Elija la operación que desea realizar con los valores Ingresados</p>
        <div className="main__calculadora__container__buttons">
          <Button variant="contained" onClick={() => handleOperacion("+")}>
            Sumar "+"
          </Button>
          <Button variant="contained" onClick={() => handleOperacion("-")}>Restar "-"</Button>
          <Button variant="contained" onClick={() => handleOperacion("*")}>Multiplicación "*"</Button>
          <Button variant="contained" onClick={() => handleOperacion("/")}>División "/"</Button>
          <Button variant="contained" onClick={() => handleOperacion("porcentaje")}>Porcentaje "%"</Button>
          <Button variant="contained" onClick={() => handleOperacion("modulo")}>Modulo "%"</Button>
        </div>
        <span>El resultado es: {resultado}</span>
      </div>
    </main>
  );
};

export default Calculadora;
