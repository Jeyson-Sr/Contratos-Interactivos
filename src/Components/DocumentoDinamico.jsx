import PropTypes from 'prop-types';

export function DocumentoDinamico({ respuestas }) {
  DocumentoDinamico.propTypes = {
    respuestas: PropTypes.object.isRequired
  };

  return (
    <div className=' w-[830px] h-[100hv] overflow-auto  border border-gray-300 rounded-[10px] p-5 absolute top-[100px] right-30'>
        <div>
        <strong className='text-center'>CONTRATO DE ARRENDAMIENTO DE VIVIENDA</strong>
      <p>
        En la ciudad de <span className="font-semibold">{respuestas.ciudad_firma || "________"}</span>, a los
        <span className="font-semibold"> {respuestas.fecha_firma || "________"}</span>, se celebra el presente contrato de arrendamiento entre las siguientes partes:
      </p>

      <h2 className="text-lg font-bold mt-6 mb-2">1. PARTES DEL CONTRATO:</h2>
      <p>Propietario: <span className="font-semibold">{respuestas.nombre_propietario || "________"}</span>, identificado con DNI <span className="font-semibold">{respuestas.dni_propietario || "________"}</span>.</p>
      <p>Arrendatario: <span className="font-semibold">{respuestas.nombre_arrendatario || "________"}</span>, identificado con DNI <span className="font-semibold">{respuestas.dni_arrendatario || "________"}</span>.</p>

      <h2 className="text-lg font-bold mt-6 mb-2">2. DESCRIPCIÓN DEL INMUEBLE:</h2>
      <p>Dirección: <span className="font-semibold">{respuestas.direccion_inmueble || "________"}</span></p>
      <p>Tipo de inmueble: <span className="font-semibold">{respuestas.tipo_inmueble || "________"}</span></p>
      <p>Área del inmueble: <span className="font-semibold">{respuestas.area_m2 || "________"}</span> m²</p>
      <p>Habitaciones: <span className="font-semibold">{respuestas.num_habitaciones || "________"}</span></p>
      <p>Baños: <span className="font-semibold">{respuestas.num_banos || "________"}</span></p>
      <p>Estacionamiento: <span className="font-semibold">{respuestas.estacionamiento || "________"}</span></p>

      <h2 className="text-lg font-bold mt-6 mb-2">3. CONDICIONES DEL ARRENDAMIENTO:</h2>
      <p>Fecha de inicio del contrato: <span className="font-semibold">{respuestas.fecha_inicio_contrato || "________"}</span></p>
      <p>Duración del contrato: <span className="font-semibold">{respuestas.duracion_contrato || "________"}</span> meses</p>
      <p>Monto mensual de la renta: S/ <span className="font-semibold">{respuestas.monto_mensual_renta || "________"}</span></p>

      <h2 className="text-lg font-bold mt-6 mb-2">4. SERVICIOS INCLUIDOS:</h2>
      <p>{respuestas.servicios_incluidos || "________"}</p>

      <h2 className="text-lg font-bold mt-6 mb-2">5. CONDICIONES ADICIONALES:</h2>
      <p>¿Se permiten mascotas?: <span className="font-semibold">{respuestas.mascotas || "________"}</span></p>
      <p>¿El inmueble está amoblado?: <span className="font-semibold">{respuestas.amoblado || "________"}</span></p>
      <p>¿Cuenta con aire acondicionado?: <span className="font-semibold">{respuestas.aire_acondicionado || "________"}</span></p>
      <p>Restricciones de uso: <span className="font-semibold">{respuestas.restricciones || "________"}</span></p>

      <h2 className="text-lg font-bold mt-6 mb-2">6. OBLIGACIONES DE LAS PARTES:</h2>
      <p className="font-bold">Del Propietario:</p>
      <ul className="list-disc list-inside">
        <li>Garantizar la disponibilidad del inmueble en las condiciones establecidas.</li>
        <li>Respetar los acuerdos establecidos en el presente contrato.</li>
      </ul>
      <p className="font-bold mt-2">Del Arrendatario:</p>
      <ul className="list-disc list-inside">
        <li>Pagar puntualmente la renta mensual.</li>
        <li>Utilizar el inmueble exclusivamente para fines residenciales.</li>
        <li>Respetar las restricciones de uso y las normativas vigentes.</li>
      </ul>

      <h2 className="text-lg font-bold mt-6 mb-2">7. TERMINACIÓN DEL CONTRATO:</h2>
      <p>
        El presente contrato finalizará el <span className="font-semibold">{respuestas.fecha_terminacion || "________"}</span>, salvo acuerdo mutuo o incumplimiento de las cláusulas establecidas.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-2">8. RESOLUCIÓN DE CONTROVERSIAS:</h2>
      <p>
        Cualquier controversia derivada del presente contrato será resuelta conforme a las leyes peruanas, en la jurisdicción de <span className="font-semibold">{respuestas.ciudad_firma || "________"}</span>.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-2">FIRMAS:</h2>
      <div className="flex justify-between mt-4">
        <div>
          <p className="font-bold">Propietario:</p>
          <p className="mt-2">{respuestas.nombre_propietario || "________"}</p>
        </div>
        <div>
          <p className="font-bold">Arrendatario:</p>
          <p className="mt-2">{respuestas.nombre_arrendatario || "________"}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

DocumentoDinamico.propTypes = {
  respuestas: PropTypes.object.isRequired,
};
