(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/components/CollectionForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/components/CollectionForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_forms_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/forms/Form */ "./resources/frontend/modules/forms/Form.js");
/* harmony import */ var _components_forms_HorizontalForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/forms/HorizontalForm */ "./resources/frontend/components/forms/HorizontalForm.vue");
/* harmony import */ var _components_forms_layouts_FormSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/forms/layouts/FormSection */ "./resources/frontend/components/forms/layouts/FormSection.vue");
/* harmony import */ var _components_forms_layouts_FormRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/forms/layouts/FormRow */ "./resources/frontend/components/forms/layouts/FormRow.vue");
/* harmony import */ var _components_forms_layouts_with_icon_RangeInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/forms/layouts/with-icon/RangeInput */ "./resources/frontend/components/forms/layouts/with-icon/RangeInput.vue");
/* harmony import */ var _components_forms_elements_ToggleSwitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/forms/elements/ToggleSwitch */ "./resources/frontend/components/forms/elements/ToggleSwitch.vue");
/* harmony import */ var _components_portlets_footers_FormActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/portlets/footers/FormActions */ "./resources/frontend/components/portlets/footers/FormActions.vue");
/* harmony import */ var _components_buttons_submit_BrandButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/buttons/submit/BrandButton */ "./resources/frontend/components/buttons/submit/BrandButton.vue");
/* harmony import */ var _components_buttons_basic_SecondaryButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/buttons/basic/SecondaryButton */ "./resources/frontend/components/buttons/basic/SecondaryButton.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'collection-form',
  components: {
    SecondaryButton: _components_buttons_basic_SecondaryButton__WEBPACK_IMPORTED_MODULE_8__["default"],
    BrandButton: _components_buttons_submit_BrandButton__WEBPACK_IMPORTED_MODULE_7__["default"],
    FormActions: _components_portlets_footers_FormActions__WEBPACK_IMPORTED_MODULE_6__["default"],
    ToggleSwitch: _components_forms_elements_ToggleSwitch__WEBPACK_IMPORTED_MODULE_5__["default"],
    RangeInput: _components_forms_layouts_with_icon_RangeInput__WEBPACK_IMPORTED_MODULE_4__["default"],
    FormRow: _components_forms_layouts_FormRow__WEBPACK_IMPORTED_MODULE_3__["default"],
    FormSection: _components_forms_layouts_FormSection__WEBPACK_IMPORTED_MODULE_2__["default"],
    HorizontalForm: _components_forms_HorizontalForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    form: {
      required: true,
      type: _modules_forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    submitLabel: {
      required: false,
      type: String,
      default: 'Save Changes'
    },
    cancelUrl: {
      required: false,
      type: String,
      default: '/activity-collections'
    }
  },
  methods: {
    changeOption: function changeOption(option, event) {
      this.form[option] = event.target.checked;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/forms/layouts/FormRow.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/forms/layouts/FormRow.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_forms_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/forms/Form */ "./resources/frontend/modules/forms/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'form-row',
  props: {
    form: {
      required: true,
      type: _modules_forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    name: {
      required: true
    },
    label: {
      required: true,
      type: String
    },
    columns: {
      required: false,
      type: Array,
      default: function _default() {
        return [3, 9];
      }
    },
    readonly: {
      required: false,
      type: Boolean,
      default: false
    },
    helper: {
      required: false,
      type: String
    }
  },
  computed: {
    elementNames: function elementNames() {
      return typeof this.name === 'string' ? [this.name] : this.name;
    },
    labelColumnWidth: function labelColumnWidth() {
      return "col-md-".concat(this.columns[0]);
    },
    elementColumnWidth: function elementColumnWidth() {
      return "col-md-".concat(this.columns[1]);
    },
    hasValidationError: function hasValidationError() {
      for (var x in this.elementNames) {
        if (this.form.validationErrors.has(this.elementNames[x])) {
          return true;
        }
      }

      return false;
    },
    getValidationErrors: function getValidationErrors() {
      var errors = [];

      for (var x in this.elementNames) {
        errors = errors.concat(this.form.validationErrors.get(this.elementNames[x]));
      }

      return errors;
    },
    hasHelper: function hasHelper() {
      return this.helper && this.helper.length > 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/forms/layouts/FormSection.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/forms/layouts/FormSection.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'form-section',
  props: {
    title: {
      required: true,
      type: String
    },
    description: {
      required: false,
      type: String,
      default: ''
    },
    width: {
      required: false,
      type: Number,
      default: 10
    }
  },
  computed: {
    classes: function classes() {
      return 'col-' + this.width;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/forms/layouts/with-icon/RangeInput.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/forms/layouts/with-icon/RangeInput.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'range-input',
  props: {
    label: {
      required: false,
      type: String,
      default: 'to'
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/components/CollectionForm.vue?vue&type=template&id=3fd2d9f4&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/components/CollectionForm.vue?vue&type=template&id=3fd2d9f4& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "horizontal-form",
    {
      on: {
        submit: function($event) {
          _vm.$emit("submit")
        }
      }
    },
    [
      _c(
        "form-section",
        { attrs: { title: "Core Details" } },
        [
          _c(
            "form-row",
            {
              attrs: {
                form: _vm.form,
                name: "name",
                label: "Collection Name",
                helper: "Enter a name for this collection",
                columns: [3, 6]
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.name,
                    expression: "form.name"
                  }
                ],
                staticClass: "form-control m-input m-input--air",
                attrs: { type: "text", placeholder: "Collection Name" },
                domProps: { value: _vm.form.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "name", $event.target.value)
                  }
                }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "form-row",
            {
              attrs: {
                form: _vm.form,
                name: "description",
                label: "Collection Description",
                helper: "Enter a description for this collection",
                columns: [3, 6]
              }
            },
            [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.description,
                    expression: "form.description"
                  }
                ],
                staticClass: "form-control m-input m-input--air",
                attrs: { placeholder: "Collection Description", rows: "5" },
                domProps: { value: _vm.form.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "description", $event.target.value)
                  }
                }
              })
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "form-section",
        { attrs: { title: "Key Dates" } },
        [
          _c(
            "form-row",
            {
              attrs: {
                form: _vm.form,
                name: ["booking_opens_at", "booking_closes_at"],
                label: "Booking Dates",
                helper:
                  "Select the date that booking opens and closes for this collection.",
                columns: [3, 6]
              }
            },
            [
              _c(
                "range-input",
                [
                  _c("datetime", {
                    attrs: {
                      slot: "from",
                      "input-class": "form-control m-input m-input--air"
                    },
                    slot: "from",
                    model: {
                      value: _vm.form.booking_opens_at,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "booking_opens_at", $$v)
                      },
                      expression: "form.booking_opens_at"
                    }
                  }),
                  _vm._v(" "),
                  _c("datetime", {
                    attrs: {
                      slot: "to",
                      "input-class": "form-control m-input m-input--air"
                    },
                    slot: "to",
                    model: {
                      value: _vm.form.booking_closes_at,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "booking_closes_at", $$v)
                      },
                      expression: "form.booking_closes_at"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "form-row",
            {
              attrs: {
                form: _vm.form,
                name: ["payment_opens_at", "payment_closes_at"],
                label: "Payment Dates",
                helper:
                  "Select the date that payment opens and closes for this collection.",
                columns: [3, 6]
              }
            },
            [
              _c(
                "range-input",
                [
                  _c("datetime", {
                    attrs: {
                      slot: "from",
                      "input-class": "form-control m-input m-input--air"
                    },
                    slot: "from",
                    model: {
                      value: _vm.form.payment_opens_at,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "payment_opens_at", $$v)
                      },
                      expression: "form.payment_opens_at"
                    }
                  }),
                  _vm._v(" "),
                  _c("datetime", {
                    attrs: {
                      slot: "to",
                      "input-class": "form-control m-input m-input--air"
                    },
                    slot: "to",
                    model: {
                      value: _vm.form.payment_closes_at,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "payment_closes_at", $$v)
                      },
                      expression: "form.payment_closes_at"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "form-row",
            {
              attrs: {
                form: _vm.form,
                name: ["activities_start_at", "activities_end_at"],
                label: "Activity Dates",
                helper:
                  "Select the date that activities start and end for this collection.",
                columns: [3, 6]
              }
            },
            [
              _c(
                "range-input",
                [
                  _c("datetime", {
                    attrs: {
                      slot: "from",
                      "input-class": "form-control m-input m-input--air"
                    },
                    slot: "from",
                    model: {
                      value: _vm.form.activities_start_at,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "activities_start_at", $$v)
                      },
                      expression: "form.activities_start_at"
                    }
                  }),
                  _vm._v(" "),
                  _c("datetime", {
                    attrs: {
                      slot: "to",
                      "input-class": "form-control m-input m-input--air"
                    },
                    slot: "to",
                    model: {
                      value: _vm.form.activities_end_at,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "activities_end_at", $$v)
                      },
                      expression: "form.activities_end_at"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "form-section",
        { attrs: { title: "Options" } },
        [
          _c(
            "form-row",
            {
              attrs: {
                form: _vm.form,
                name: "is_hidden",
                label: "Hide Collection",
                helper: "Choose whether to hide this collection from users.",
                columns: [3, 6]
              }
            },
            [
              _c("toggle-switch", {
                attrs: { checked: _vm.form.is_hidden },
                on: {
                  change: function($event) {
                    _vm.changeOption("is_hidden", $event)
                  }
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "form-actions",
        [
          _c("brand-button", { attrs: { actioning: _vm.form.isSubmitting } }, [
            _vm._v(_vm._s(_vm.submitLabel))
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            { attrs: { to: _vm.cancelUrl } },
            [_c("secondary-button", [_vm._v("Cancel")])],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/forms/layouts/FormRow.vue?vue&type=template&id=6746368c&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/forms/layouts/FormRow.vue?vue&type=template&id=6746368c& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "form-group m-form__group row",
      class: { "has-danger": _vm.hasValidationError }
    },
    [
      _c(
        "label",
        { staticClass: "col-form-label", class: _vm.labelColumnWidth },
        [_vm._v(_vm._s(_vm.label))]
      ),
      _vm._v(" "),
      _c(
        "div",
        { class: _vm.elementColumnWidth },
        [
          !_vm.readonly
            ? _vm._t("default")
            : _c("p", { staticClass: "form-control-static" }, [
                _vm._v(_vm._s(_vm.form[_vm.name]))
              ]),
          _vm._v(" "),
          _vm._l(_vm.getValidationErrors, function(error) {
            return _vm.hasValidationError
              ? _c("div", {
                  staticClass: "form-control-feedback",
                  domProps: { textContent: _vm._s(error) }
                })
              : _vm._e()
          }),
          _vm._v(" "),
          !_vm.readonly && _vm.hasHelper
            ? _c("span", { staticClass: "m-form__help" }, [
                _vm._v(_vm._s(_vm.helper))
              ])
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/forms/layouts/FormSection.vue?vue&type=template&id=77d76117&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/forms/layouts/FormSection.vue?vue&type=template&id=77d76117& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "form-group m-form__group row" }, [
        _c("div", { staticClass: "ml-auto", class: _vm.classes }, [
          _c("h3", { staticClass: "m-form__section" }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _vm._v(" "),
          _vm.description.length
            ? _c("p", [_vm._v(_vm._s(_vm.description))])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _c("div", {
        staticClass:
          "m-form__seperator m-form__seperator--dashed m-form__seperator--space-2x"
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/forms/layouts/with-icon/RangeInput.vue?vue&type=template&id=0a2c0c94&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/forms/layouts/with-icon/RangeInput.vue?vue&type=template&id=0a2c0c94& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "input-group" },
    [
      _vm._t("from"),
      _vm._v(" "),
      _c("div", { staticClass: "input-group-append" }, [
        _c(
          "span",
          { staticClass: "input-group-text", attrs: { id: "basic-addon2" } },
          [_vm._v(_vm._s(_vm.label))]
        )
      ]),
      _vm._v(" "),
      _vm._t("to")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/frontend/applications/activities/collections/components/CollectionForm.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/components/CollectionForm.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollectionForm_vue_vue_type_template_id_3fd2d9f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollectionForm.vue?vue&type=template&id=3fd2d9f4& */ "./resources/frontend/applications/activities/collections/components/CollectionForm.vue?vue&type=template&id=3fd2d9f4&");
/* harmony import */ var _CollectionForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollectionForm.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/collections/components/CollectionForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CollectionForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CollectionForm_vue_vue_type_template_id_3fd2d9f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CollectionForm_vue_vue_type_template_id_3fd2d9f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/collections/components/CollectionForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/components/CollectionForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/components/CollectionForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CollectionForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/components/CollectionForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/components/CollectionForm.vue?vue&type=template&id=3fd2d9f4&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/components/CollectionForm.vue?vue&type=template&id=3fd2d9f4& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionForm_vue_vue_type_template_id_3fd2d9f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CollectionForm.vue?vue&type=template&id=3fd2d9f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/components/CollectionForm.vue?vue&type=template&id=3fd2d9f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionForm_vue_vue_type_template_id_3fd2d9f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionForm_vue_vue_type_template_id_3fd2d9f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/components/forms/layouts/FormRow.vue":
/*!*****************************************************************!*\
  !*** ./resources/frontend/components/forms/layouts/FormRow.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormRow_vue_vue_type_template_id_6746368c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormRow.vue?vue&type=template&id=6746368c& */ "./resources/frontend/components/forms/layouts/FormRow.vue?vue&type=template&id=6746368c&");
/* harmony import */ var _FormRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormRow.vue?vue&type=script&lang=js& */ "./resources/frontend/components/forms/layouts/FormRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormRow_vue_vue_type_template_id_6746368c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormRow_vue_vue_type_template_id_6746368c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/components/forms/layouts/FormRow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/components/forms/layouts/FormRow.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/frontend/components/forms/layouts/FormRow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormRow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/forms/layouts/FormRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/components/forms/layouts/FormRow.vue?vue&type=template&id=6746368c&":
/*!************************************************************************************************!*\
  !*** ./resources/frontend/components/forms/layouts/FormRow.vue?vue&type=template&id=6746368c& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRow_vue_vue_type_template_id_6746368c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormRow.vue?vue&type=template&id=6746368c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/forms/layouts/FormRow.vue?vue&type=template&id=6746368c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRow_vue_vue_type_template_id_6746368c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRow_vue_vue_type_template_id_6746368c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/components/forms/layouts/FormSection.vue":
/*!*********************************************************************!*\
  !*** ./resources/frontend/components/forms/layouts/FormSection.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSection_vue_vue_type_template_id_77d76117___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSection.vue?vue&type=template&id=77d76117& */ "./resources/frontend/components/forms/layouts/FormSection.vue?vue&type=template&id=77d76117&");
/* harmony import */ var _FormSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSection.vue?vue&type=script&lang=js& */ "./resources/frontend/components/forms/layouts/FormSection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSection_vue_vue_type_template_id_77d76117___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSection_vue_vue_type_template_id_77d76117___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/components/forms/layouts/FormSection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/components/forms/layouts/FormSection.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/frontend/components/forms/layouts/FormSection.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/forms/layouts/FormSection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/components/forms/layouts/FormSection.vue?vue&type=template&id=77d76117&":
/*!****************************************************************************************************!*\
  !*** ./resources/frontend/components/forms/layouts/FormSection.vue?vue&type=template&id=77d76117& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSection_vue_vue_type_template_id_77d76117___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSection.vue?vue&type=template&id=77d76117& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/forms/layouts/FormSection.vue?vue&type=template&id=77d76117&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSection_vue_vue_type_template_id_77d76117___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSection_vue_vue_type_template_id_77d76117___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/components/forms/layouts/with-icon/RangeInput.vue":
/*!******************************************************************************!*\
  !*** ./resources/frontend/components/forms/layouts/with-icon/RangeInput.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RangeInput_vue_vue_type_template_id_0a2c0c94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RangeInput.vue?vue&type=template&id=0a2c0c94& */ "./resources/frontend/components/forms/layouts/with-icon/RangeInput.vue?vue&type=template&id=0a2c0c94&");
/* harmony import */ var _RangeInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RangeInput.vue?vue&type=script&lang=js& */ "./resources/frontend/components/forms/layouts/with-icon/RangeInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RangeInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RangeInput_vue_vue_type_template_id_0a2c0c94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RangeInput_vue_vue_type_template_id_0a2c0c94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/components/forms/layouts/with-icon/RangeInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/components/forms/layouts/with-icon/RangeInput.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/frontend/components/forms/layouts/with-icon/RangeInput.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RangeInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RangeInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/forms/layouts/with-icon/RangeInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RangeInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/components/forms/layouts/with-icon/RangeInput.vue?vue&type=template&id=0a2c0c94&":
/*!*************************************************************************************************************!*\
  !*** ./resources/frontend/components/forms/layouts/with-icon/RangeInput.vue?vue&type=template&id=0a2c0c94& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RangeInput_vue_vue_type_template_id_0a2c0c94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RangeInput.vue?vue&type=template&id=0a2c0c94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/forms/layouts/with-icon/RangeInput.vue?vue&type=template&id=0a2c0c94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RangeInput_vue_vue_type_template_id_0a2c0c94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RangeInput_vue_vue_type_template_id_0a2c0c94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/modules/alerts/Toast.js":
/*!****************************************************!*\
  !*** ./resources/frontend/modules/alerts/Toast.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (classConfig) {
  this.classConfig = classConfig;
  var defaultConfig = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "showDuration": "300",
    "hideDuration": "2000",
    "timeOut": "8000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  };

  this.success = function (title, details, config) {
    toastr.success(details, title, this.getConfig(config)).css('width', '600px');
  };

  this.error = function (title, details, config) {
    toastr.error(details, title, this.getConfig(config)).css('width', '600px');
  };

  this.warning = function (title, details, config) {
    toastr.warning(details, title, this.getConfig(config)).css('width', '600px');
  };

  this.info = function (title, details, config) {
    toastr.info(details, title, this.getConfig(config)).css('width', '600px');
  };

  this.clear = function () {
    toastr.clear();
  };

  this.getConfig = function (config) {
    return Object.assign({}, defaultConfig, this.classConfig, config);
  };
});

/***/ })

}]);