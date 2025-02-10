export interface UsuarioRegister {
  data:     Datum[];
  infoList: InfoList[];
}

export interface Datum {
  id:          number;
  correo:      string;
  contrasenia: string;
  tipo:        string;
  socio:       Socio;
}

export interface Socio {
  id:        number;
  nombre:    string;
  cedula:    string;
  direccion: string;
  telefono:  string;
  cuentas:   Cuenta[];
}

export interface Cuenta {
  id:            number;
  numeroCuenta:  number;
  saldo:         number;
  transacciones: any[];
}

export interface InfoList {
  codigo:   number;
  mensaje:  string;
  tipoInfo: number;
}
