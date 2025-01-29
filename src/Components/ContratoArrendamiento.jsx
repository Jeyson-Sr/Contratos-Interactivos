import PropTypes from "prop-types";

import { DocumentoDinamico } from "./DocumentoDinamico";

ContratoArrendamiento.propTypes = {
  ciudad_firma: PropTypes.string.isRequired,
  fecha_firma: PropTypes.string.isRequired,
  nombre_propietario: PropTypes.string.isRequired,
  dni_propietario: PropTypes.string.isRequired,
  nombre_arrendatario: PropTypes.string.isRequired,
  dni_arrendatario: PropTypes.string.isRequired,
  direccion_inmueble: PropTypes.string.isRequired,
  tipo_inmueble: PropTypes.string.isRequired,
  area_m2: PropTypes.string.isRequired,
  num_habitaciones: PropTypes.string.isRequired,
  num_banos: PropTypes.string.isRequired,
  estacionamiento: PropTypes.bool.isRequired,
  fecha_inicio_contrato: PropTypes.string.isRequired,
  duracion_contrato: PropTypes.string.isRequired,
  monto_mensual_renta: PropTypes.string.isRequired,
  servicios_incluidos: PropTypes.string.isRequired,
  mascotas: PropTypes.bool.isRequired,
  amoblado: PropTypes.bool.isRequired,
  aire_acondicionado: PropTypes.bool.isRequired,
  restricciones: PropTypes.string.isRequired,
  fecha_terminacion: PropTypes.string.isRequired,
};

const ContratoArrendamiento = ({
  ciudad_firma,
  fecha_firma,
  nombre_propietario,
  dni_propietario,
  nombre_arrendatario,
  dni_arrendatario,
  direccion_inmueble,
  tipo_inmueble,
  area_m2,
  num_habitaciones,
  num_banos,
  estacionamiento,
  fecha_inicio_contrato,
  duracion_contrato,
  monto_mensual_renta,
  servicios_incluidos,
  mascotas,
  amoblado,
  aire_acondicionado,
  restricciones,
  fecha_terminacion,
}) => {
  const respuestas = {
    ciudad_firma,
    fecha_firma,
    nombre_propietario,
    dni_propietario,
    nombre_arrendatario,
    dni_arrendatario,
    direccion_inmueble,
    tipo_inmueble,
    area_m2,
    num_habitaciones,
    num_banos,
    estacionamiento,
    fecha_inicio_contrato,
    duracion_contrato,
    monto_mensual_renta,
    servicios_incluidos,
    mascotas,
    amoblado,
    aire_acondicionado,
    restricciones,
    fecha_terminacion,
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md border">
      <h1 className="text-2xl font-bold text-center mb-6">
        CONTRATO DE ARRENDAMIENTO
      </h1>
      {/* Pasa el objeto respuestas al componente DocumentoDinamico */}
      <DocumentoDinamico respuestas={respuestas} />
    </div>
  );
};

export default ContratoArrendamiento;
