// node_modules/@angular/material/fesm2022/stepper.mjs
import { TemplatePortal, CdkPortalOutlet, PortalModule } from "@angular/cdk/portal";
import { CdkStepLabel, CdkStepHeader, CdkStep, STEPPER_GLOBAL_OPTIONS, CdkStepper, CdkStepperNext, CdkStepperPrevious, CdkStepperModule } from "@angular/cdk/stepper";
import { NgTemplateOutlet, CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import { Directive, Injectable, Optional, SkipSelf, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, forwardRef, Inject, ContentChild, QueryList, EventEmitter, inject, ViewChildren, ContentChildren, Output, NgModule } from "@angular/core";
import * as i1 from "@angular/material/core";
import { MatRipple, ErrorStateMatcher as ErrorStateMatcher2, MatCommonModule, MatRippleModule } from "@angular/material/core";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import * as i2 from "@angular/cdk/a11y";
import { Subject, Subscription } from "rxjs";
import * as i2$1 from "@angular/cdk/bidi";
import { switchMap, map, startWith, takeUntil, distinctUntilChanged } from "rxjs/operators";
import { trigger, state, style, transition, group, animate, query, animateChild } from "@angular/animations";
import { Platform } from "@angular/cdk/platform";
function MatStepHeader_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
  }
}
function MatStepHeader_Conditional_4_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0._getDefaultTextForState(ctx_r0.state));
  }
}
function MatStepHeader_Conditional_4_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0._intl.completedLabel);
  }
}
function MatStepHeader_Conditional_4_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0._intl.editableLabel);
  }
}
function MatStepHeader_Conditional_4_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵtemplate(0, MatStepHeader_Conditional_4_Case_1_Conditional_0_Template, 2, 1, "span", 8)(1, MatStepHeader_Conditional_4_Case_1_Conditional_1_Template, 2, 1);
    i0.ɵɵelementStart(2, "mat-icon", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(0, ctx_r0.state === "done" ? 0 : ctx_r0.state === "edit" ? 1 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0._getDefaultTextForState(ctx_r0.state));
  }
}
function MatStepHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵtemplate(0, MatStepHeader_Conditional_4_Case_0_Template, 2, 1)(1, MatStepHeader_Conditional_4_Case_1_Template, 4, 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(0, (tmp_1_0 = ctx_r0.state) === "number" ? 0 : 1);
  }
}
function MatStepHeader_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementContainer(1, 9);
    i0.ɵɵelementEnd();
  }
  if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", ctx.template);
  }
}
function MatStepHeader_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.label);
  }
}
function MatStepHeader_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0._intl.optionalLabel);
  }
}
function MatStepHeader_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.errorMessage);
  }
}
var _c0 = ["*"];
function MatStep_ng_template_0_ng_template_1_Template(rf, ctx) {}
function MatStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵprojection(0);
    i0.ɵɵtemplate(1, MatStep_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("cdkPortalOutlet", ctx_r0._portal);
  }
}
var _c1 = (a0, a1) => ({
  step: a0,
  i: a1
});
var _c2 = a0 => ({
  "animationDuration": a0
});
var _c3 = (a0, a1) => ({
  "value": a0,
  "params": a1
});
function MatStepper_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵprojection(0);
  }
}
function MatStepper_Case_1_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelement(0, "div", 6);
  }
}
function MatStepper_Case_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementContainer(0, 5);
    i0.ɵɵtemplate(1, MatStepper_Case_1_For_3_Conditional_1_Template, 1, 0, "div", 6);
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const i_r2 = ctx.$index;
    const ɵi_8_r3 = ctx.$index;
    const ɵ$count_8_r4 = ctx.$count;
    i0.ɵɵnextContext(2);
    const stepTemplate_r5 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngTemplateOutlet", stepTemplate_r5)("ngTemplateOutletContext", i0.ɵɵpureFunction2(3, _c1, step_r1, i_r2));
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, !(ɵi_8_r3 === ɵ$count_8_r4 - 1) ? 1 : -1);
  }
}
function MatStepper_Case_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵlistener("@horizontalStepTransition.done", function MatStepper_Case_1_For_6_Template_div_animation_horizontalStepTransition_done_0_listener($event) {
      i0.ɵɵrestoreView(_r6);
      const ctx_r6 = i0.ɵɵnextContext(2);
      return i0.ɵɵresetView(ctx_r6._animationDone.next($event));
    });
    i0.ɵɵelementContainer(1, 8);
    i0.ɵɵelementEnd();
  }
  if (rf & 2) {
    const step_r8 = ctx.$implicit;
    const i_r9 = ctx.$index;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("mat-horizontal-stepper-content-inactive", ctx_r6.selectedIndex !== i_r9);
    i0.ɵɵproperty("@horizontalStepTransition", i0.ɵɵpureFunction2(8, _c3, ctx_r6._getAnimationDirection(i_r9), i0.ɵɵpureFunction1(6, _c2, ctx_r6._getAnimationDuration())))("id", ctx_r6._getStepContentId(i_r9));
    i0.ɵɵattribute("aria-labelledby", ctx_r6._getStepLabelId(i_r9));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", step_r8.content);
  }
}
function MatStepper_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵrepeaterCreate(2, MatStepper_Case_1_For_3_Template, 2, 6, null, null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 3);
    i0.ɵɵrepeaterCreate(5, MatStepper_Case_1_For_6_Template, 2, 11, "div", 4, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r6.steps);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r6.steps);
  }
}
function MatStepper_Case_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementContainer(1, 5);
    i0.ɵɵelementStart(2, "div", 10)(3, "div", 11);
    i0.ɵɵlistener("@verticalStepTransition.done", function MatStepper_Case_2_For_1_Template_div_animation_verticalStepTransition_done_3_listener($event) {
      i0.ɵɵrestoreView(_r10);
      const ctx_r6 = i0.ɵɵnextContext(2);
      return i0.ɵɵresetView(ctx_r6._animationDone.next($event));
    });
    i0.ɵɵelementStart(4, "div", 12);
    i0.ɵɵelementContainer(5, 8);
    i0.ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const step_r11 = ctx.$implicit;
    const i_r12 = ctx.$index;
    const ɵi_22_r13 = ctx.$index;
    const ɵ$count_22_r14 = ctx.$count;
    const ctx_r6 = i0.ɵɵnextContext(2);
    const stepTemplate_r5 = i0.ɵɵreference(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", stepTemplate_r5)("ngTemplateOutletContext", i0.ɵɵpureFunction2(10, _c1, step_r11, i_r12));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("mat-stepper-vertical-line", !(ɵi_22_r13 === ɵ$count_22_r14 - 1));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("mat-vertical-stepper-content-inactive", ctx_r6.selectedIndex !== i_r12);
    i0.ɵɵproperty("@verticalStepTransition", i0.ɵɵpureFunction2(15, _c3, ctx_r6._getAnimationDirection(i_r12), i0.ɵɵpureFunction1(13, _c2, ctx_r6._getAnimationDuration())))("id", ctx_r6._getStepContentId(i_r12));
    i0.ɵɵattribute("aria-labelledby", ctx_r6._getStepLabelId(i_r12));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", step_r11.content);
  }
}
function MatStepper_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, MatStepper_Case_2_For_1_Template, 6, 18, "div", 9, i0.ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r6.steps);
  }
}
function MatStepper_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-step-header", 13);
    i0.ɵɵlistener("click", function MatStepper_ng_template_3_Template_mat_step_header_click_0_listener() {
      const step_r16 = i0.ɵɵrestoreView(_r15).step;
      return i0.ɵɵresetView(step_r16.select());
    })("keydown", function MatStepper_ng_template_3_Template_mat_step_header_keydown_0_listener($event) {
      i0.ɵɵrestoreView(_r15);
      const ctx_r6 = i0.ɵɵnextContext();
      return i0.ɵɵresetView(ctx_r6._onKeydown($event));
    });
    i0.ɵɵelementEnd();
  }
  if (rf & 2) {
    const step_r16 = ctx.step;
    const i_r17 = ctx.i;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("mat-horizontal-stepper-header", ctx_r6.orientation === "horizontal")("mat-vertical-stepper-header", ctx_r6.orientation === "vertical");
    i0.ɵɵproperty("tabIndex", ctx_r6._getFocusIndex() === i_r17 ? 0 : -1)("id", ctx_r6._getStepLabelId(i_r17))("index", i_r17)("state", ctx_r6._getIndicatorType(i_r17, step_r16.state))("label", step_r16.stepLabel || step_r16.label)("selected", ctx_r6.selectedIndex === i_r17)("active", ctx_r6._stepIsNavigable(i_r17, step_r16))("optional", step_r16.optional)("errorMessage", step_r16.errorMessage)("iconOverrides", ctx_r6._iconOverrides)("disableRipple", ctx_r6.disableRipple || !ctx_r6._stepIsNavigable(i_r17, step_r16))("color", step_r16.color || ctx_r6.color);
    i0.ɵɵattribute("aria-posinset", i_r17 + 1)("aria-setsize", ctx_r6.steps.length)("aria-controls", ctx_r6._getStepContentId(i_r17))("aria-selected", ctx_r6.selectedIndex == i_r17)("aria-label", step_r16.ariaLabel || null)("aria-labelledby", !step_r16.ariaLabel && step_r16.ariaLabelledby ? step_r16.ariaLabelledby : null)("aria-disabled", ctx_r6._stepIsNavigable(i_r17, step_r16) ? null : true);
  }
}
var MatStepLabel = class _MatStepLabel extends CdkStepLabel {
  static {
    this.ɵfac = /* @__PURE__ */(() => {
      let ɵMatStepLabel_BaseFactory;
      return function MatStepLabel_Factory(t) {
        return (ɵMatStepLabel_BaseFactory || (ɵMatStepLabel_BaseFactory = i0.ɵɵgetInheritedFactory(_MatStepLabel)))(t || _MatStepLabel);
      };
    })();
  }
  static {
    this.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
      type: _MatStepLabel,
      selectors: [["", "matStepLabel", ""]],
      standalone: true,
      features: [i0.ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepLabel, [{
    type: Directive,
    args: [{
      selector: "[matStepLabel]",
      standalone: true
    }]
  }], null, null);
})();
var MatStepperIntl = class _MatStepperIntl {
  constructor() {
    this.changes = new Subject();
    this.optionalLabel = "Optional";
    this.completedLabel = "Completed";
    this.editableLabel = "Editable";
  }
  static {
    this.ɵfac = function MatStepperIntl_Factory(t) {
      return new (t || _MatStepperIntl)();
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
      token: _MatStepperIntl,
      factory: _MatStepperIntl.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepperIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatStepperIntl();
}
var MAT_STEPPER_INTL_PROVIDER = {
  provide: MatStepperIntl,
  deps: [[new Optional(), new SkipSelf(), MatStepperIntl]],
  useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};
var MatStepHeader = class _MatStepHeader extends CdkStepHeader {
  constructor(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
    super(_elementRef);
    this._intl = _intl;
    this._focusMonitor = _focusMonitor;
    this._intlSubscription = _intl.changes.subscribe(() => changeDetectorRef.markForCheck());
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    this._intlSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Focuses the step header. */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._elementRef, origin, options);
    } else {
      this._elementRef.nativeElement.focus(options);
    }
  }
  /** Returns string label of given step if it is a text label. */
  _stringLabel() {
    return this.label instanceof MatStepLabel ? null : this.label;
  }
  /** Returns MatStepLabel if the label of given step is a template label. */
  _templateLabel() {
    return this.label instanceof MatStepLabel ? this.label : null;
  }
  /** Returns the host HTML element. */
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  /** Template context variables that are exposed to the `matStepperIcon` instances. */
  _getIconContext() {
    return {
      index: this.index,
      active: this.active,
      optional: this.optional
    };
  }
  _getDefaultTextForState(state2) {
    if (state2 == "number") {
      return `${this.index + 1}`;
    }
    if (state2 == "edit") {
      return "create";
    }
    if (state2 == "error") {
      return "warning";
    }
    return state2;
  }
  static {
    this.ɵfac = function MatStepHeader_Factory(t) {
      return new (t || _MatStepHeader)(i0.ɵɵdirectiveInject(MatStepperIntl), i0.ɵɵdirectiveInject(i2.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
      type: _MatStepHeader,
      selectors: [["mat-step-header"]],
      hostAttrs: ["role", "tab", 1, "mat-step-header"],
      hostVars: 2,
      hostBindings: function MatStepHeader_HostBindings(rf, ctx) {
        if (rf & 2) {
          i0.ɵɵclassMap("mat-" + (ctx.color || "primary"));
        }
      },
      inputs: {
        state: "state",
        label: "label",
        errorMessage: "errorMessage",
        iconOverrides: "iconOverrides",
        index: "index",
        selected: "selected",
        active: "active",
        optional: "optional",
        disableRipple: "disableRipple",
        color: "color"
      },
      standalone: true,
      features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature],
      decls: 10,
      vars: 17,
      consts: [["matRipple", "", 1, "mat-step-header-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-step-label"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"], ["aria-hidden", "true"], [1, "cdk-visually-hidden"], [3, "ngTemplateOutlet"]],
      template: function MatStepHeader_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelement(0, "div", 0);
          i0.ɵɵelementStart(1, "div")(2, "div", 1);
          i0.ɵɵtemplate(3, MatStepHeader_Conditional_3_Template, 1, 2, "ng-container", 2)(4, MatStepHeader_Conditional_4_Template, 2, 1);
          i0.ɵɵelementEnd()();
          i0.ɵɵelementStart(5, "div", 3);
          i0.ɵɵtemplate(6, MatStepHeader_Conditional_6_Template, 2, 1, "div", 4)(7, MatStepHeader_Conditional_7_Template, 2, 1)(8, MatStepHeader_Conditional_8_Template, 2, 1, "div", 5)(9, MatStepHeader_Conditional_9_Template, 2, 1, "div", 6);
          i0.ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_8_0;
          i0.ɵɵproperty("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
          i0.ɵɵadvance();
          i0.ɵɵclassMapInterpolate1("mat-step-icon-state-", ctx.state, " mat-step-icon");
          i0.ɵɵclassProp("mat-step-icon-selected", ctx.selected);
          i0.ɵɵadvance(2);
          i0.ɵɵconditional(3, ctx.iconOverrides && ctx.iconOverrides[ctx.state] ? 3 : 4);
          i0.ɵɵadvance(2);
          i0.ɵɵclassProp("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
          i0.ɵɵadvance();
          i0.ɵɵconditional(6, (tmp_8_0 = ctx._templateLabel()) ? 6 : ctx._stringLabel() ? 7 : -1, tmp_8_0);
          i0.ɵɵadvance(2);
          i0.ɵɵconditional(8, ctx.optional && ctx.state != "error" ? 8 : -1);
          i0.ɵɵadvance();
          i0.ɵɵconditional(9, ctx.state === "error" ? 9 : -1);
        }
      },
      dependencies: [MatRipple, NgTemplateOutlet, MatIcon],
      styles: ['.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color);border-radius:var(--mat-stepper-header-hover-state-layer-shape)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color);border-radius:var(--mat-stepper-header-focus-state-layer-shape)}@media(hover: none){.mat-step-header:hover{background:none}}.cdk-high-contrast-active .mat-step-header{outline:solid 1px}.cdk-high-contrast-active .mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.cdk-high-contrast-active .mat-step-header[aria-disabled=true]{outline-color:GrayText}.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-label,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-icon,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color)}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color);background-color:var(--mat-stepper-header-icon-background-color)}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color);color:var(--mat-stepper-header-error-state-icon-foreground-color)}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font);font-size:var(--mat-stepper-header-label-text-size);font-weight:var(--mat-stepper-header-label-text-weight);color:var(--mat-stepper-header-label-text-color)}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color)}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color);font-size:var(--mat-stepper-header-error-state-label-text-size)}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size);font-weight:var(--mat-stepper-header-selected-state-label-text-weight)}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color);color:var(--mat-stepper-header-selected-state-icon-foreground-color)}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color);color:var(--mat-stepper-header-edit-state-icon-foreground-color)}'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepHeader, [{
    type: Component,
    args: [{
      selector: "mat-step-header",
      host: {
        "class": "mat-step-header",
        "[class]": '"mat-" + (color || "primary")',
        "role": "tab"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatRipple, NgTemplateOutlet, MatIcon],
      template: `<div class="mat-step-header-ripple mat-focus-indicator" matRipple
     [matRippleTrigger]="_getHostElement()"
     [matRippleDisabled]="disableRipple"></div>

<div class="mat-step-icon-state-{{state}} mat-step-icon" [class.mat-step-icon-selected]="selected">
  <div class="mat-step-icon-content">
    @if (iconOverrides && iconOverrides[state]) {
      <ng-container
        [ngTemplateOutlet]="iconOverrides[state]"
        [ngTemplateOutletContext]="_getIconContext()"></ng-container>
    } @else {
      @switch (state) {
        @case ('number') {
          <span aria-hidden="true">{{_getDefaultTextForState(state)}}</span>
        }

        @default {
          @if (state === 'done') {
            <span class="cdk-visually-hidden">{{_intl.completedLabel}}</span>
          } @else if (state === 'edit') {
            <span class="cdk-visually-hidden">{{_intl.editableLabel}}</span>
          }

          <mat-icon aria-hidden="true">{{_getDefaultTextForState(state)}}</mat-icon>
        }
      }
    }
  </div>
</div>
<div class="mat-step-label"
     [class.mat-step-label-active]="active"
     [class.mat-step-label-selected]="selected"
     [class.mat-step-label-error]="state == 'error'">
  @if (_templateLabel(); as templateLabel) {
    <!-- If there is a label template, use it. -->
    <div class="mat-step-text-label">
      <ng-container [ngTemplateOutlet]="templateLabel.template"></ng-container>
    </div>
  } @else if (_stringLabel()) {
    <!-- If there is no label template, fall back to the text label. -->
    <div class="mat-step-text-label">{{label}}</div>
  }

  @if (optional && state != 'error') {
    <div class="mat-step-optional">{{_intl.optionalLabel}}</div>
  }

  @if (state === 'error') {
    <div class="mat-step-sub-label-error">{{errorMessage}}</div>
  }
</div>

`,
      styles: ['.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color);border-radius:var(--mat-stepper-header-hover-state-layer-shape)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color);border-radius:var(--mat-stepper-header-focus-state-layer-shape)}@media(hover: none){.mat-step-header:hover{background:none}}.cdk-high-contrast-active .mat-step-header{outline:solid 1px}.cdk-high-contrast-active .mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.cdk-high-contrast-active .mat-step-header[aria-disabled=true]{outline-color:GrayText}.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-label,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-icon,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color)}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color);background-color:var(--mat-stepper-header-icon-background-color)}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color);color:var(--mat-stepper-header-error-state-icon-foreground-color)}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font);font-size:var(--mat-stepper-header-label-text-size);font-weight:var(--mat-stepper-header-label-text-weight);color:var(--mat-stepper-header-label-text-color)}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color)}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color);font-size:var(--mat-stepper-header-error-state-label-text-size)}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size);font-weight:var(--mat-stepper-header-selected-state-label-text-weight)}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color);color:var(--mat-stepper-header-selected-state-icon-foreground-color)}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color);color:var(--mat-stepper-header-edit-state-icon-foreground-color)}']
    }]
  }], () => [{
    type: MatStepperIntl
  }, {
    type: i2.FocusMonitor
  }, {
    type: i0.ElementRef
  }, {
    type: i0.ChangeDetectorRef
  }], {
    state: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    errorMessage: [{
      type: Input
    }],
    iconOverrides: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    optional: [{
      type: Input
    }],
    disableRipple: [{
      type: Input
    }],
    color: [{
      type: Input
    }]
  });
})();
var DEFAULT_HORIZONTAL_ANIMATION_DURATION = "500ms";
var DEFAULT_VERTICAL_ANIMATION_DURATION = "225ms";
var matStepperAnimations = {
  /** Animation that transitions the step along the X axis in a horizontal stepper. */
  horizontalStepTransition: trigger("horizontalStepTransition", [state("previous", style({
    transform: "translate3d(-100%, 0, 0)",
    visibility: "hidden"
  })),
  // Transition to `inherit`, rather than `visible`,
  // because visibility on a child element the one from the parent,
  // making this element focusable inside of a `hidden` element.
  state("current", style({
    transform: "none",
    visibility: "inherit"
  })), state("next", style({
    transform: "translate3d(100%, 0, 0)",
    visibility: "hidden"
  })), transition("* => *", group([animate("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"), query("@*", animateChild(), {
    optional: true
  })]), {
    params: {
      "animationDuration": DEFAULT_HORIZONTAL_ANIMATION_DURATION
    }
  })]),
  /** Animation that transitions the step along the Y axis in a vertical stepper. */
  verticalStepTransition: trigger("verticalStepTransition", [state("previous", style({
    height: "0px",
    visibility: "hidden"
  })), state("next", style({
    height: "0px",
    visibility: "hidden"
  })),
  // Transition to `inherit`, rather than `visible`,
  // because visibility on a child element the one from the parent,
  // making this element focusable inside of a `hidden` element.
  state("current", style({
    height: "*",
    visibility: "inherit"
  })), transition("* <=> current", group([animate("{{animationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)"), query("@*", animateChild(), {
    optional: true
  })]), {
    params: {
      "animationDuration": DEFAULT_VERTICAL_ANIMATION_DURATION
    }
  })])
};
var MatStepperIcon = class _MatStepperIcon {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static {
    this.ɵfac = function MatStepperIcon_Factory(t) {
      return new (t || _MatStepperIcon)(i0.ɵɵdirectiveInject(i0.TemplateRef));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
      type: _MatStepperIcon,
      selectors: [["ng-template", "matStepperIcon", ""]],
      inputs: {
        name: [i0.ɵɵInputFlags.None, "matStepperIcon", "name"]
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepperIcon, [{
    type: Directive,
    args: [{
      selector: "ng-template[matStepperIcon]",
      standalone: true
    }]
  }], () => [{
    type: i0.TemplateRef
  }], {
    name: [{
      type: Input,
      args: ["matStepperIcon"]
    }]
  });
})();
var MatStepContent = class _MatStepContent {
  constructor(_template) {
    this._template = _template;
  }
  static {
    this.ɵfac = function MatStepContent_Factory(t) {
      return new (t || _MatStepContent)(i0.ɵɵdirectiveInject(i0.TemplateRef));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
      type: _MatStepContent,
      selectors: [["ng-template", "matStepContent", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matStepContent]",
      standalone: true
    }]
  }], () => [{
    type: i0.TemplateRef
  }], null);
})();
var MatStep = class _MatStep extends CdkStep {
  constructor(stepper, _errorStateMatcher, _viewContainerRef, stepperOptions) {
    super(stepper, stepperOptions);
    this._errorStateMatcher = _errorStateMatcher;
    this._viewContainerRef = _viewContainerRef;
    this._isSelected = Subscription.EMPTY;
    this.stepLabel = void 0;
  }
  ngAfterContentInit() {
    this._isSelected = this._stepper.steps.changes.pipe(switchMap(() => {
      return this._stepper.selectionChange.pipe(map(event => event.selectedStep === this), startWith(this._stepper.selected === this));
    })).subscribe(isSelected => {
      if (isSelected && this._lazyContent && !this._portal) {
        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      }
    });
  }
  ngOnDestroy() {
    this._isSelected.unsubscribe();
  }
  /** Custom error state matcher that additionally checks for validity of interacted form. */
  isErrorState(control, form) {
    const originalErrorState = this._errorStateMatcher.isErrorState(control, form);
    const customErrorState = !!(control && control.invalid && this.interacted);
    return originalErrorState || customErrorState;
  }
  static {
    this.ɵfac = function MatStep_Factory(t) {
      return new (t || _MatStep)(i0.ɵɵdirectiveInject(forwardRef(() => MatStepper)), i0.ɵɵdirectiveInject(i1.ErrorStateMatcher, 4), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(STEPPER_GLOBAL_OPTIONS, 8));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
      type: _MatStep,
      selectors: [["mat-step"]],
      contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i0.ɵɵcontentQuery(dirIndex, MatStepLabel, 5);
          i0.ɵɵcontentQuery(dirIndex, MatStepContent, 5);
        }
        if (rf & 2) {
          let _t;
          i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.stepLabel = _t.first);
          i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._lazyContent = _t.first);
        }
      },
      hostAttrs: ["hidden", ""],
      inputs: {
        color: "color"
      },
      exportAs: ["matStep"],
      standalone: true,
      features: [i0.ɵɵProvidersFeature([{
        provide: ErrorStateMatcher2,
        useExisting: _MatStep
      }, {
        provide: CdkStep,
        useExisting: _MatStep
      }]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      consts: [[3, "cdkPortalOutlet"]],
      template: function MatStep_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵprojectionDef();
          i0.ɵɵtemplate(0, MatStep_ng_template_0_Template, 2, 1, "ng-template");
        }
      },
      dependencies: [CdkPortalOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStep, [{
    type: Component,
    args: [{
      selector: "mat-step",
      providers: [{
        provide: ErrorStateMatcher2,
        useExisting: MatStep
      }, {
        provide: CdkStep,
        useExisting: MatStep
      }],
      encapsulation: ViewEncapsulation.None,
      exportAs: "matStep",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [CdkPortalOutlet],
      host: {
        "hidden": ""
        // Hide the steps so they don't affect the layout.
      },
      template: '<ng-template>\n  <ng-content></ng-content>\n  <ng-template [cdkPortalOutlet]="_portal"></ng-template>\n</ng-template>\n'
    }]
  }], () => [{
    type: MatStepper,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => MatStepper)]
    }]
  }, {
    type: i1.ErrorStateMatcher,
    decorators: [{
      type: SkipSelf
    }]
  }, {
    type: i0.ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [STEPPER_GLOBAL_OPTIONS]
    }]
  }], {
    stepLabel: [{
      type: ContentChild,
      args: [MatStepLabel]
    }],
    color: [{
      type: Input
    }],
    _lazyContent: [{
      type: ContentChild,
      args: [MatStepContent, {
        static: false
      }]
    }]
  });
})();
var MatStepper = class _MatStepper extends CdkStepper {
  /** Duration for the animation. Will be normalized to milliseconds if no units are set. */
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    this._animationDuration = /^\d+$/.test(value) ? value + "ms" : value;
  }
  constructor(dir, changeDetectorRef, elementRef) {
    super(dir, changeDetectorRef, elementRef);
    this._stepHeader = void 0;
    this._steps = void 0;
    this.steps = new QueryList();
    this.animationDone = new EventEmitter();
    this.labelPosition = "end";
    this.headerPosition = "top";
    this._iconOverrides = {};
    this._animationDone = new Subject();
    this._animationDuration = "";
    this._isServer = !inject(Platform).isBrowser;
    const nodeName = elementRef.nativeElement.nodeName.toLowerCase();
    this.orientation = nodeName === "mat-vertical-stepper" ? "vertical" : "horizontal";
  }
  ngAfterContentInit() {
    super.ngAfterContentInit();
    this._icons.forEach(({
      name,
      templateRef
    }) => this._iconOverrides[name] = templateRef);
    this.steps.changes.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._stateChanged();
    });
    this._animationDone.pipe(
    // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
    // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
    // See https://github.com/angular/angular/issues/24084
    distinctUntilChanged((x, y) => x.fromState === y.fromState && x.toState === y.toState), takeUntil(this._destroyed)).subscribe(event => {
      if (event.toState === "current") {
        this.animationDone.emit();
      }
    });
  }
  _stepIsNavigable(index, step) {
    return step.completed || this.selectedIndex === index || !this.linear;
  }
  _getAnimationDuration() {
    if (this.animationDuration) {
      return this.animationDuration;
    }
    return this.orientation === "horizontal" ? DEFAULT_HORIZONTAL_ANIMATION_DURATION : DEFAULT_VERTICAL_ANIMATION_DURATION;
  }
  static {
    this.ɵfac = function MatStepper_Factory(t) {
      return new (t || _MatStepper)(i0.ɵɵdirectiveInject(i2$1.Directionality, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
      type: _MatStepper,
      selectors: [["mat-stepper"], ["mat-vertical-stepper"], ["mat-horizontal-stepper"], ["", "matStepper", ""]],
      contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i0.ɵɵcontentQuery(dirIndex, MatStep, 5);
          i0.ɵɵcontentQuery(dirIndex, MatStepperIcon, 5);
        }
        if (rf & 2) {
          let _t;
          i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._steps = _t);
          i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._icons = _t);
        }
      },
      viewQuery: function MatStepper_Query(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵviewQuery(MatStepHeader, 5);
        }
        if (rf & 2) {
          let _t;
          i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._stepHeader = _t);
        }
      },
      hostAttrs: ["role", "tablist"],
      hostVars: 11,
      hostBindings: function MatStepper_HostBindings(rf, ctx) {
        if (rf & 2) {
          i0.ɵɵattribute("aria-orientation", ctx.orientation);
          i0.ɵɵclassProp("mat-stepper-horizontal", ctx.orientation === "horizontal")("mat-stepper-vertical", ctx.orientation === "vertical")("mat-stepper-label-position-end", ctx.orientation === "horizontal" && ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.orientation === "horizontal" && ctx.labelPosition == "bottom")("mat-stepper-header-position-bottom", ctx.headerPosition === "bottom");
        }
      },
      inputs: {
        disableRipple: "disableRipple",
        color: "color",
        labelPosition: "labelPosition",
        headerPosition: "headerPosition",
        animationDuration: "animationDuration"
      },
      outputs: {
        animationDone: "animationDone"
      },
      exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"],
      standalone: true,
      features: [i0.ɵɵProvidersFeature([{
        provide: CdkStepper,
        useExisting: _MatStepper
      }]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 2,
      consts: [["stepTemplate", ""], [1, "mat-horizontal-stepper-wrapper"], [1, "mat-horizontal-stepper-header-container"], [1, "mat-horizontal-content-container"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id", "mat-horizontal-stepper-content-inactive"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"], [1, "mat-step"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "click", "keydown", "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color"]],
      template: function MatStepper_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵprojectionDef();
          i0.ɵɵtemplate(0, MatStepper_Conditional_0_Template, 1, 0)(1, MatStepper_Case_1_Template, 7, 0)(2, MatStepper_Case_2_Template, 2, 0)(3, MatStepper_ng_template_3_Template, 1, 23, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          let tmp_2_0;
          i0.ɵɵconditional(0, ctx._isServer ? 0 : -1);
          i0.ɵɵadvance();
          i0.ɵɵconditional(1, (tmp_2_0 = ctx.orientation) === "horizontal" ? 1 : tmp_2_0 === "vertical" ? 2 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, MatStepHeader],
      styles: ['.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font);background:var(--mat-stepper-container-color)}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-inactive{height:0;overflow:hidden}.mat-horizontal-stepper-content:not(.mat-horizontal-stepper-content-inactive){visibility:inherit !important}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.cdk-high-contrast-active .mat-horizontal-content-container{outline:solid 1px}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}.cdk-high-contrast-active .mat-vertical-content-container{outline:solid 1px}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color);top:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-stepper-content:not(.mat-vertical-stepper-content-inactive){visibility:inherit !important}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}'],
      encapsulation: 2,
      data: {
        animation: [matStepperAnimations.horizontalStepTransition, matStepperAnimations.verticalStepTransition]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepper, [{
    type: Component,
    args: [{
      selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]",
      exportAs: "matStepper, matVerticalStepper, matHorizontalStepper",
      host: {
        "[class.mat-stepper-horizontal]": 'orientation === "horizontal"',
        "[class.mat-stepper-vertical]": 'orientation === "vertical"',
        "[class.mat-stepper-label-position-end]": 'orientation === "horizontal" && labelPosition == "end"',
        "[class.mat-stepper-label-position-bottom]": 'orientation === "horizontal" && labelPosition == "bottom"',
        "[class.mat-stepper-header-position-bottom]": 'headerPosition === "bottom"',
        "[attr.aria-orientation]": "orientation",
        "role": "tablist"
      },
      animations: [matStepperAnimations.horizontalStepTransition, matStepperAnimations.verticalStepTransition],
      providers: [{
        provide: CdkStepper,
        useExisting: MatStepper
      }],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgTemplateOutlet, MatStepHeader],
      template: `<!--
  We need to project the content somewhere to avoid hydration errors. Some observations:
  1. This is only necessary on the server.
  2. We get a hydration error if there aren't any nodes after the \`ng-content\`.
  3. We get a hydration error if \`ng-content\` is wrapped in another element.
-->
@if (_isServer) {
  <ng-content/>
}

@switch (orientation) {
  @case ('horizontal') {
    <div class="mat-horizontal-stepper-wrapper">
      <div class="mat-horizontal-stepper-header-container">
        @for (step of steps; track step; let i = $index, isLast = $last) {
          <ng-container
            [ngTemplateOutlet]="stepTemplate"
            [ngTemplateOutletContext]="{step: step, i: i}"></ng-container>
          @if (!isLast) {
            <div class="mat-stepper-horizontal-line"></div>
          }
        }
      </div>

      <div class="mat-horizontal-content-container">
        @for (step of steps; track step; let i = $index) {
          <div class="mat-horizontal-stepper-content" role="tabpanel"
               [@horizontalStepTransition]="{
                  'value': _getAnimationDirection(i),
                  'params': {'animationDuration': _getAnimationDuration()}
                }"
               (@horizontalStepTransition.done)="_animationDone.next($event)"
               [id]="_getStepContentId(i)"
               [attr.aria-labelledby]="_getStepLabelId(i)"
               [class.mat-horizontal-stepper-content-inactive]="selectedIndex !== i">
            <ng-container [ngTemplateOutlet]="step.content"></ng-container>
          </div>
        }
      </div>
    </div>
  }

  @case ('vertical') {
    @for (step of steps; track step; let i = $index, isLast = $last) {
      <div class="mat-step">
        <ng-container
          [ngTemplateOutlet]="stepTemplate"
          [ngTemplateOutletContext]="{step: step, i: i}"></ng-container>
        <div class="mat-vertical-content-container" [class.mat-stepper-vertical-line]="!isLast">
          <div class="mat-vertical-stepper-content" role="tabpanel"
               [@verticalStepTransition]="{
                  'value': _getAnimationDirection(i),
                  'params': {'animationDuration': _getAnimationDuration()}
                }"
               (@verticalStepTransition.done)="_animationDone.next($event)"
               [id]="_getStepContentId(i)"
               [attr.aria-labelledby]="_getStepLabelId(i)"
               [class.mat-vertical-stepper-content-inactive]="selectedIndex !== i">
            <div class="mat-vertical-content">
              <ng-container [ngTemplateOutlet]="step.content"></ng-container>
            </div>
          </div>
        </div>
      </div>
    }
  }
}

<!-- Common step templating -->
<ng-template let-step="step" let-i="i" #stepTemplate>
  <mat-step-header
    [class.mat-horizontal-stepper-header]="orientation === 'horizontal'"
    [class.mat-vertical-stepper-header]="orientation === 'vertical'"
    (click)="step.select()"
    (keydown)="_onKeydown($event)"
    [tabIndex]="_getFocusIndex() === i ? 0 : -1"
    [id]="_getStepLabelId(i)"
    [attr.aria-posinset]="i + 1"
    [attr.aria-setsize]="steps.length"
    [attr.aria-controls]="_getStepContentId(i)"
    [attr.aria-selected]="selectedIndex == i"
    [attr.aria-label]="step.ariaLabel || null"
    [attr.aria-labelledby]="(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null"
    [attr.aria-disabled]="_stepIsNavigable(i, step) ? null : true"
    [index]="i"
    [state]="_getIndicatorType(i, step.state)"
    [label]="step.stepLabel || step.label"
    [selected]="selectedIndex === i"
    [active]="_stepIsNavigable(i, step)"
    [optional]="step.optional"
    [errorMessage]="step.errorMessage"
    [iconOverrides]="_iconOverrides"
    [disableRipple]="disableRipple || !_stepIsNavigable(i, step)"
    [color]="step.color || color"></mat-step-header>
</ng-template>
`,
      styles: ['.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font);background:var(--mat-stepper-container-color)}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-inactive{height:0;overflow:hidden}.mat-horizontal-stepper-content:not(.mat-horizontal-stepper-content-inactive){visibility:inherit !important}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.cdk-high-contrast-active .mat-horizontal-content-container{outline:solid 1px}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}.cdk-high-contrast-active .mat-vertical-content-container{outline:solid 1px}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color);top:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-stepper-content:not(.mat-vertical-stepper-content-inactive){visibility:inherit !important}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}']
    }]
  }], () => [{
    type: i2$1.Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: i0.ChangeDetectorRef
  }, {
    type: i0.ElementRef
  }], {
    _stepHeader: [{
      type: ViewChildren,
      args: [MatStepHeader]
    }],
    _steps: [{
      type: ContentChildren,
      args: [MatStep, {
        descendants: true
      }]
    }],
    _icons: [{
      type: ContentChildren,
      args: [MatStepperIcon, {
        descendants: true
      }]
    }],
    animationDone: [{
      type: Output
    }],
    disableRipple: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    headerPosition: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }]
  });
})();
var MatStepperNext = class _MatStepperNext extends CdkStepperNext {
  static {
    this.ɵfac = /* @__PURE__ */(() => {
      let ɵMatStepperNext_BaseFactory;
      return function MatStepperNext_Factory(t) {
        return (ɵMatStepperNext_BaseFactory || (ɵMatStepperNext_BaseFactory = i0.ɵɵgetInheritedFactory(_MatStepperNext)))(t || _MatStepperNext);
      };
    })();
  }
  static {
    this.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
      type: _MatStepperNext,
      selectors: [["button", "matStepperNext", ""]],
      hostAttrs: [1, "mat-stepper-next"],
      hostVars: 1,
      hostBindings: function MatStepperNext_HostBindings(rf, ctx) {
        if (rf & 2) {
          i0.ɵɵhostProperty("type", ctx.type);
        }
      },
      standalone: true,
      features: [i0.ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepperNext, [{
    type: Directive,
    args: [{
      selector: "button[matStepperNext]",
      host: {
        "class": "mat-stepper-next",
        "[type]": "type"
      },
      standalone: true
    }]
  }], null, null);
})();
var MatStepperPrevious = class _MatStepperPrevious extends CdkStepperPrevious {
  static {
    this.ɵfac = /* @__PURE__ */(() => {
      let ɵMatStepperPrevious_BaseFactory;
      return function MatStepperPrevious_Factory(t) {
        return (ɵMatStepperPrevious_BaseFactory || (ɵMatStepperPrevious_BaseFactory = i0.ɵɵgetInheritedFactory(_MatStepperPrevious)))(t || _MatStepperPrevious);
      };
    })();
  }
  static {
    this.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
      type: _MatStepperPrevious,
      selectors: [["button", "matStepperPrevious", ""]],
      hostAttrs: [1, "mat-stepper-previous"],
      hostVars: 1,
      hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) {
        if (rf & 2) {
          i0.ɵɵhostProperty("type", ctx.type);
        }
      },
      standalone: true,
      features: [i0.ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepperPrevious, [{
    type: Directive,
    args: [{
      selector: "button[matStepperPrevious]",
      host: {
        "class": "mat-stepper-previous",
        "[type]": "type"
      },
      standalone: true
    }]
  }], null, null);
})();
var MatStepperModule = class _MatStepperModule {
  static {
    this.ɵfac = function MatStepperModule_Factory(t) {
      return new (t || _MatStepperModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */i0.ɵɵdefineNgModule({
      type: _MatStepperModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */i0.ɵɵdefineInjector({
      providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher2],
      imports: [MatCommonModule, CommonModule, PortalModule, CdkStepperModule, MatIconModule, MatRippleModule, MatStepper, MatStepHeader, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepperModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CommonModule, PortalModule, CdkStepperModule, MatIconModule, MatRippleModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent],
      exports: [MatCommonModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent],
      providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher2]
    }]
  }], null, null);
})();
export { MAT_STEPPER_INTL_PROVIDER, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatStep, MatStepContent, MatStepHeader, MatStepLabel, MatStepper, MatStepperIcon, MatStepperIntl, MatStepperModule, MatStepperNext, MatStepperPrevious, matStepperAnimations };