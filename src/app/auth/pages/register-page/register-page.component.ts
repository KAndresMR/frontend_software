import { Component, inject } from '@angular/core';
import { SocioService } from '../../services/socio.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  private socioService = inject(SocioService);

  constructor() {
    this.socioService.getSocios().subscribe(resp => {
      console.log(resp)
    });

  }

}
