// node_modules/@angular/material/fesm2022/expansion.mjs
import { CdkAccordionItem, CdkAccordion, CdkAccordionModule } from "@angular/cdk/accordion";
import { TemplatePortal, CdkPortalOutlet, PortalModule } from "@angular/cdk/portal";
import * as i0 from "@angular/core";
import { InjectionToken, Directive, Inject, Optional, EventEmitter, ANIMATION_MODULE_TYPE, booleanAttribute, Component, ViewEncapsulation, ChangeDetectionStrategy, SkipSelf, Input, Output, ContentChild, ViewChild, numberAttribute, Host, Attribute, QueryList, ContentChildren, NgModule } from "@angular/core";
import { MatCommonModule } from "@angular/material/core";
import * as i2 from "@angular/cdk/a11y";
import { FocusKeyManager } from "@angular/cdk/a11y";
import { startWith, filter, take } from "rxjs/operators";
import { ENTER, hasModifierKey, SPACE } from "@angular/cdk/keycodes";
import { Subject, Subscription, EMPTY, merge } from "rxjs";
import { trigger, state, style, transition, animate } from "@angular/animations";
import * as i1 from "@angular/cdk/collections";
import { DOCUMENT } from "@angular/common";
var _c0 = ["body"];
var _c1 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
var _c2 = ["mat-expansion-panel-header", "*", "mat-action-row"];
function MatExpansionPanel_ng_template_5_Template(rf, ctx) {}
var _c3 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
var _c4 = ["mat-panel-title", "mat-panel-description", "*"];
function MatExpansionPanelHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 1);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 2);
    i0.ɵɵelement(2, "path", 3);
    i0.ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@indicatorRotate", ctx_r0._getExpandedState());
  }
}
var MAT_ACCORDION = new InjectionToken("MAT_ACCORDION");
var EXPANSION_PANEL_ANIMATION_TIMING = "225ms cubic-bezier(0.4,0.0,0.2,1)";
var matExpansionAnimations = {
  /** Animation that rotates the indicator arrow. */
  indicatorRotate: trigger("indicatorRotate", [state("collapsed, void", style({
    transform: "rotate(0deg)"
  })), state("expanded", style({
    transform: "rotate(180deg)"
  })), transition("expanded <=> collapsed, void => collapsed", animate(EXPANSION_PANEL_ANIMATION_TIMING))]),
  /** Animation that expands and collapses the panel content. */
  bodyExpansion: trigger("bodyExpansion", [state("collapsed, void", style({
    height: "0px",
    visibility: "hidden"
  })),
  // Clear the `visibility` while open, otherwise the content will be visible when placed in
  // a parent that's `visibility: hidden`, because `visibility` doesn't apply to descendants
  // that have a `visibility` of their own (see #27436).
  state("expanded", style({
    height: "*",
    visibility: ""
  })), transition("expanded <=> collapsed, void => collapsed", animate(EXPANSION_PANEL_ANIMATION_TIMING))])
};
var MAT_EXPANSION_PANEL = new InjectionToken("MAT_EXPANSION_PANEL");
var MatExpansionPanelContent = class _MatExpansionPanelContent {
  constructor(_template, _expansionPanel) {
    this._template = _template;
    this._expansionPanel = _expansionPanel;
  }
  static {
    this.ɵfac = function MatExpansionPanelContent_Factory(t) {
      return new (t || _MatExpansionPanelContent)(i0.ɵɵdirectiveInject(i0.TemplateRef), i0.ɵɵdirectiveInject(MAT_EXPANSION_PANEL, 8));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
      type: _MatExpansionPanelContent,
      selectors: [["ng-template", "matExpansionPanelContent", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatExpansionPanelContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matExpansionPanelContent]",
      standalone: true
    }]
  }], () => [{
    type: i0.TemplateRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_EXPANSION_PANEL]
    }, {
      type: Optional
    }]
  }], null);
})();
var uniqueId = 0;
var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new InjectionToken("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");
var MatExpansionPanel = class _MatExpansionPanel extends CdkAccordionItem {
  /** Whether the toggle indicator should be hidden. */
  get hideToggle() {
    return this._hideToggle || this.accordion && this.accordion.hideToggle;
  }
  set hideToggle(value) {
    this._hideToggle = value;
  }
  /** The position of the expansion indicator. */
  get togglePosition() {
    return this._togglePosition || this.accordion && this.accordion.togglePosition;
  }
  set togglePosition(value) {
    this._togglePosition = value;
  }
  constructor(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
    super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
    this._viewContainerRef = _viewContainerRef;
    this._animationMode = _animationMode;
    this._hideToggle = false;
    this.afterExpand = new EventEmitter();
    this.afterCollapse = new EventEmitter();
    this._inputChanges = new Subject();
    this._headerId = `mat-expansion-panel-header-${uniqueId++}`;
    this.accordion = accordion;
    this._document = _document;
    this._animationsDisabled = _animationMode === "NoopAnimations";
    if (defaultOptions) {
      this.hideToggle = defaultOptions.hideToggle;
    }
  }
  /** Determines whether the expansion panel should have spacing between it and its siblings. */
  _hasSpacing() {
    if (this.accordion) {
      return this.expanded && this.accordion.displayMode === "default";
    }
    return false;
  }
  /** Gets the expanded state string. */
  _getExpandedState() {
    return this.expanded ? "expanded" : "collapsed";
  }
  /** Toggles the expanded state of the expansion panel. */
  toggle() {
    this.expanded = !this.expanded;
  }
  /** Sets the expanded state of the expansion panel to false. */
  close() {
    this.expanded = false;
  }
  /** Sets the expanded state of the expansion panel to true. */
  open() {
    this.expanded = true;
  }
  ngAfterContentInit() {
    if (this._lazyContent && this._lazyContent._expansionPanel === this) {
      this.opened.pipe(startWith(null), filter(() => this.expanded && !this._portal), take(1)).subscribe(() => {
        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      });
    }
  }
  ngOnChanges(changes) {
    this._inputChanges.next(changes);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._inputChanges.complete();
  }
  /** Checks whether the expansion panel's content contains the currently-focused element. */
  _containsFocus() {
    if (this._body) {
      const focusedElement = this._document.activeElement;
      const bodyElement = this._body.nativeElement;
      return focusedElement === bodyElement || bodyElement.contains(focusedElement);
    }
    return false;
  }
  /** Called when the expansion animation has started. */
  _animationStarted(event) {
    if (!isInitialAnimation(event) && !this._animationsDisabled && this._body) {
      this._body?.nativeElement.setAttribute("inert", "");
    }
  }
  /** Called when the expansion animation has finished. */
  _animationDone(event) {
    if (!isInitialAnimation(event)) {
      if (event.toState === "expanded") {
        this.afterExpand.emit();
      } else if (event.toState === "collapsed") {
        this.afterCollapse.emit();
      }
      if (!this._animationsDisabled && this._body) {
        this._body.nativeElement.removeAttribute("inert");
      }
    }
  }
  static {
    this.ɵfac = function MatExpansionPanel_Factory(t) {
      return new (t || _MatExpansionPanel)(i0.ɵɵdirectiveInject(MAT_ACCORDION, 12), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.UniqueSelectionDispatcher), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), i0.ɵɵdirectiveInject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
      type: _MatExpansionPanel,
      selectors: [["mat-expansion-panel"]],
      contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i0.ɵɵcontentQuery(dirIndex, MatExpansionPanelContent, 5);
        }
        if (rf & 2) {
          let _t;
          i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._lazyContent = _t.first);
        }
      },
      viewQuery: function MatExpansionPanel_Query(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._body = _t.first);
        }
      },
      hostAttrs: [1, "mat-expansion-panel"],
      hostVars: 6,
      hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
        if (rf & 2) {
          i0.ɵɵclassProp("mat-expanded", ctx.expanded)("_mat-animation-noopable", ctx._animationsDisabled)("mat-expansion-panel-spacing", ctx._hasSpacing());
        }
      },
      inputs: {
        hideToggle: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "hideToggle", "hideToggle", booleanAttribute],
        togglePosition: "togglePosition"
      },
      outputs: {
        afterExpand: "afterExpand",
        afterCollapse: "afterCollapse"
      },
      exportAs: ["matExpansionPanel"],
      standalone: true,
      features: [i0.ɵɵProvidersFeature([
      // Provide MatAccordion as undefined to prevent nested expansion panels from registering
      // to the same accordion.
      {
        provide: MAT_ACCORDION,
        useValue: void 0
      }, {
        provide: MAT_EXPANSION_PANEL,
        useExisting: _MatExpansionPanel
      }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature],
      ngContentSelectors: _c2,
      decls: 7,
      vars: 4,
      consts: [["body", ""], ["role", "region", 1, "mat-expansion-panel-content", 3, "id"], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
      template: function MatExpansionPanel_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = i0.ɵɵgetCurrentView();
          i0.ɵɵprojectionDef(_c1);
          i0.ɵɵprojection(0);
          i0.ɵɵelementStart(1, "div", 1, 0);
          i0.ɵɵlistener("@bodyExpansion.start", function MatExpansionPanel_Template_div_animation_bodyExpansion_start_1_listener($event) {
            i0.ɵɵrestoreView(_r1);
            return i0.ɵɵresetView(ctx._animationStarted($event));
          })("@bodyExpansion.done", function MatExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) {
            i0.ɵɵrestoreView(_r1);
            return i0.ɵɵresetView(ctx._animationDone($event));
          });
          i0.ɵɵelementStart(3, "div", 2);
          i0.ɵɵprojection(4, 1);
          i0.ɵɵtemplate(5, MatExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);
          i0.ɵɵelementEnd();
          i0.ɵɵprojection(6, 2);
          i0.ɵɵelementEnd();
        }
        if (rf & 2) {
          i0.ɵɵadvance();
          i0.ɵɵproperty("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);
          i0.ɵɵattribute("aria-labelledby", ctx._headerId);
          i0.ɵɵadvance(4);
          i0.ɵɵproperty("cdkPortalOutlet", ctx._portal);
        }
      },
      dependencies: [CdkPortalOutlet],
      styles: ['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],
      encapsulation: 2,
      data: {
        animation: [matExpansionAnimations.bodyExpansion]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatExpansionPanel, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel",
      exportAs: "matExpansionPanel",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [matExpansionAnimations.bodyExpansion],
      providers: [
      // Provide MatAccordion as undefined to prevent nested expansion panels from registering
      // to the same accordion.
      {
        provide: MAT_ACCORDION,
        useValue: void 0
      }, {
        provide: MAT_EXPANSION_PANEL,
        useExisting: MatExpansionPanel
      }],
      host: {
        "class": "mat-expansion-panel",
        "[class.mat-expanded]": "expanded",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[class.mat-expansion-panel-spacing]": "_hasSpacing()"
      },
      standalone: true,
      imports: [CdkPortalOutlet],
      template: '<ng-content select="mat-expansion-panel-header"></ng-content>\n<div class="mat-expansion-panel-content"\n     role="region"\n     [@bodyExpansion]="_getExpandedState()"\n     (@bodyExpansion.start)="_animationStarted($event)"\n     (@bodyExpansion.done)="_animationDone($event)"\n     [attr.aria-labelledby]="_headerId"\n     [id]="id"\n     #body>\n  <div class="mat-expansion-panel-body">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]="_portal"></ng-template>\n  </div>\n  <ng-content select="mat-action-row"></ng-content>\n</div>\n',
      styles: ['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}']
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }, {
      type: Inject,
      args: [MAT_ACCORDION]
    }]
  }, {
    type: i0.ChangeDetectorRef
  }, {
    type: i1.UniqueSelectionDispatcher
  }, {
    type: i0.ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
    }, {
      type: Optional
    }]
  }], {
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    togglePosition: [{
      type: Input
    }],
    afterExpand: [{
      type: Output
    }],
    afterCollapse: [{
      type: Output
    }],
    _lazyContent: [{
      type: ContentChild,
      args: [MatExpansionPanelContent]
    }],
    _body: [{
      type: ViewChild,
      args: ["body"]
    }]
  });
})();
function isInitialAnimation(event) {
  return event.fromState === "void";
}
var MatExpansionPanelActionRow = class _MatExpansionPanelActionRow {
  static {
    this.ɵfac = function MatExpansionPanelActionRow_Factory(t) {
      return new (t || _MatExpansionPanelActionRow)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
      type: _MatExpansionPanelActionRow,
      selectors: [["mat-action-row"]],
      hostAttrs: [1, "mat-action-row"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatExpansionPanelActionRow, [{
    type: Directive,
    args: [{
      selector: "mat-action-row",
      host: {
        class: "mat-action-row"
      },
      standalone: true
    }]
  }], null, null);
})();
var MatExpansionPanelHeader = class _MatExpansionPanelHeader {
  constructor(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions, _animationMode, tabIndex) {
    this.panel = panel;
    this._element = _element;
    this._focusMonitor = _focusMonitor;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    this._parentChangeSubscription = Subscription.EMPTY;
    this.tabIndex = 0;
    const accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(filter(changes => !!(changes["hideToggle"] || changes["togglePosition"]))) : EMPTY;
    this.tabIndex = parseInt(tabIndex || "") || 0;
    this._parentChangeSubscription = merge(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(filter(changes => {
      return !!(changes["hideToggle"] || changes["disabled"] || changes["togglePosition"]);
    }))).subscribe(() => this._changeDetectorRef.markForCheck());
    panel.closed.pipe(filter(() => panel._containsFocus())).subscribe(() => _focusMonitor.focusVia(_element, "program"));
    if (defaultOptions) {
      this.expandedHeight = defaultOptions.expandedHeight;
      this.collapsedHeight = defaultOptions.collapsedHeight;
    }
  }
  /**
   * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
   * @docs-private
   */
  get disabled() {
    return this.panel.disabled;
  }
  /** Toggles the expanded state of the panel. */
  _toggle() {
    if (!this.disabled) {
      this.panel.toggle();
    }
  }
  /** Gets whether the panel is expanded. */
  _isExpanded() {
    return this.panel.expanded;
  }
  /** Gets the expanded state string of the panel. */
  _getExpandedState() {
    return this.panel._getExpandedState();
  }
  /** Gets the panel id. */
  _getPanelId() {
    return this.panel.id;
  }
  /** Gets the toggle position for the header. */
  _getTogglePosition() {
    return this.panel.togglePosition;
  }
  /** Gets whether the expand indicator should be shown. */
  _showToggle() {
    return !this.panel.hideToggle && !this.panel.disabled;
  }
  /**
   * Gets the current height of the header. Null if no custom height has been
   * specified, and if the default height from the stylesheet should be used.
   */
  _getHeaderHeight() {
    const isExpanded = this._isExpanded();
    if (isExpanded && this.expandedHeight) {
      return this.expandedHeight;
    } else if (!isExpanded && this.collapsedHeight) {
      return this.collapsedHeight;
    }
    return null;
  }
  /** Handle keydown event calling to toggle() if appropriate. */
  _keydown(event) {
    switch (event.keyCode) {
      case SPACE:
      case ENTER:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this._toggle();
        }
        break;
      default:
        if (this.panel.accordion) {
          this.panel.accordion._handleHeaderKeydown(event);
        }
        return;
    }
  }
  /**
   * Focuses the panel header. Implemented as a part of `FocusableOption`.
   * @param origin Origin of the action that triggered the focus.
   * @docs-private
   */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._element).subscribe(origin => {
      if (origin && this.panel.accordion) {
        this.panel.accordion._handleHeaderFocus(this);
      }
    });
  }
  ngOnDestroy() {
    this._parentChangeSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._element);
  }
  static {
    this.ɵfac = function MatExpansionPanelHeader_Factory(t) {
      return new (t || _MatExpansionPanelHeader)(i0.ɵɵdirectiveInject(MatExpansionPanel, 1), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.FocusMonitor), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8), i0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), i0.ɵɵinjectAttribute("tabindex"));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
      type: _MatExpansionPanelHeader,
      selectors: [["mat-expansion-panel-header"]],
      hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
      hostVars: 15,
      hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵlistener("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
            return ctx._toggle();
          })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
            return ctx._keydown($event);
          });
        }
        if (rf & 2) {
          i0.ɵɵattribute("id", ctx.panel._headerId)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
          i0.ɵɵstyleProp("height", ctx._getHeaderHeight());
          i0.ɵɵclassProp("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        expandedHeight: "expandedHeight",
        collapsedHeight: "collapsedHeight",
        tabIndex: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "tabIndex", "tabIndex", value => value == null ? 0 : numberAttribute(value)]
      },
      standalone: true,
      features: [i0.ɵɵInputTransformsFeature, i0.ɵɵStandaloneFeature],
      ngContentSelectors: _c4,
      decls: 5,
      vars: 3,
      consts: [[1, "mat-content"], [1, "mat-expansion-indicator"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -960 960 960", "aria-hidden", "true", "focusable", "false"], ["d", "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],
      template: function MatExpansionPanelHeader_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵprojectionDef(_c3);
          i0.ɵɵelementStart(0, "span", 0);
          i0.ɵɵprojection(1);
          i0.ɵɵprojection(2, 1);
          i0.ɵɵprojection(3, 2);
          i0.ɵɵelementEnd();
          i0.ɵɵtemplate(4, MatExpansionPanelHeader_Conditional_4_Template, 3, 1, "span", 1);
        }
        if (rf & 2) {
          i0.ɵɵclassProp("mat-content-hide-toggle", !ctx._showToggle());
          i0.ɵɵadvance(4);
          i0.ɵɵconditional(4, ctx._showToggle() ? 4 : -1);
        }
      },
      styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color);display:inline-block;display:var(--mat-expansion-legacy-header-indicator-display, inline-block)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color);display:none;display:var(--mat-expansion-header-indicator-display, none)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],
      encapsulation: 2,
      data: {
        animation: [matExpansionAnimations.indicatorRotate]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatExpansionPanelHeader, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel-header",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [matExpansionAnimations.indicatorRotate],
      host: {
        "class": "mat-expansion-panel-header mat-focus-indicator",
        "role": "button",
        "[attr.id]": "panel._headerId",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": "_getPanelId()",
        "[attr.aria-expanded]": "_isExpanded()",
        "[attr.aria-disabled]": "panel.disabled",
        "[class.mat-expanded]": "_isExpanded()",
        "[class.mat-expansion-toggle-indicator-after]": `_getTogglePosition() === 'after'`,
        "[class.mat-expansion-toggle-indicator-before]": `_getTogglePosition() === 'before'`,
        "[class._mat-animation-noopable]": '_animationMode === "NoopAnimations"',
        "[style.height]": "_getHeaderHeight()",
        "(click)": "_toggle()",
        "(keydown)": "_keydown($event)"
      },
      standalone: true,
      template: '<span class="mat-content" [class.mat-content-hide-toggle]="!_showToggle()">\n  <ng-content select="mat-panel-title"></ng-content>\n  <ng-content select="mat-panel-description"></ng-content>\n  <ng-content></ng-content>\n</span>\n\n@if (_showToggle()) {\n  <span [@indicatorRotate]="_getExpandedState()" class="mat-expansion-indicator">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 -960 960 960"\n      aria-hidden="true"\n      focusable="false">\n      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>\n    </svg>\n  </span>\n}\n',
      styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color);display:inline-block;display:var(--mat-expansion-legacy-header-indicator-display, inline-block)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color);display:none;display:var(--mat-expansion-header-indicator-display, none)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}']
    }]
  }], () => [{
    type: MatExpansionPanel,
    decorators: [{
      type: Host
    }]
  }, {
    type: i0.ElementRef
  }, {
    type: i2.FocusMonitor
  }, {
    type: i0.ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
    }, {
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }], {
    expandedHeight: [{
      type: Input
    }],
    collapsedHeight: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: value => value == null ? 0 : numberAttribute(value)
      }]
    }]
  });
})();
var MatExpansionPanelDescription = class _MatExpansionPanelDescription {
  static {
    this.ɵfac = function MatExpansionPanelDescription_Factory(t) {
      return new (t || _MatExpansionPanelDescription)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
      type: _MatExpansionPanelDescription,
      selectors: [["mat-panel-description"]],
      hostAttrs: [1, "mat-expansion-panel-header-description"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatExpansionPanelDescription, [{
    type: Directive,
    args: [{
      selector: "mat-panel-description",
      host: {
        class: "mat-expansion-panel-header-description"
      },
      standalone: true
    }]
  }], null, null);
})();
var MatExpansionPanelTitle = class _MatExpansionPanelTitle {
  static {
    this.ɵfac = function MatExpansionPanelTitle_Factory(t) {
      return new (t || _MatExpansionPanelTitle)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
      type: _MatExpansionPanelTitle,
      selectors: [["mat-panel-title"]],
      hostAttrs: [1, "mat-expansion-panel-header-title"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatExpansionPanelTitle, [{
    type: Directive,
    args: [{
      selector: "mat-panel-title",
      host: {
        class: "mat-expansion-panel-header-title"
      },
      standalone: true
    }]
  }], null, null);
})();
var MatAccordion = class _MatAccordion extends CdkAccordion {
  constructor() {
    super(...arguments);
    this._ownHeaders = new QueryList();
    this.hideToggle = false;
    this.displayMode = "default";
    this.togglePosition = "after";
  }
  ngAfterContentInit() {
    this._headers.changes.pipe(startWith(this._headers)).subscribe(headers => {
      this._ownHeaders.reset(headers.filter(header => header.panel.accordion === this));
      this._ownHeaders.notifyOnChanges();
    });
    this._keyManager = new FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
  }
  /** Handles keyboard events coming in from the panel headers. */
  _handleHeaderKeydown(event) {
    this._keyManager.onKeydown(event);
  }
  _handleHeaderFocus(header) {
    this._keyManager.updateActiveItem(header);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._keyManager?.destroy();
    this._ownHeaders.destroy();
  }
  static {
    this.ɵfac = /* @__PURE__ */(() => {
      let ɵMatAccordion_BaseFactory;
      return function MatAccordion_Factory(t) {
        return (ɵMatAccordion_BaseFactory || (ɵMatAccordion_BaseFactory = i0.ɵɵgetInheritedFactory(_MatAccordion)))(t || _MatAccordion);
      };
    })();
  }
  static {
    this.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
      type: _MatAccordion,
      selectors: [["mat-accordion"]],
      contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i0.ɵɵcontentQuery(dirIndex, MatExpansionPanelHeader, 5);
        }
        if (rf & 2) {
          let _t;
          i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._headers = _t);
        }
      },
      hostAttrs: [1, "mat-accordion"],
      hostVars: 2,
      hostBindings: function MatAccordion_HostBindings(rf, ctx) {
        if (rf & 2) {
          i0.ɵɵclassProp("mat-accordion-multi", ctx.multi);
        }
      },
      inputs: {
        hideToggle: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "hideToggle", "hideToggle", booleanAttribute],
        displayMode: "displayMode",
        togglePosition: "togglePosition"
      },
      exportAs: ["matAccordion"],
      standalone: true,
      features: [i0.ɵɵProvidersFeature([{
        provide: MAT_ACCORDION,
        useExisting: _MatAccordion
      }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatAccordion, [{
    type: Directive,
    args: [{
      selector: "mat-accordion",
      exportAs: "matAccordion",
      providers: [{
        provide: MAT_ACCORDION,
        useExisting: MatAccordion
      }],
      host: {
        class: "mat-accordion",
        // Class binding which is only used by the test harness as there is no other
        // way for the harness to detect if multiple panel support is enabled.
        "[class.mat-accordion-multi]": "this.multi"
      },
      standalone: true
    }]
  }], null, {
    _headers: [{
      type: ContentChildren,
      args: [MatExpansionPanelHeader, {
        descendants: true
      }]
    }],
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    displayMode: [{
      type: Input
    }],
    togglePosition: [{
      type: Input
    }]
  });
})();
var MatExpansionModule = class _MatExpansionModule {
  static {
    this.ɵfac = function MatExpansionModule_Factory(t) {
      return new (t || _MatExpansionModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */i0.ɵɵdefineNgModule({
      type: _MatExpansionModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */i0.ɵɵdefineInjector({
      imports: [MatCommonModule, CdkAccordionModule, PortalModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatExpansionModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkAccordionModule, PortalModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
      exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
    }]
  }], null, null);
})();
export { EXPANSION_PANEL_ANIMATION_TIMING, MAT_ACCORDION, MAT_EXPANSION_PANEL, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelContent, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle, matExpansionAnimations };