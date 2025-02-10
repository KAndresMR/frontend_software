import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocioService } from '../../services/socio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  private fb = inject(FormBuilder);
  private socioService = inject(SocioService);
  private router = inject(Router);

  public myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(6)]],
    cedula: ['', [Validators.required, Validators.minLength(6)]],
    direccion: ['', [Validators.required, Validators.minLength(6)]],
    telefono: ['', [Validators.required, Validators.minLength(6)]]
  });

  register() {
    const socioRegister = this.myForm.value;

    this.socioService.register(socioRegister).subscribe({
      next: () => this.router.navigateByUrl('/auth/user-register'),
      error: (message) => {
        Swal.fire('Error', message, 'error')
      }
    });

  }

}
