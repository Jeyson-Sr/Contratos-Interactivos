import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function FormQuestion({ onRespuestasChange }) {
  const [posicion, setPosicion] = useState(0);
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState({}); // Estado para almacenar las respuestas

  useEffect(() => {
    onRespuestasChange(respuestas); // Pasa las respuestas al componente central
  }, [respuestas, onRespuestasChange]);

  FormQuestion.propTypes = {
    onRespuestasChange: PropTypes.func.isRequired,
  };

  const AumentarPosicion = () => {
    if (posicion < preguntas.length - 1) setPosicion(posicion + 1);
  };
  const DisminuirPosicion = () => {
    if (posicion > 0) setPosicion(posicion - 1);
  };

  useEffect(() => {
    fetch("/datos.json")
      .then((response) => response.json())
      .then((datos) => {
        setPreguntas(datos.rentaInmobiliaria);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  // Manejar el cambio de valor de las inputs
  const handleInputChange = (id, value) => {
    setRespuestas((prev) => ({
      ...prev,
      [id]: value, // Actualiza la respuesta según la pregunta (id)
    }));
  };

  // Función que retorna el JSX según el tipo de entrada
  const renderPregunta = () => {
    if (preguntas.length === 0) return <div>Cargando preguntas...</div>;

    const pregunta = preguntas[posicion];

    if (pregunta.tipo_input === "radio") {
      return pregunta.opciones.map((opcion, index) => (
        <div key={index}>
          <input
            type="radio"
            name={`${pregunta.id}`}
            value={opcion.valor}
            id={`${index + pregunta.id}`}
            checked={respuestas[pregunta.id] === opcion.valor} // Vincular el valor seleccionado al estado
            onChange={(e) => handleInputChange(pregunta.clave, e.target.value)}
            required
          />
          <label htmlFor={`${index + pregunta.id}`}>
            {opcion.texto_al_cambiar}
          </label>
        </div>
      ));
    } else {
      return (
        <input
          className="border px-[10px] py-[5px] border-gray-400 text-gray-900 rounded-[5px] w-[350px]"
          type={pregunta.tipo_input || "text"}
          id={pregunta.id}
          value={respuestas[pregunta.clave] || ""} // Vincular el valor al estado
          onChange={(e) => handleInputChange(pregunta.clave, e.target.value)} // Actualizar el estado al escribir
          required
          placeholder="Escribe algo..."
        />
      );
    }
  };

  //! debo crear otras input parte de text, date, radio, number.
  //! se deben crear checkout, Opcion nada mas por ahora.

  return (
    <div className="flex flex-col justify-between items-start min-h-[100px] px-5 py-[15px] border border-gray-200 shadow-2xl rounded-[10px] w-[400px] mx-[75px] absolute top-[100px] left-0 ">
      <div className="absolute  top-[-30px] left-[1100px] right-[-900px] ">
        <div className="min-w-[130px] bg-blue-950 rounded-full">
          <div
            className="bg-blue-500 h-[25px] rounded-full flex items-center justify-center"
            style={{ width: `${(posicion / preguntas.length) * 100}%` }}
          >
            <span
              className="text-white  font-semibold text-xs px-[40px] "
              id="information_progression"
              >

              </span>
              <b className="text-white">{posicion > 0 ? Math.round((posicion / preguntas.length) * 100) : 0}%</b>
          </div>
        </div>
      </div>
      <div>
        <ExplanationQuestion />
      </div>
      <h3 className="font-medium mb-2 mt-1 transition-all duration-500 ease-in-out ">
        {preguntas[posicion]?.pregunta || "terminar Contrato"}
      </h3>
      <div className="mb-8">{renderPregunta()}</div>
      <div className="justify-end">
        <div className="flex gap-2">
          <button
            onClick={DisminuirPosicion}
            className={`${
              posicion > 0 ? " " : "hidden"
            } bg-gray-400 rounded-4xl px-[8px] py-[6px] font-bold text-[18px] text-white mb-2 cursor-pointer select-none`}
          >
            {`< Paso anterior `}
          </button>
          <button
            onClick={AumentarPosicion}
            className="bg-emerald-300 rounded-4xl px-[8px] py-[6px] font-bold text-[18px] text-blue-950 mb-2 cursor-pointer select-none"
          >
            {`Paso siguiente >`}
          </button>
        </div>
        <div className="flex flex-col items-start">
          <button className="text-[13px] underline text-gray-600 mb-1 cursor-pointer select-none">
            Modificar el modelo
          </button>
          <button className="text-[13px] underline text-gray-600 cursor-pointer select-none">
            Guardar (y sigue después)
          </button>
        </div>
      </div>
    </div>
  );
}

function ExplanationQuestion() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <span
        onClick={toggleVisibility}
        className="bg-emerald-300 px-2 font-bold rounded-2xl absolute top-[18px] right-[10px] cursor-pointer select-none"
      >
        ?
      </span>
      <div
        className={`${
          isVisible ? "" : "hidden"
        } min-w-[750px] absolute rounded-2xl bg-fuchsia-100 border border-emerald-300 top-0 left-[410px] right-[-410px] py-[15px] px-[15px]`}
      >
        <span className="absolute top-1 right-3 text-[20px] font-bold">X</span>
        <div className="text-blue-950 font-medium">
          <p>
            Indique la dirección completa de la parte que interviene en primer
            lugar como arrendadora en este contrato.
            <br />
            <br />
            Esta información es muy importante ya que será utilizada a efectos
            de notificaciones.
          </p>
          <p>
            <br />
            ¿Necesita ayuda personalizada?
            <br />
            Al final, tendrá la opción de consultar a un abogado.
          </p>
        </div>
      </div>
    </>
  );
}
