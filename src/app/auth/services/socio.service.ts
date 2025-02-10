import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { SocioResponse } from '../interfaces/socio-response';
import { Socio } from '../interfaces/usuario-register-response';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

    private http = inject(HttpClient);
    private baseUrl: string = 'http://localhost:8080/socios';

    constructor() { }

    getSocios(): Observable<SocioResponse> {
      return this.http.get<SocioResponse>(this.baseUrl).pipe(
        catchError(err => throwError(() => err.error.message))
      );
    }

    register(socio: Socio) {

      return this.http.post<SocioResponse>(this.baseUrl, socio)
      .pipe(
        catchError(err => throwError(() => err.error.message))
      );

    }
}
