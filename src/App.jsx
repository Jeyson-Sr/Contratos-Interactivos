import { useState } from "react";
import { FormQuestion } from "./Components/FormQuestion";
import { DocumentoDinamico } from "./Components/DocumentoDinamico";

function App() {
  const [respuestasGlobales, setRespuestasGlobales] = useState({});
  return (
    <div className="w-[100%] relative">
      <FormQuestion onRespuestasChange={setRespuestasGlobales} />
      <DocumentoDinamico respuestas={respuestasGlobales} />
    </div>
  );
}

export default App;
