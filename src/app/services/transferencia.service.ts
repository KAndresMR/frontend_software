import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransferenciaResponse } from '../models/transferencia.interface';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private apiUrl = 'http://localhost:8080/transacciones'; // Cambiar si es necesario

  constructor(private http: HttpClient) {}

  obtenerTransferencias(): Observable<TransferenciaResponse> {
    return this.http.get<TransferenciaResponse>(this.apiUrl);  // Usamos la interfaz como tipo de respuesta
  }
}
