// src/app/common/components/loading-bar/loading-bar.component.ts
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatProgressBarModule } from "@angular/material/progress-bar";

// src/app/common/interceptor/loading.interceptor.service.ts
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
var LoadingInterceptorService = class _LoadingInterceptorService {
  constructor() {
    this.loadingSub = new BehaviorSubject(false);
    this.loadingMap = /* @__PURE__ */ new Map();
  }
  setLoading(state, url) {
    if (state) {
      this.loadingMap.set(url, true);
      this.loadingSub.next(true);
    } else {
      this.loadingMap.delete(url);
      if (this.loadingMap.size === 0) {
        this.loadingSub.next(false);
      }
    }
  }
  static {
    this.\u0275fac = function LoadingInterceptorService_Factory(t) {
      return new (t || _LoadingInterceptorService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _LoadingInterceptorService, factory: _LoadingInterceptorService.\u0275fac, providedIn: "root" });
  }
};

// src/app/common/components/loading-bar/loading-bar.component.ts
import * as i02 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/progress-bar";
function LoadingBarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "div");
    i02.\u0275\u0275element(1, "mat-progress-bar", 1);
    i02.\u0275\u0275elementEnd();
  }
}
var LoadingBarComponent = class _LoadingBarComponent {
  constructor() {
    this.isSpinnerVisible = false;
    this.loadingService = inject(LoadingInterceptorService);
  }
  ngOnInit() {
  }
  ngOnDestroy() {
  }
  static {
    this.\u0275fac = function LoadingBarComponent_Factory(t) {
      return new (t || _LoadingBarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _LoadingBarComponent, selectors: [["app-loading-bar"]], standalone: true, features: [i02.\u0275\u0275StandaloneFeature], decls: 2, vars: 3, consts: [[4, "ngIf"], ["mode", "indeterminate"]], template: function LoadingBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275template(0, LoadingBarComponent_div_0_Template, 2, 0, "div", 0);
        i02.\u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        i02.\u0275\u0275property("ngIf", i02.\u0275\u0275pipeBind1(1, 1, ctx.loadingService.loadingSub));
      }
    }, dependencies: [CommonModule, i1.NgIf, i1.AsyncPipe, MatProgressBarModule, i2.MatProgressBar], styles: ["\n\nmat-progress-bar[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  background-color: rgb(243, 242, 242);\n}\n/*# sourceMappingURL=loading-bar.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(LoadingBarComponent, { className: "LoadingBarComponent", filePath: "src\\app\\common\\components\\loading-bar\\loading-bar.component.ts", lineNumber: 16 });
})();

export {
  LoadingBarComponent
};
//# sourceMappingURL=chunk-JI7HYCS6.js.map
