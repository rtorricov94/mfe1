// node_modules/@angular/material/fesm2022/divider.mjs
import * as i0 from "@angular/core";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, NgModule } from "@angular/core";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { MatCommonModule } from "@angular/material/core";
var MatDivider = class _MatDivider {
  constructor() {
    this._vertical = false;
    this._inset = false;
  }
  /** Whether the divider is vertically aligned. */
  get vertical() {
    return this._vertical;
  }
  set vertical(value) {
    this._vertical = coerceBooleanProperty(value);
  }
  /** Whether the divider is an inset divider. */
  get inset() {
    return this._inset;
  }
  set inset(value) {
    this._inset = coerceBooleanProperty(value);
  }
  static {
    this.ɵfac = function MatDivider_Factory(t) {
      return new (t || _MatDivider)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
      type: _MatDivider,
      selectors: [["mat-divider"]],
      hostAttrs: ["role", "separator", 1, "mat-divider"],
      hostVars: 7,
      hostBindings: function MatDivider_HostBindings(rf, ctx) {
        if (rf & 2) {
          i0.ɵɵattribute("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
          i0.ɵɵclassProp("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
        }
      },
      inputs: {
        vertical: "vertical",
        inset: "inset"
      },
      standalone: true,
      features: [i0.ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function MatDivider_Template(rf, ctx) {},
      styles: [".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color);border-top-width:var(--mat-divider-width)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color);border-right-width:var(--mat-divider-width)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatDivider, [{
    type: Component,
    args: [{
      selector: "mat-divider",
      host: {
        "role": "separator",
        "[attr.aria-orientation]": 'vertical ? "vertical" : "horizontal"',
        "[class.mat-divider-vertical]": "vertical",
        "[class.mat-divider-horizontal]": "!vertical",
        "[class.mat-divider-inset]": "inset",
        "class": "mat-divider"
      },
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      styles: [".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color);border-top-width:var(--mat-divider-width)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color);border-right-width:var(--mat-divider-width)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"]
    }]
  }], null, {
    vertical: [{
      type: Input
    }],
    inset: [{
      type: Input
    }]
  });
})();
var MatDividerModule = class _MatDividerModule {
  static {
    this.ɵfac = function MatDividerModule_Factory(t) {
      return new (t || _MatDividerModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */i0.ɵɵdefineNgModule({
      type: _MatDividerModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */i0.ɵɵdefineInjector({
      imports: [MatCommonModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatDividerModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatDivider],
      exports: [MatDivider, MatCommonModule]
    }]
  }], null, null);
})();
export { MatDivider, MatDividerModule };