import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { SocioResponse } from '../interfaces/socio-response';
import { Socio } from '../interfaces/usuario-register-response';
import { Cuenta } from '../interfaces/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

    private http = inject(HttpClient);
    private baseUrl: string = 'http://localhost:8080/cuentas';

    constructor() { }

    register(cuenta: Cuenta, idSocio: string) {
      return this.http.post<SocioResponse>(`${this.baseUrl}/${idSocio}`, cuenta)
      .pipe(
        catchError(err => throwError(() => err.error.message))
      );

    }
}
