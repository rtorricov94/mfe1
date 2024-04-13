var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {}) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
    if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// node_modules/@angular/material/fesm2022/bottom-sheet.mjs
import * as i2 from "@angular/cdk/dialog";
import { CdkDialogContainer, Dialog, DialogModule } from "@angular/cdk/dialog";
import { CdkPortalOutlet, PortalModule } from "@angular/cdk/portal";
import * as i0 from "@angular/core";
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Optional, Inject, InjectionToken, Injectable, SkipSelf, NgModule } from "@angular/core";
import { AnimationDurations, AnimationCurves, MatCommonModule } from "@angular/material/core";
import * as i1 from "@angular/cdk/a11y";
import * as i4 from "@angular/cdk/layout";
import { Breakpoints } from "@angular/cdk/layout";
import * as i3 from "@angular/cdk/overlay";
import { DOCUMENT } from "@angular/common";
import { trigger, state, style, transition, group, animate, query, animateChild } from "@angular/animations";
import { ESCAPE, hasModifierKey } from "@angular/cdk/keycodes";
import { Subject, merge } from "rxjs";
import { filter, take } from "rxjs/operators";
function MatBottomSheetContainer_ng_template_0_Template(rf, ctx) {}
var matBottomSheetAnimations = {
  /** Animation that shows and hides a bottom sheet. */
  bottomSheetState: trigger("state", [state("void, hidden", style({
    transform: "translateY(100%)"
  })), state("visible", style({
    transform: "translateY(0%)"
  })), transition("visible => void, visible => hidden", group([animate(`${AnimationDurations.COMPLEX} ${AnimationCurves.ACCELERATION_CURVE}`), query("@*", animateChild(), {
    optional: true
  })])), transition("void => visible", group([animate(`${AnimationDurations.EXITING} ${AnimationCurves.DECELERATION_CURVE}`), query("@*", animateChild(), {
    optional: true
  })]))])
};
var MatBottomSheetContainer = class _MatBottomSheetContainer extends CdkDialogContainer {
  constructor(elementRef, focusTrapFactory, document, config, checker, ngZone, overlayRef, breakpointObserver, focusMonitor) {
    super(elementRef, focusTrapFactory, document, config, checker, ngZone, overlayRef, focusMonitor);
    this._animationState = "void";
    this._animationStateChanged = new EventEmitter();
    this._breakpointSubscription = breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]).subscribe(() => {
      this._toggleClass("mat-bottom-sheet-container-medium", breakpointObserver.isMatched(Breakpoints.Medium));
      this._toggleClass("mat-bottom-sheet-container-large", breakpointObserver.isMatched(Breakpoints.Large));
      this._toggleClass("mat-bottom-sheet-container-xlarge", breakpointObserver.isMatched(Breakpoints.XLarge));
    });
  }
  /** Begin animation of bottom sheet entrance into view. */
  enter() {
    if (!this._destroyed) {
      this._animationState = "visible";
      this._changeDetectorRef.detectChanges();
    }
  }
  /** Begin animation of the bottom sheet exiting from view. */
  exit() {
    if (!this._destroyed) {
      this._animationState = "hidden";
      this._changeDetectorRef.markForCheck();
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._breakpointSubscription.unsubscribe();
    this._destroyed = true;
  }
  _onAnimationDone(event) {
    if (event.toState === "visible") {
      this._trapFocus();
    }
    this._animationStateChanged.emit(event);
  }
  _onAnimationStart(event) {
    this._animationStateChanged.emit(event);
  }
  _captureInitialFocus() {}
  _toggleClass(cssClass, add) {
    this._elementRef.nativeElement.classList.toggle(cssClass, add);
  }
  static {
    this.ɵfac = function MatBottomSheetContainer_Factory(t) {
      return new (t || _MatBottomSheetContainer)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.FocusTrapFactory), i0.ɵɵdirectiveInject(DOCUMENT, 8), i0.ɵɵdirectiveInject(i2.DialogConfig), i0.ɵɵdirectiveInject(i1.InteractivityChecker), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i3.OverlayRef), i0.ɵɵdirectiveInject(i4.BreakpointObserver), i0.ɵɵdirectiveInject(i1.FocusMonitor));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
      type: _MatBottomSheetContainer,
      selectors: [["mat-bottom-sheet-container"]],
      hostAttrs: ["tabindex", "-1", 1, "mat-bottom-sheet-container"],
      hostVars: 4,
      hostBindings: function MatBottomSheetContainer_HostBindings(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵsyntheticHostListener("@state.start", function MatBottomSheetContainer_animation_state_start_HostBindingHandler($event) {
            return ctx._onAnimationStart($event);
          })("@state.done", function MatBottomSheetContainer_animation_state_done_HostBindingHandler($event) {
            return ctx._onAnimationDone($event);
          });
        }
        if (rf & 2) {
          i0.ɵɵsyntheticHostProperty("@state", ctx._animationState);
          i0.ɵɵattribute("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-label", ctx._config.ariaLabel);
        }
      },
      standalone: true,
      features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature],
      decls: 1,
      vars: 0,
      consts: [["cdkPortalOutlet", ""]],
      template: function MatBottomSheetContainer_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵtemplate(0, MatBottomSheetContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
        }
      },
      dependencies: [CdkPortalOutlet],
      styles: [".mat-bottom-sheet-container{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto;background:var(--mat-bottom-sheet-container-background-color);color:var(--mat-bottom-sheet-container-text-color);font-family:var(--mat-bottom-sheet-container-text-font);font-size:var(--mat-bottom-sheet-container-text-size);line-height:var(--mat-bottom-sheet-container-text-line-height);font-weight:var(--mat-bottom-sheet-container-text-weight);letter-spacing:var(--mat-bottom-sheet-container-text-tracking)}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:var(--mat-bottom-sheet-container-shape);border-top-right-radius:var(--mat-bottom-sheet-container-shape)}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}"],
      encapsulation: 2,
      data: {
        animation: [matBottomSheetAnimations.bottomSheetState]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatBottomSheetContainer, [{
    type: Component,
    args: [{
      selector: "mat-bottom-sheet-container",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      animations: [matBottomSheetAnimations.bottomSheetState],
      host: {
        "class": "mat-bottom-sheet-container",
        "tabindex": "-1",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-label]": "_config.ariaLabel",
        "[@state]": "_animationState",
        "(@state.start)": "_onAnimationStart($event)",
        "(@state.done)": "_onAnimationDone($event)"
      },
      standalone: true,
      imports: [CdkPortalOutlet],
      template: "<ng-template cdkPortalOutlet></ng-template>\r\n",
      styles: [".mat-bottom-sheet-container{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto;background:var(--mat-bottom-sheet-container-background-color);color:var(--mat-bottom-sheet-container-text-color);font-family:var(--mat-bottom-sheet-container-text-font);font-size:var(--mat-bottom-sheet-container-text-size);line-height:var(--mat-bottom-sheet-container-text-line-height);font-weight:var(--mat-bottom-sheet-container-text-weight);letter-spacing:var(--mat-bottom-sheet-container-text-tracking)}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:var(--mat-bottom-sheet-container-shape);border-top-right-radius:var(--mat-bottom-sheet-container-shape)}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}"]
    }]
  }], () => [{
    type: i0.ElementRef
  }, {
    type: i1.FocusTrapFactory
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: i2.DialogConfig
  }, {
    type: i1.InteractivityChecker
  }, {
    type: i0.NgZone
  }, {
    type: i3.OverlayRef
  }, {
    type: i4.BreakpointObserver
  }, {
    type: i1.FocusMonitor
  }], null);
})();
var MAT_BOTTOM_SHEET_DATA = new InjectionToken("MatBottomSheetData");
var MatBottomSheetConfig = class {
  constructor() {
    this.data = null;
    this.hasBackdrop = true;
    this.disableClose = false;
    this.ariaLabel = null;
    this.ariaModal = true;
    this.closeOnNavigation = true;
    this.autoFocus = "dialog";
    this.restoreFocus = true;
  }
};
var MatBottomSheetRef = class {
  /** Instance of the component making up the content of the bottom sheet. */
  get instance() {
    return this._ref.componentInstance;
  }
  /**
   * `ComponentRef` of the component opened into the bottom sheet. Will be
   * null when the bottom sheet is opened using a `TemplateRef`.
   */
  get componentRef() {
    return this._ref.componentRef;
  }
  constructor(_ref, config, containerInstance) {
    this._ref = _ref;
    this._afterOpened = new Subject();
    this.containerInstance = containerInstance;
    this.disableClose = config.disableClose;
    containerInstance._animationStateChanged.pipe(filter(event => event.phaseName === "done" && event.toState === "visible"), take(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    containerInstance._animationStateChanged.pipe(filter(event => event.phaseName === "done" && event.toState === "hidden"), take(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._ref.close(this._result);
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._ref.close(this._result);
    });
    merge(this.backdropClick(), this.keydownEvents().pipe(filter(event => event.keyCode === ESCAPE))).subscribe(event => {
      if (!this.disableClose && (event.type !== "keydown" || !hasModifierKey(event))) {
        event.preventDefault();
        this.dismiss();
      }
    });
  }
  /**
   * Dismisses the bottom sheet.
   * @param result Data to be passed back to the bottom sheet opener.
   */
  dismiss(result) {
    if (!this.containerInstance) {
      return;
    }
    this.containerInstance._animationStateChanged.pipe(filter(event => event.phaseName === "start"), take(1)).subscribe(event => {
      this._closeFallbackTimeout = setTimeout(() => {
        this._ref.close(this._result);
      }, event.totalTime + 100);
      this._ref.overlayRef.detachBackdrop();
    });
    this._result = result;
    this.containerInstance.exit();
    this.containerInstance = null;
  }
  /** Gets an observable that is notified when the bottom sheet is finished closing. */
  afterDismissed() {
    return this._ref.closed;
  }
  /** Gets an observable that is notified when the bottom sheet has opened and appeared. */
  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this._ref.backdropClick;
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this._ref.keydownEvents;
  }
};
var MAT_BOTTOM_SHEET_DEFAULT_OPTIONS = new InjectionToken("mat-bottom-sheet-default-options");
var MatBottomSheet = class _MatBottomSheet {
  /** Reference to the currently opened bottom sheet. */
  get _openedBottomSheetRef() {
    const parent = this._parentBottomSheet;
    return parent ? parent._openedBottomSheetRef : this._bottomSheetRefAtThisLevel;
  }
  set _openedBottomSheetRef(value) {
    if (this._parentBottomSheet) {
      this._parentBottomSheet._openedBottomSheetRef = value;
    } else {
      this._bottomSheetRefAtThisLevel = value;
    }
  }
  constructor(_overlay, injector, _parentBottomSheet, _defaultOptions) {
    this._overlay = _overlay;
    this._parentBottomSheet = _parentBottomSheet;
    this._defaultOptions = _defaultOptions;
    this._bottomSheetRefAtThisLevel = null;
    this._dialog = injector.get(Dialog);
  }
  open(componentOrTemplateRef, config) {
    const _config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatBottomSheetConfig()), config);
    let ref;
    this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, _config), {
      // Disable closing since we need to sync it up to the animation ourselves.
      disableClose: true,
      // Disable closing on detachments so that we can sync up the animation.
      closeOnOverlayDetachments: false,
      maxWidth: "100%",
      container: MatBottomSheetContainer,
      scrollStrategy: _config.scrollStrategy || this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay.position().global().centerHorizontally().bottom("0"),
      templateContext: () => ({
        bottomSheetRef: ref
      }),
      providers: (cdkRef, _cdkConfig, container) => {
        ref = new MatBottomSheetRef(cdkRef, _config, container);
        return [{
          provide: MatBottomSheetRef,
          useValue: ref
        }, {
          provide: MAT_BOTTOM_SHEET_DATA,
          useValue: _config.data
        }];
      }
    }));
    ref.afterDismissed().subscribe(() => {
      if (this._openedBottomSheetRef === ref) {
        this._openedBottomSheetRef = null;
      }
    });
    if (this._openedBottomSheetRef) {
      this._openedBottomSheetRef.afterDismissed().subscribe(() => ref.containerInstance?.enter());
      this._openedBottomSheetRef.dismiss();
    } else {
      ref.containerInstance.enter();
    }
    this._openedBottomSheetRef = ref;
    return ref;
  }
  /**
   * Dismisses the currently-visible bottom sheet.
   * @param result Data to pass to the bottom sheet instance.
   */
  dismiss(result) {
    if (this._openedBottomSheetRef) {
      this._openedBottomSheetRef.dismiss(result);
    }
  }
  ngOnDestroy() {
    if (this._bottomSheetRefAtThisLevel) {
      this._bottomSheetRefAtThisLevel.dismiss();
    }
  }
  static {
    this.ɵfac = function MatBottomSheet_Factory(t) {
      return new (t || _MatBottomSheet)(i0.ɵɵinject(i3.Overlay), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(_MatBottomSheet, 12), i0.ɵɵinject(MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
      token: _MatBottomSheet,
      factory: _MatBottomSheet.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatBottomSheet, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: i3.Overlay
  }, {
    type: i0.Injector
  }, {
    type: MatBottomSheet,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }, {
    type: MatBottomSheetConfig,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_BOTTOM_SHEET_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var MatBottomSheetModule = class _MatBottomSheetModule {
  static {
    this.ɵfac = function MatBottomSheetModule_Factory(t) {
      return new (t || _MatBottomSheetModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */i0.ɵɵdefineNgModule({
      type: _MatBottomSheetModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */i0.ɵɵdefineInjector({
      providers: [MatBottomSheet],
      imports: [DialogModule, MatCommonModule, PortalModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatBottomSheetModule, [{
    type: NgModule,
    args: [{
      imports: [DialogModule, MatCommonModule, PortalModule, MatBottomSheetContainer],
      exports: [MatBottomSheetContainer, MatCommonModule],
      providers: [MatBottomSheet]
    }]
  }], null, null);
})();
export { MAT_BOTTOM_SHEET_DATA, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheet, MatBottomSheetConfig, MatBottomSheetContainer, MatBottomSheetModule, MatBottomSheetRef, matBottomSheetAnimations };