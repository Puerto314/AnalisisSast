import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('AnalisisSast');

  usuario: string = '';
  password: string = '';
  mensaje: string = '';

  validar() {

    if (this.usuario === this.password) {
      this.mensaje = 'Registrado';
    } else {
      this.mensaje = 'Error';
    }

  }

}
