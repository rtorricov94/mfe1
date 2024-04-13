import "./chunk-JI7HYCS6.js";

// src/app/main/guarentee-plataform/request-guarentee/request-guarentee.component.ts
import { Component as Component3, ViewChild as ViewChild2, inject as inject3 } from "@angular/core";

// src/app/common/components/mat-components/mat-components.module.ts
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import * as i0 from "@angular/core";
var MatComponentsModule = class _MatComponentsModule {
  static {
    this.\u0275fac = function MatComponentsModule_Factory(t) {
      return new (t || _MatComponentsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({ type: _MatComponentsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({ imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatInputModule,
      MatTableModule
    ] });
  }
};

// src/app/main/guarentee-plataform/request-guarentee/request-guarentee.component.ts
import { MatTableDataSource as MatTableDataSource2, MatTableModule as MatTableModule2 } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatDialog, MatDialogModule as MatDialogModule2 } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { LiveAnnouncer } from "@angular/cdk/a11y";

// src/app/main/guarentee-plataform/request-guarentee/form-request-guarentee/form-request-guarentee.component.ts
import { Component as Component2, ViewChild, inject as inject2 } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatStepper, MatStepperModule } from "@angular/material/stepper";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatProgressBarModule } from "@angular/material/progress-bar";

// src/app/common/components/modal-closure/modal-closure.component.ts
import { Component, Input } from "@angular/core";
import { MatButtonModule as MatButtonModule2 } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import * as i02 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/button";
var ModalClosureComponent = class _ModalClosureComponent {
  constructor(closure) {
    this.closure = closure;
  }
  /**
  * Función de Formulario del botón Cerrar (Genérico)
    * Actividad del Funcion: Formulario de POP UP del boton cerrar
  **/
  closeClick() {
    this.closure.close();
  }
  static {
    this.\u0275fac = function ModalClosureComponent_Factory(t) {
      return new (t || _ModalClosureComponent)(i02.\u0275\u0275directiveInject(i1.MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _ModalClosureComponent, selectors: [["app-modal-closure"]], inputs: { title: "title" }, standalone: true, features: [i02.\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "custom-closure"], ["mat-mini-fab", "", 1, "mat-elevation-z1", "button-sidebar", 3, "click"]], template: function ModalClosureComponent_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275elementStart(0, "div", 0)(1, "b");
        i02.\u0275\u0275text(2);
        i02.\u0275\u0275elementEnd();
        i02.\u0275\u0275elementStart(3, "button", 1);
        i02.\u0275\u0275listener("click", function ModalClosureComponent_Template_button_click_3_listener() {
          return ctx.closeClick();
        });
        i02.\u0275\u0275elementStart(4, "mat-icon");
        i02.\u0275\u0275text(5, "close");
        i02.\u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        i02.\u0275\u0275advance(2);
        i02.\u0275\u0275textInterpolate(ctx.title);
      }
    }, dependencies: [MatIconModule, i2.MatIcon, MatButtonModule2, i3.MatMiniFabButton], styles: ["\n\n.custom-closure[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  border-bottom: 0.5px solid #838181;\n}\n@media (min-width: 600px) {\n  .custom-closure[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=modal-closure.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(ModalClosureComponent, { className: "ModalClosureComponent", filePath: "src\\app\\common\\components\\modal-closure\\modal-closure.component.ts", lineNumber: 14 });
})();

// src/app/main/guarentee-plataform/request-guarentee/form-request-guarentee/form-request-guarentee.component.ts
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableDataSource } from "@angular/material/table";

// src/app/main/guarentee-plataform/guarentee.models.ts
var applicatDataDto = class {
};

// src/app/main/guarentee-plataform/request-guarentee/form-request-guarentee/form-request-guarentee.component.ts
import { Subject, takeUntil } from "rxjs";

// src/app/main/guarentee-plataform/guarentee.service.ts
import { Injectable as Injectable2, inject } from "@angular/core";

// src/app/common/service-http/service-http-guarantee.ts
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import * as i03 from "@angular/core";
import * as i12 from "@angular/common/http";
var apiUrl = "https://localhost:7264/api/v1/guarenteeplataform";
var serviceHttpGuarentee = class _serviceHttpGuarentee {
  /**
  * Constructor
  * @param {HttpClient} _httpClient
  */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
  }
  _buildHttpHeaders() {
    return new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
    });
  }
  /**
  * Get Service Json Services
  * @param content
  * @returns {Promise<any>}
  */
  get(url) {
    return this._httpClient.get(`${apiUrl}/${url}`, { headers: this._buildHttpHeaders() }).pipe(map((r) => r.data));
  }
  /**
   * Post Service Json Services
   * @param content
   * @returns {Promise<any>}
   */
  post(url, content) {
    return this._httpClient.post(`${apiUrl}/${url}`, content, { headers: this._buildHttpHeaders() }).pipe(map((r) => r.data));
  }
  /**
  * put Service Json Services
  * @param content
  * @returns {Promise<any>}
  */
  put(url, content) {
    return this._httpClient.put(`${apiUrl}/${url}`, content, { headers: this._buildHttpHeaders() }).pipe(map((r) => r.data));
  }
  /**
  * delete Service Json Services
  * @param content
  * @returns {Promise<any>}
  */
  delete(url) {
    return this._httpClient.delete(`${apiUrl}/${url}`, { headers: this._buildHttpHeaders() });
  }
  static {
    this.\u0275fac = function serviceHttpGuarentee_Factory(t) {
      return new (t || _serviceHttpGuarentee)(i03.\u0275\u0275inject(i12.HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ i03.\u0275\u0275defineInjectable({ token: _serviceHttpGuarentee, factory: _serviceHttpGuarentee.\u0275fac, providedIn: "root" });
  }
};

// src/app/main/guarentee-plataform/guarentee.service.ts
import * as i04 from "@angular/core";
var GuarenteeService = class _GuarenteeService {
  constructor() {
    this._httpGuarentee = inject(serviceHttpGuarentee);
  }
  /**Request Guarentee Plataform */
  getApplicantData(param) {
    return this._httpGuarentee.post(`getapplicantdata`, param);
  }
  getTypeExtencion() {
    return this._httpGuarentee.get(`gettypeextencion`);
  }
  static {
    this.\u0275fac = function GuarenteeService_Factory(t) {
      return new (t || _GuarenteeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ i04.\u0275\u0275defineInjectable({ token: _GuarenteeService, factory: _GuarenteeService.\u0275fac, providedIn: "root" });
  }
};

// src/app/main/guarentee-plataform/request-guarentee/form-request-guarentee/form-request-guarentee.component.ts
import * as i05 from "@angular/core";
import * as i13 from "@angular/material/progress-bar";
import * as i22 from "@angular/material/dialog";
import * as i32 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/table";
import * as i8 from "@angular/material/stepper";
import * as i9 from "@angular/forms";
import * as i10 from "@angular/material/select";
import * as i11 from "@angular/material/core";
import * as i122 from "@angular/material/checkbox";
function FormRequestGuarenteeComponent_mat_progress_bar_3_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275element(0, "mat-progress-bar", 43);
  }
}
function FormRequestGuarenteeComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275text(0, "Datos Clientes");
  }
}
function FormRequestGuarenteeComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "mat-error");
    i05.\u0275\u0275text(1, "Campo requerido.");
    i05.\u0275\u0275elementEnd();
  }
}
function FormRequestGuarenteeComponent_mat_option_24_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "mat-option", 44);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    i05.\u0275\u0275property("value", option_r2.gbodicorg);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1(" ", option_r2.gbodicorg, " ");
  }
}
function FormRequestGuarenteeComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = i05.\u0275\u0275getCurrentView();
    i05.\u0275\u0275elementStart(0, "td", 45)(1, "mat-checkbox", 46);
    i05.\u0275\u0275listener("click", function FormRequestGuarenteeComponent_td_40_Template_mat_checkbox_click_1_listener($event) {
      i05.\u0275\u0275restoreView(_r3);
      return i05.\u0275\u0275resetView($event.stopPropagation());
    });
    i05.\u0275\u0275elementEnd()();
  }
}
function FormRequestGuarenteeComponent_th_42_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "th", 47);
    i05.\u0275\u0275text(1, "#");
    i05.\u0275\u0275elementEnd();
  }
}
function FormRequestGuarenteeComponent_td_43_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "td", 45);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1(" ", i_r4 + 1, " ");
  }
}
function FormRequestGuarenteeComponent_th_45_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "th", 47);
    i05.\u0275\u0275text(1, " Cod. Agenda ");
    i05.\u0275\u0275elementEnd();
  }
}
function FormRequestGuarenteeComponent_td_46_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "td", 45);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1(" ", element_r5.cage, " ");
  }
}
function FormRequestGuarenteeComponent_th_48_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "th", 47);
    i05.\u0275\u0275text(1, " TipoDocumento ");
    i05.\u0275\u0275elementEnd();
  }
}
function FormRequestGuarenteeComponent_td_49_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "td", 45);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1(" ", element_r6.tdoc, " ");
  }
}
function FormRequestGuarenteeComponent_th_51_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "th", 47);
    i05.\u0275\u0275text(1, " Nro. Identificaci\xF3n ");
    i05.\u0275\u0275elementEnd();
  }
}
function FormRequestGuarenteeComponent_td_52_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "td", 45);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1(" ", element_r7.iden, " ");
  }
}
function FormRequestGuarenteeComponent_th_54_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "th", 47);
    i05.\u0275\u0275text(1, " Nombre/RazonSocial ");
    i05.\u0275\u0275elementEnd();
  }
}
function FormRequestGuarenteeComponent_td_55_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "td", 45);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1(" ", element_r8.nombre, " ");
  }
}
function FormRequestGuarenteeComponent_th_57_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "th", 47);
    i05.\u0275\u0275text(1, " TipoPersona ");
    i05.\u0275\u0275elementEnd();
  }
}
function FormRequestGuarenteeComponent_td_58_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "td", 45);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1(" ", element_r9.tper, " ");
  }
}
function FormRequestGuarenteeComponent_th_60_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "th", 47);
    i05.\u0275\u0275text(1, " TipoActividad ");
    i05.\u0275\u0275elementEnd();
  }
}
function FormRequestGuarenteeComponent_td_61_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "td", 45);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1(" ", element_r10.tact, " ");
  }
}
function FormRequestGuarenteeComponent_th_63_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "th", 47);
    i05.\u0275\u0275text(1, " Nit(PN) ");
    i05.\u0275\u0275elementEnd();
  }
}
function FormRequestGuarenteeComponent_td_64_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "td", 45);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1(" ", element_r11.nit, " ");
  }
}
function FormRequestGuarenteeComponent_th_66_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "th", 47);
    i05.\u0275\u0275text(1, " TieneCuenta? ");
    i05.\u0275\u0275elementEnd();
  }
}
function FormRequestGuarenteeComponent_td_67_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "td", 45);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1(" ", element_r12.tctas, " ");
  }
}
function FormRequestGuarenteeComponent_th_69_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "th", 47);
    i05.\u0275\u0275text(1, " TieneCr\xE9dito? ");
    i05.\u0275\u0275elementEnd();
  }
}
function FormRequestGuarenteeComponent_td_70_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "td", 45);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1(" ", element_r13.tcred, " ");
  }
}
function FormRequestGuarenteeComponent_th_72_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "th", 47);
    i05.\u0275\u0275text(1, " DebidaDiligencia ");
    i05.\u0275\u0275elementEnd();
  }
}
function FormRequestGuarenteeComponent_td_73_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "td", 45);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1(" ", element_r14.ddil, " ");
  }
}
function FormRequestGuarenteeComponent_th_75_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "th", 47);
    i05.\u0275\u0275text(1, " Nro. Comercio ");
    i05.\u0275\u0275elementEnd();
  }
}
function FormRequestGuarenteeComponent_td_76_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "td", 45);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1(" ", element_r15.nrocomercio, " ");
  }
}
function FormRequestGuarenteeComponent_tr_77_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275element(0, "tr", 48);
  }
}
function FormRequestGuarenteeComponent_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275element(0, "tr", 49);
  }
}
function FormRequestGuarenteeComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275text(0, "Done");
  }
}
var FormRequestGuarenteeComponent = class _FormRequestGuarenteeComponent {
  constructor() {
    this._formBuilder = inject2(FormBuilder);
    this._guarenteeService = inject2(GuarenteeService);
    this.isLinear = false;
    this.hideRequiredControl = new FormControl(false);
    this.displayedColumns = [
      "number",
      // Nueva columna para el número
      "cage",
      "tdoc",
      "iden",
      "nombre",
      "tper",
      "tact",
      "nit",
      "tctas",
      "tcred",
      "ddil",
      "nrocomercio"
    ];
    this.dataClientFormGroup = this._formBuilder.group({
      ci: ["", [Validators.required]],
      nit: [""],
      extencion: [""]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
    this.loader = false;
    this.dataSourceExtencion = [];
    this.destroy$ = new Subject();
  }
  /** */
  ngOnInit() {
    this.getTypeExtencion();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  getApplicantData() {
    this.loader = true;
    let data = new applicatDataDto();
    this._guarenteeService.getApplicantData(data).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.dataSource = new MatTableDataSource(response);
        this.loader = false;
      },
      error: (errors) => {
        this.loader = false;
      }
    });
  }
  getTypeExtencion() {
    this._guarenteeService.getTypeExtencion().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.dataSourceExtencion = response;
      },
      error: (errors) => {
        console.log(errors);
      }
    });
  }
  onNextFirst() {
  }
  onNextSecond() {
  }
  static {
    this.\u0275fac = function FormRequestGuarenteeComponent_Factory(t) {
      return new (t || _FormRequestGuarenteeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _FormRequestGuarenteeComponent, selectors: [["app-form-request-guarentee"]], viewQuery: function FormRequestGuarenteeComponent_Query(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275viewQuery(MatStepper, 5);
      }
      if (rf & 2) {
        let _t;
        i05.\u0275\u0275queryRefresh(_t = i05.\u0275\u0275loadQuery()) && (ctx.stepper = _t.first);
      }
    }, standalone: true, features: [i05.\u0275\u0275StandaloneFeature], decls: 98, vars: 13, consts: [["stepper", ""], ["mat-dialog-title", ""], [1, "mat-typography"], ["color", "warn", "mode", "indeterminate", 4, "ngIf"], [1, "mat-elevation-z2", "container-stepper"], ["labelPosition", "bottom", "orientation", "vertical", 3, "linear"], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [1, "input-container"], ["matInput", "", "formControlName", "ci"], [4, "ngIf"], ["matInput", ""], ["formControlName", "extencion"], [3, "value", 4, "ngFor", "ngForOf"], ["color", "primary", 3, "formControl"], ["mat-button", "", "matStepperNext", "", "color", "primary"], ["label", "Verificaci\xF3n de Datos", 3, "stepControl"], [1, "table-responsive", "mat-elevation-z5"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "select"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "number"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "cage"], ["matColumnDef", "tdoc"], ["matColumnDef", "iden"], ["matColumnDef", "nombre"], ["matColumnDef", "tper"], ["matColumnDef", "tact"], ["matColumnDef", "nit"], ["matColumnDef", "tctas"], ["matColumnDef", "tcred"], ["matColumnDef", "ddil"], ["matColumnDef", "nrocomercio"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", "matStepperNext", ""], ["mat-button", "", 3, "click"], ["align", "end", 2, "border-top", "1px solid rgb(187, 186, 186)"], ["mat-stroked-button", "", "mat-dialog-close", ""], ["mat-stroked-button", "", "color", "primary", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["color", "warn", "mode", "indeterminate"], [3, "value"], ["mat-cell", ""], ["color", "primary", 3, "click"], ["mat-header-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function FormRequestGuarenteeComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "h2", 1);
        i05.\u0275\u0275text(1, "Solicitud de Fianza");
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(2, "mat-dialog-content", 2);
        i05.\u0275\u0275template(3, FormRequestGuarenteeComponent_mat_progress_bar_3_Template, 1, 0, "mat-progress-bar", 3);
        i05.\u0275\u0275elementStart(4, "div", 4)(5, "mat-stepper", 5, 0)(7, "mat-step", 6)(8, "form", 7);
        i05.\u0275\u0275template(9, FormRequestGuarenteeComponent_ng_template_9_Template, 1, 0, "ng-template", 8);
        i05.\u0275\u0275elementStart(10, "div", 9)(11, "mat-form-field")(12, "mat-label");
        i05.\u0275\u0275text(13, "Ci");
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275element(14, "input", 10);
        i05.\u0275\u0275template(15, FormRequestGuarenteeComponent_mat_error_15_Template, 2, 0, "mat-error", 11);
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(16, "mat-form-field")(17, "mat-label");
        i05.\u0275\u0275text(18, "Complemento");
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275element(19, "input", 12);
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(20, "mat-form-field")(21, "mat-label");
        i05.\u0275\u0275text(22, "Extenci\xF3n");
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(23, "mat-select", 13);
        i05.\u0275\u0275template(24, FormRequestGuarenteeComponent_mat_option_24_Template, 2, 2, "mat-option", 14);
        i05.\u0275\u0275elementEnd()()();
        i05.\u0275\u0275elementStart(25, "div", 9)(26, "mat-form-field")(27, "mat-label");
        i05.\u0275\u0275text(28, "Nit");
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275element(29, "input", 12);
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(30, "mat-checkbox", 15);
        i05.\u0275\u0275text(31, "Empresa Unipersonal");
        i05.\u0275\u0275elementEnd()();
        i05.\u0275\u0275elementStart(32, "div")(33, "button", 16);
        i05.\u0275\u0275text(34, "Next");
        i05.\u0275\u0275elementEnd()()()();
        i05.\u0275\u0275elementStart(35, "mat-step", 17)(36, "form", 7)(37, "div", 18)(38, "table", 19);
        i05.\u0275\u0275elementContainerStart(39, 20);
        i05.\u0275\u0275template(40, FormRequestGuarenteeComponent_td_40_Template, 2, 0, "td", 21);
        i05.\u0275\u0275elementContainerEnd();
        i05.\u0275\u0275elementContainerStart(41, 22);
        i05.\u0275\u0275template(42, FormRequestGuarenteeComponent_th_42_Template, 2, 0, "th", 23)(43, FormRequestGuarenteeComponent_td_43_Template, 2, 1, "td", 21);
        i05.\u0275\u0275elementContainerEnd();
        i05.\u0275\u0275elementContainerStart(44, 24);
        i05.\u0275\u0275template(45, FormRequestGuarenteeComponent_th_45_Template, 2, 0, "th", 23)(46, FormRequestGuarenteeComponent_td_46_Template, 2, 1, "td", 21);
        i05.\u0275\u0275elementContainerEnd();
        i05.\u0275\u0275elementContainerStart(47, 25);
        i05.\u0275\u0275template(48, FormRequestGuarenteeComponent_th_48_Template, 2, 0, "th", 23)(49, FormRequestGuarenteeComponent_td_49_Template, 2, 1, "td", 21);
        i05.\u0275\u0275elementContainerEnd();
        i05.\u0275\u0275elementContainerStart(50, 26);
        i05.\u0275\u0275template(51, FormRequestGuarenteeComponent_th_51_Template, 2, 0, "th", 23)(52, FormRequestGuarenteeComponent_td_52_Template, 2, 1, "td", 21);
        i05.\u0275\u0275elementContainerEnd();
        i05.\u0275\u0275elementContainerStart(53, 27);
        i05.\u0275\u0275template(54, FormRequestGuarenteeComponent_th_54_Template, 2, 0, "th", 23)(55, FormRequestGuarenteeComponent_td_55_Template, 2, 1, "td", 21);
        i05.\u0275\u0275elementContainerEnd();
        i05.\u0275\u0275elementContainerStart(56, 28);
        i05.\u0275\u0275template(57, FormRequestGuarenteeComponent_th_57_Template, 2, 0, "th", 23)(58, FormRequestGuarenteeComponent_td_58_Template, 2, 1, "td", 21);
        i05.\u0275\u0275elementContainerEnd();
        i05.\u0275\u0275elementContainerStart(59, 29);
        i05.\u0275\u0275template(60, FormRequestGuarenteeComponent_th_60_Template, 2, 0, "th", 23)(61, FormRequestGuarenteeComponent_td_61_Template, 2, 1, "td", 21);
        i05.\u0275\u0275elementContainerEnd();
        i05.\u0275\u0275elementContainerStart(62, 30);
        i05.\u0275\u0275template(63, FormRequestGuarenteeComponent_th_63_Template, 2, 0, "th", 23)(64, FormRequestGuarenteeComponent_td_64_Template, 2, 1, "td", 21);
        i05.\u0275\u0275elementContainerEnd();
        i05.\u0275\u0275elementContainerStart(65, 31);
        i05.\u0275\u0275template(66, FormRequestGuarenteeComponent_th_66_Template, 2, 0, "th", 23)(67, FormRequestGuarenteeComponent_td_67_Template, 2, 1, "td", 21);
        i05.\u0275\u0275elementContainerEnd();
        i05.\u0275\u0275elementContainerStart(68, 32);
        i05.\u0275\u0275template(69, FormRequestGuarenteeComponent_th_69_Template, 2, 0, "th", 23)(70, FormRequestGuarenteeComponent_td_70_Template, 2, 1, "td", 21);
        i05.\u0275\u0275elementContainerEnd();
        i05.\u0275\u0275elementContainerStart(71, 33);
        i05.\u0275\u0275template(72, FormRequestGuarenteeComponent_th_72_Template, 2, 0, "th", 23)(73, FormRequestGuarenteeComponent_td_73_Template, 2, 1, "td", 21);
        i05.\u0275\u0275elementContainerEnd();
        i05.\u0275\u0275elementContainerStart(74, 34);
        i05.\u0275\u0275template(75, FormRequestGuarenteeComponent_th_75_Template, 2, 0, "th", 23)(76, FormRequestGuarenteeComponent_td_76_Template, 2, 1, "td", 21);
        i05.\u0275\u0275elementContainerEnd();
        i05.\u0275\u0275template(77, FormRequestGuarenteeComponent_tr_77_Template, 1, 0, "tr", 35)(78, FormRequestGuarenteeComponent_tr_78_Template, 1, 0, "tr", 36);
        i05.\u0275\u0275elementEnd()();
        i05.\u0275\u0275elementStart(79, "div")(80, "button", 37);
        i05.\u0275\u0275text(81, "Back");
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(82, "button", 38);
        i05.\u0275\u0275text(83, "Next");
        i05.\u0275\u0275elementEnd()()()();
        i05.\u0275\u0275elementStart(84, "mat-step");
        i05.\u0275\u0275template(85, FormRequestGuarenteeComponent_ng_template_85_Template, 1, 0, "ng-template", 8);
        i05.\u0275\u0275elementStart(86, "p");
        i05.\u0275\u0275text(87, "You are now done.");
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(88, "div")(89, "button", 37);
        i05.\u0275\u0275text(90, "Back");
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(91, "button", 39);
        i05.\u0275\u0275listener("click", function FormRequestGuarenteeComponent_Template_button_click_91_listener() {
          i05.\u0275\u0275restoreView(_r1);
          const stepper_r16 = i05.\u0275\u0275reference(6);
          return i05.\u0275\u0275resetView(stepper_r16.reset());
        });
        i05.\u0275\u0275text(92, "Reset");
        i05.\u0275\u0275elementEnd()()()()()();
        i05.\u0275\u0275elementStart(93, "mat-dialog-actions", 40)(94, "button", 41);
        i05.\u0275\u0275text(95, "Cancelar");
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(96, "button", 42);
        i05.\u0275\u0275text(97, "Guardar");
        i05.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        i05.\u0275\u0275advance(3);
        i05.\u0275\u0275property("ngIf", ctx.loader);
        i05.\u0275\u0275advance(2);
        i05.\u0275\u0275property("linear", ctx.isLinear);
        i05.\u0275\u0275advance(2);
        i05.\u0275\u0275property("stepControl", ctx.dataClientFormGroup);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("formGroup", ctx.dataClientFormGroup);
        i05.\u0275\u0275advance(7);
        i05.\u0275\u0275property("ngIf", ctx.dataClientFormGroup.controls["ci"].errors == null ? null : ctx.dataClientFormGroup.controls["ci"].errors["required"]);
        i05.\u0275\u0275advance(9);
        i05.\u0275\u0275property("ngForOf", ctx.dataSourceExtencion);
        i05.\u0275\u0275advance(6);
        i05.\u0275\u0275property("formControl", ctx.hideRequiredControl);
        i05.\u0275\u0275advance(5);
        i05.\u0275\u0275property("stepControl", ctx.secondFormGroup);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("formGroup", ctx.secondFormGroup);
        i05.\u0275\u0275advance(2);
        i05.\u0275\u0275property("dataSource", ctx.dataSource);
        i05.\u0275\u0275advance(39);
        i05.\u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        i05.\u0275\u0275advance(18);
        i05.\u0275\u0275property("mat-dialog-close", true);
      }
    }, dependencies: [
      MatProgressBarModule,
      i13.MatProgressBar,
      MatDialogModule,
      i22.MatDialogClose,
      i22.MatDialogTitle,
      i22.MatDialogActions,
      i22.MatDialogContent,
      MatComponentsModule,
      i32.NgForOf,
      i32.NgIf,
      i4.MatButton,
      i5.MatInput,
      i6.MatFormField,
      i6.MatLabel,
      i6.MatError,
      i7.MatTable,
      i7.MatHeaderCellDef,
      i7.MatHeaderRowDef,
      i7.MatColumnDef,
      i7.MatCellDef,
      i7.MatRowDef,
      i7.MatHeaderCell,
      i7.MatCell,
      i7.MatHeaderRow,
      i7.MatRow,
      MatStepperModule,
      i8.MatStep,
      i8.MatStepLabel,
      i8.MatStepper,
      i8.MatStepperNext,
      i8.MatStepperPrevious,
      FormsModule,
      i9.\u0275NgNoValidate,
      i9.DefaultValueAccessor,
      i9.NgControlStatus,
      i9.NgControlStatusGroup,
      ReactiveFormsModule,
      i9.FormControlDirective,
      i9.FormGroupDirective,
      i9.FormControlName,
      MatFormFieldModule,
      MatSelectModule,
      i10.MatSelect,
      i11.MatOption,
      MatCheckboxModule,
      i122.MatCheckbox
    ], styles: ["\n\n.input-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]    + mat-form-field[_ngcontent-%COMP%] {\n  padding-left: 14px;\n}\n.table-container[_ngcontent-%COMP%] {\n  padding-top: 45px;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  display: block;\n  width: 94%;\n  overflow-x: auto;\n  padding: 35px;\n}\nmat-table[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  display: table;\n  border-collapse: collapse;\n  margin: 0px;\n}\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%] {\n  display: table-row;\n}\nmat-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%] {\n  word-wrap: initial;\n  display: table-cell;\n  padding: 0px 5px;\n  line-break: unset;\n  width: auto;\n  white-space: nowrap;\n  overflow: hidden;\n  vertical-align: middle;\n}\n.container-stepper[_ngcontent-%COMP%] {\n  padding-top: 25px;\n}\n/*# sourceMappingURL=form-request-guarentee.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(FormRequestGuarenteeComponent, { className: "FormRequestGuarenteeComponent", filePath: "src\\app\\main\\guarentee-plataform\\request-guarentee\\form-request-guarentee\\form-request-guarentee.component.ts", lineNumber: 36 });
})();

// src/app/main/guarentee-plataform/request-guarentee/request-guarentee.component.ts
import * as i06 from "@angular/core";
import * as i14 from "@angular/material/card";
import * as i23 from "@angular/material/button";
import * as i33 from "@angular/material/table";
import * as i42 from "@angular/material/paginator";
var _c0 = () => [5, 10, 20];
function RequestGuarenteeComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "th", 16);
    i06.\u0275\u0275text(1, " No. ");
    i06.\u0275\u0275elementEnd();
  }
}
function RequestGuarenteeComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "td", 17);
    i06.\u0275\u0275text(1);
    i06.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r1 = ctx.$implicit;
    i06.\u0275\u0275advance();
    i06.\u0275\u0275textInterpolate1(" ", element_r1.position, " ");
  }
}
function RequestGuarenteeComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "th", 16);
    i06.\u0275\u0275text(1, " Name ");
    i06.\u0275\u0275elementEnd();
  }
}
function RequestGuarenteeComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "td", 17);
    i06.\u0275\u0275text(1);
    i06.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    i06.\u0275\u0275advance();
    i06.\u0275\u0275textInterpolate1(" ", element_r2.name, " ");
  }
}
function RequestGuarenteeComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "th", 16);
    i06.\u0275\u0275text(1, " Weight ");
    i06.\u0275\u0275elementEnd();
  }
}
function RequestGuarenteeComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "td", 17);
    i06.\u0275\u0275text(1);
    i06.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    i06.\u0275\u0275advance();
    i06.\u0275\u0275textInterpolate1(" ", element_r3.weight, " ");
  }
}
function RequestGuarenteeComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "th", 16);
    i06.\u0275\u0275text(1, " Symbol ");
    i06.\u0275\u0275elementEnd();
  }
}
function RequestGuarenteeComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "td", 17);
    i06.\u0275\u0275text(1);
    i06.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    i06.\u0275\u0275advance();
    i06.\u0275\u0275textInterpolate1(" ", element_r4.symbol, " ");
  }
}
function RequestGuarenteeComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275element(0, "tr", 18);
  }
}
function RequestGuarenteeComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275element(0, "tr", 19);
  }
}
var RequestGuarenteeComponent = class _RequestGuarenteeComponent {
  constructor() {
    this.displayedColumns = ["position", "name", "weight", "symbol"];
    this.dataSource = new MatTableDataSource2(ELEMENT_DATA);
    this._liveAnnouncer = inject3(LiveAnnouncer);
    this._dialogService = inject3(MatDialog);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce("Sorting cleared");
    }
  }
  onClick(event) {
    const data = {
      //oldItem : event.row ? event.row.data : any,
      //newItem : new TypeCancellation() ,
    };
    const dialogRef = this._dialogService.open(FormRequestGuarenteeComponent, {
      width: "1200px",
      height: "600px",
      data
    });
    dialogRef.afterClosed().subscribe((o) => {
    });
  }
  static {
    this.\u0275fac = function RequestGuarenteeComponent_Factory(t) {
      return new (t || _RequestGuarenteeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i06.\u0275\u0275defineComponent({ type: _RequestGuarenteeComponent, selectors: [["app-request-guarentee"]], viewQuery: function RequestGuarenteeComponent_Query(rf, ctx) {
      if (rf & 1) {
        i06.\u0275\u0275viewQuery(MatPaginator, 5);
        i06.\u0275\u0275viewQuery(MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        i06.\u0275\u0275queryRefresh(_t = i06.\u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        i06.\u0275\u0275queryRefresh(_t = i06.\u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [i06.\u0275\u0275StandaloneFeature], decls: 29, vars: 5, consts: [[1, "mat-elevation-z5"], [2, "padding", "5px 5px 5px 5px"], [1, "button-container"], ["mat-stroked-button", "", "color", "primary", 1, "mat-elevation-z4", 2, "font-size", "12px", 3, "click"], [1, "mat-elevation-z4"], ["mat-table", "", 2, "font-size", "12px", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", "color", "primary", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["align", "start"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", "", "color", "primary"], ["mat-row", ""]], template: function RequestGuarenteeComponent_Template(rf, ctx) {
      if (rf & 1) {
        i06.\u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
        i06.\u0275\u0275text(4, "Solicitud de fianza");
        i06.\u0275\u0275elementEnd();
        i06.\u0275\u0275elementStart(5, "mat-card-subtitle");
        i06.\u0275\u0275text(6, "Validaci\xF3n");
        i06.\u0275\u0275elementEnd()();
        i06.\u0275\u0275elementStart(7, "mat-card-content")(8, "div", 2)(9, "button", 3);
        i06.\u0275\u0275listener("click", function RequestGuarenteeComponent_Template_button_click_9_listener($event) {
          return ctx.onClick($event);
        });
        i06.\u0275\u0275text(10, " Nueva Solicitud ");
        i06.\u0275\u0275elementEnd()();
        i06.\u0275\u0275elementStart(11, "div", 4)(12, "table", 5);
        i06.\u0275\u0275elementContainerStart(13, 6);
        i06.\u0275\u0275template(14, RequestGuarenteeComponent_th_14_Template, 2, 0, "th", 7)(15, RequestGuarenteeComponent_td_15_Template, 2, 1, "td", 8);
        i06.\u0275\u0275elementContainerEnd();
        i06.\u0275\u0275elementContainerStart(16, 9);
        i06.\u0275\u0275template(17, RequestGuarenteeComponent_th_17_Template, 2, 0, "th", 7)(18, RequestGuarenteeComponent_td_18_Template, 2, 1, "td", 8);
        i06.\u0275\u0275elementContainerEnd();
        i06.\u0275\u0275elementContainerStart(19, 10);
        i06.\u0275\u0275template(20, RequestGuarenteeComponent_th_20_Template, 2, 0, "th", 7)(21, RequestGuarenteeComponent_td_21_Template, 2, 1, "td", 8);
        i06.\u0275\u0275elementContainerEnd();
        i06.\u0275\u0275elementContainerStart(22, 11);
        i06.\u0275\u0275template(23, RequestGuarenteeComponent_th_23_Template, 2, 0, "th", 7)(24, RequestGuarenteeComponent_td_24_Template, 2, 1, "td", 8);
        i06.\u0275\u0275elementContainerEnd();
        i06.\u0275\u0275template(25, RequestGuarenteeComponent_tr_25_Template, 1, 0, "tr", 12)(26, RequestGuarenteeComponent_tr_26_Template, 1, 0, "tr", 13);
        i06.\u0275\u0275elementEnd();
        i06.\u0275\u0275element(27, "mat-paginator", 14);
        i06.\u0275\u0275elementEnd()();
        i06.\u0275\u0275element(28, "mat-card-actions", 15);
        i06.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        i06.\u0275\u0275advance(12);
        i06.\u0275\u0275property("dataSource", ctx.dataSource);
        i06.\u0275\u0275advance(13);
        i06.\u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        i06.\u0275\u0275advance();
        i06.\u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        i06.\u0275\u0275advance();
        i06.\u0275\u0275property("pageSizeOptions", i06.\u0275\u0275pureFunction0(4, _c0));
      }
    }, dependencies: [
      MatComponentsModule,
      i14.MatCard,
      i14.MatCardActions,
      i14.MatCardContent,
      i14.MatCardHeader,
      i14.MatCardSubtitle,
      i14.MatCardTitle,
      i23.MatButton,
      i33.MatTable,
      i33.MatHeaderCellDef,
      i33.MatHeaderRowDef,
      i33.MatColumnDef,
      i33.MatCellDef,
      i33.MatRowDef,
      i33.MatHeaderCell,
      i33.MatCell,
      i33.MatHeaderRow,
      i33.MatRow,
      MatTableModule2,
      MatDialogModule2,
      MatPaginatorModule,
      i42.MatPaginator
    ], styles: ["\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.button-container[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n}\n/*# sourceMappingURL=request-guarentee.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(RequestGuarenteeComponent, { className: "RequestGuarenteeComponent", filePath: "src\\app\\main\\guarentee-plataform\\request-guarentee\\request-guarentee.component.ts", lineNumber: 22 });
})();
var ELEMENT_DATA = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
  { position: 11, name: "Sodium", weight: 22.9897, symbol: "Na" },
  { position: 12, name: "Magnesium", weight: 24.305, symbol: "Mg" },
  { position: 13, name: "Aluminum", weight: 26.9815, symbol: "Al" },
  { position: 14, name: "Silicon", weight: 28.0855, symbol: "Si" },
  { position: 15, name: "Phosphorus", weight: 30.9738, symbol: "P" },
  { position: 16, name: "Sulfur", weight: 32.065, symbol: "S" },
  { position: 17, name: "Chlorine", weight: 35.453, symbol: "Cl" },
  { position: 18, name: "Argon", weight: 39.948, symbol: "Ar" },
  { position: 19, name: "Potassium", weight: 39.0983, symbol: "K" },
  { position: 20, name: "Calcium", weight: 40.078, symbol: "Ca" }
];
export {
  RequestGuarenteeComponent
};
//# sourceMappingURL=Component.js.map
