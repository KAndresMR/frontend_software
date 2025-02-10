// Definimos una interfaz para los detalles de cada transferencia.
export interface Transferencia {
    id: number;
    tipo: string;
    fechaPago: string | null;  // Fecha de pago puede ser nula
    monto: number;
    numeroCuentaDestino: number;
  }
  
  // Definimos una interfaz para la respuesta completa de la API que contiene 'data' y 'infoList'.
  export interface TransferenciaResponse {
    data: Transferencia[];  // La respuesta incluye un arreglo de transferencias
    infoList: any[];        // Info adicional, puedes detallarla más si es necesario
  }
  