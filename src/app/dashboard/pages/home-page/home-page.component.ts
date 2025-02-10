import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { TransferenciaService } from '../../../services/transferencia.service';
import { Transferencia } from '../../../models/transferencia.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  titulo: string = 'Lista de Socios';
  socios: any[] = []; // Lista de socios
  transferencias: Transferencia[] = []; // Lista de transferencias
  mostrarSociosContenido: boolean = true; // Mostrar Socios por defecto
  mostrarTransferenciasContenido: boolean = false; // Ocultar Transferencias inicialmente

  constructor(
    private usuarioService: UsuarioService,
    private transferenciaService: TransferenciaService
  ) {}

  ngOnInit(): void {
    this.cargarSocios(); // Cargar los socios por defecto
  }

  // Mostrar la sección de Socios
  mostrarSocios(): void {
    this.mostrarSociosContenido = true;
    this.mostrarTransferenciasContenido = false;
    this.titulo = 'Lista de Socios';
    this.cargarSocios(); // Cargar los socios al hacer clic en "Socios"
  }

  // Mostrar la sección de Transferencias
  mostrarTransferencias(): void {
    this.mostrarTransferenciasContenido = true;
    this.mostrarSociosContenido = false;
    this.titulo = 'Lista de Transferencias';
    this.cargarTransferencias(); // Cargar las transferencias al hacer clic en "Transferencias"
  }

  // Cargar los socios desde el servicio
  cargarSocios(): void {
    this.usuarioService.obtenerUsuarios().subscribe({
      next: (datos) => {
        this.socios = datos; // Guardamos los socios obtenidos
      },
      error: (err) => {
        console.error('Error al obtener socios:', err);
      }
    });
  }

  // Cargar las transferencias desde el servicio
  cargarTransferencias(): void {
    this.transferenciaService.obtenerTransferencias().subscribe({
      next: (response) => {
        this.transferencias = response.data; // Guardamos las transferencias obtenidas
      },
      error: (err) => {
        console.error('Error al obtener transferencias:', err);
      }
    });
  }

  // Función de actualizar (puede recargar ambos contenidos)
  actualizar(): void {
    if (this.mostrarSociosContenido) {
      this.cargarSocios(); // Actualizar la lista de socios
    } else if (this.mostrarTransferenciasContenido) {
      this.cargarTransferencias(); // Actualizar la lista de transferencias
    }
  }
}
