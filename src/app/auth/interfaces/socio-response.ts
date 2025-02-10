export interface SocioResponse {
  data:     Datum[];
  infoList: InfoList[];
}

export interface Datum {
  id:        number;
  nombre:    string;
  cedula:    string;
  direccion: string;
  telefono:  string;
  cuentas:   null;
}

export interface InfoList {
  codigo:   number;
  mensaje:  string;
  tipoInfo: number;
}
