import { Component, ViewChild, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ModalClosureComponent } from '../../../../common/components/modal-closure/modal-closure.component';
import { MatComponentsModule } from '../../../../common/components/mat-components/mat-components.module';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';
import { applicatDataDto, gbodi } from '../../guarentee.models';
import { Subject, takeUntil } from 'rxjs';
import { GuarenteeService } from '../../guarentee.service';
import { LoadingBarComponent } from '../../../../common/components/loading-bar/loading-bar.component';

@Component({
  selector: 'app-form-request-guarentee',
  standalone: true,
  imports: [
    LoadingBarComponent,
    MatProgressBarModule,
    MatDialogModule,
    ModalClosureComponent,
    MatComponentsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  templateUrl: './form-request-guarentee.component.html',
  styleUrl: './form-request-guarentee.component.scss',
})
export class FormRequestGuarenteeComponent {
  @ViewChild(MatStepper) stepper!: MatStepper;
  /**Inyeccion de servicios */
  private _formBuilder = inject(FormBuilder);
  private _guarenteeService = inject(GuarenteeService);
  /** */
  isLinear = false;
  hideRequiredControl = new FormControl(false);
  displayedColumns: string[] = [
    'number', // Nueva columna para el número
    'cage',
    'tdoc',
    'iden',
    'nombre',
    'tper',
    'tact',
    'nit',
    'tctas',
    'tcred',
    'ddil',
    'nrocomercio',
  ];

  dataClientFormGroup =  this._formBuilder.group({                          
      ci: ['', [Validators.required]],                                                                   
      nit: [''],
      extencion: ['']      
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  /**Variables globales */
  dataSource: any;
  loader: boolean = false;
  dataSourceExtencion: gbodi[] = [];
  /** */
  /**Cancela y destruye la suscripcion */
  private destroy$ = new Subject<void>();
  /** */

  ngOnInit(): void {
    this.getTypeExtencion();
    //this.getApplicantData();

  }
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getApplicantData(): void {
    this.loader = true;
    let data: applicatDataDto = new applicatDataDto();
    this._guarenteeService
      .getApplicantData(data)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.dataSource = new MatTableDataSource<applicatDataDto>(response);
          this.loader = false;
        },
        error: (errors) => {
          this.loader = false;
        },
      });
  }
  private getTypeExtencion(): void {
    this._guarenteeService
      .getTypeExtencion()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.dataSourceExtencion = response;
        },
        error: (errors) => {
          console.log(errors);
        },
      });
  }
  onNextFirst() {}

  onNextSecond() {}
}
 
 