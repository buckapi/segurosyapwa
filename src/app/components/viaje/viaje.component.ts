import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { GlobalService } from '../../services/global.service';
import { virtualRouter } from '../../services/virtualRouter.service';
import { HttpClient } from '@angular/common/http';
import { DataApiService } from '../../services/data-api-service';
import { Yeoman } from '../../services/yeoman';

@Component({
  selector: 'app-viaje',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './viaje.component.html',
  styleUrl: './viaje.component.css'
})
export class ViajeComponent {
  request: FormGroup;
  submitted = false;
  public isError = false;
  constructor (
    public global: GlobalService,
    public virtualRouter: virtualRouter,
    public http: HttpClient,
    public formBuilder: FormBuilder,
    public dataApiService: DataApiService,
    public yeoman: Yeoman
  ){
    this.request = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      place: ['', Validators.required],
      destination: ['', Validators.required],
      dateTrip: ['', Validators.required],
      message: ['']
    });
    
}
  get f(): { [key: string]: AbstractControl } {
    return this.request.controls;
  }
  
  
  saveRequest() {
    this.submitted = true; 
  
    // Verifica si el formulario es válido antes de enviarlo
    /* if (this.request.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, complete todos los campos requeridos antes de enviar la solicitud.'
      });
      return;
    } */
  
    let data: any = this.request.value;    
    this.dataApiService.saveRequest(data).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'cotización enviada correctamente.'
        }).then(() => {
          // Limpiar los valores para futuros usos
          this.global.request = '';
          this.global.allRequests.push(response);
          this.global.allRequests = [...this.global.allRequests];
          this.isError = false;
          
          // Reiniciar el formulario
          this.request.reset();
          this.submitted = false;  // Resetear el estado de envío
  
          // Recargar la página
          window.location.reload();
        });
  
        console.log('Solicitud guardada correctamente:', response);
      },
      (error) => {
        this.onIsError();
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al guardar la solicitud. Por favor, inténtelo de nuevo más tarde.'
        });
        console.log('Error al guardar la solicitud:', error);
      }
    );
  }
  ngOnInit(): void {
    this.request = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      place: ['', Validators.required],
      destination: ['', Validators.required],
      dateTrip: ['', Validators.required],
      message: ['']
    });    
  }

  onIsError(): void {
    this.isError = true;
    /* setTimeout(() => {
      this.isError = false;
    }, 4000); */
  }
  }