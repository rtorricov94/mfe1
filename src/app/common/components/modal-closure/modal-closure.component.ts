import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-modal-closure',
  standalone: true,
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './modal-closure.component.html',
  styleUrl: './modal-closure.component.scss'
})
export class ModalClosureComponent {
  @Input() title!: string;
  constructor(public closure: MatDialogRef<ModalClosureComponent>) {}
  
  /**
  * Función de Formulario del botón Cerrar (Genérico)
    * Actividad del Funcion: Formulario de POP UP del boton cerrar 
  **/
  public closeClick(): void {
      this.closure.close();        
  }
}
