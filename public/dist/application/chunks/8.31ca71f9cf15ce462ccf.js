(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_forms_HorizontalForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/forms/HorizontalForm */ "./resources/frontend/components/forms/HorizontalForm.vue");
/* harmony import */ var _components_forms_layouts_FormRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/forms/layouts/FormRow */ "./resources/frontend/components/forms/layouts/FormRow.vue");
/* harmony import */ var _components_portlets_footers_FormActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/portlets/footers/FormActions */ "./resources/frontend/components/portlets/footers/FormActions.vue");
/* harmony import */ var _components_buttons_basic_BrandButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/buttons/basic/BrandButton */ "./resources/frontend/components/buttons/basic/BrandButton.vue");
/* harmony import */ var _components_buttons_basic_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/buttons/basic/SecondaryButton */ "./resources/frontend/components/buttons/basic/SecondaryButton.vue");
/* harmony import */ var _modules_forms_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/forms/Form */ "./resources/frontend/modules/forms/Form.js");
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
  name: "create-usergroup-form",
  props: {
    form: {
      required: true,
      type: _modules_forms_Form__WEBPACK_IMPORTED_MODULE_5__["default"]
    },
    submitLabel: {
      required: false,
      type: String,
      default: 'Save'
    },
    cancelUrl: {
      required: false,
      type: String,
      default: '/usergroups'
    }
  },
  components: {
    HorizontalForm: _components_forms_HorizontalForm__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormRow: _components_forms_layouts_FormRow__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormActions: _components_portlets_footers_FormActions__WEBPACK_IMPORTED_MODULE_2__["default"],
    BrandButton: _components_buttons_basic_BrandButton__WEBPACK_IMPORTED_MODULE_3__["default"],
    SecondaryButton: _components_buttons_basic_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/usergroups/pages/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/usergroups/pages/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/layout/header/FeatureHeader */ "./resources/frontend/components/layout/header/FeatureHeader.vue");
/* harmony import */ var _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layout/header/ContextMenu */ "./resources/frontend/components/layout/header/ContextMenu.vue");
/* harmony import */ var _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/layout/header/ContextMenuItem */ "./resources/frontend/components/layout/header/ContextMenuItem.vue");
/* harmony import */ var _components_portlets_standard_BrandPortlet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/portlets/standard/BrandPortlet */ "./resources/frontend/components/portlets/standard/BrandPortlet.vue");
/* harmony import */ var _applications_usergroups_components_UsergroupDetailsForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @applications/usergroups/components/UsergroupDetailsForm */ "./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue");
/* harmony import */ var _modules_forms_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/forms/Form */ "./resources/frontend/modules/forms/Form.js");
/* harmony import */ var _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/errors/ErrorBus */ "./resources/frontend/modules/errors/ErrorBus.js");
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
  name: "create",
  components: {
    FeatureHeader: _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenu: _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_1__["default"],
    ContextMenuItem: _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_2__["default"],
    BrandPortlet: _components_portlets_standard_BrandPortlet__WEBPACK_IMPORTED_MODULE_3__["default"],
    UsergroupDetailsForm: _applications_usergroups_components_UsergroupDetailsForm__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      form: new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_5__["default"]({
        name: '',
        description: ''
      })
    };
  },
  methods: {
    createUsergroup: function createUsergroup() {
      var _this = this;

      this.form.post('/usergroups').then(function () {//
      }).catch(function (error) {
        _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_6__["default"].record(error.data.data, 'page');
      }).then(function () {
        return _this.$router.push('/usergroups');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=style&index=0&id=0fa014e2&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=style&index=0&id=0fa014e2&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=style&index=0&id=0fa014e2&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=style&index=0&id=0fa014e2&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsergroupDetailsForm.vue?vue&type=style&index=0&id=0fa014e2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=style&index=0&id=0fa014e2&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=template&id=0fa014e2&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=template&id=0fa014e2&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
        "form-row",
        {
          attrs: {
            form: _vm.form,
            name: "name",
            label: "Usergroup Name",
            helper: "Enter a brief name for this usergroup",
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
            attrs: { type: "text", placeholder: "Usergroup Name" },
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
            label: "Usergroup Description",
            helper: "Enter a brief description of this usergroup",
            columns: [3, 6]
          }
        },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.description,
                expression: "form.description"
              }
            ],
            staticClass: "form-control m-input m-input--air",
            attrs: { type: "text", placeholder: "Usergroup Description" },
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
      ),
      _vm._v(" "),
      _c(
        "form-actions",
        [
          _c(
            "brand-button",
            {
              attrs: { actioning: _vm.form.isSubmitting },
              on: {
                click: function($event) {
                  _vm.$emit("submit")
                }
              }
            },
            [_vm._v(_vm._s(_vm.submitLabel))]
          ),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/usergroups/pages/Create.vue?vue&type=template&id=255358e0&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/usergroups/pages/Create.vue?vue&type=template&id=255358e0& ***!
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
      _c(
        "feature-header",
        { attrs: { title: "Create Usergroup" } },
        [
          _c(
            "context-menu",
            [
              _c(
                "context-menu-item",
                { attrs: { icon: "flaticon-search-1", url: "/usergroups" } },
                [_vm._v("Search Usergroups")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "m-content" },
        [
          _c(
            "brand-portlet",
            { attrs: { title: "Create new Usergroup", icon: "flaticon-plus" } },
            [
              _c("usergroup-details-form", {
                attrs: { form: _vm.form },
                on: { submit: _vm.createUsergroup }
              })
            ],
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

/***/ "./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue":
/*!****************************************************************************************!*\
  !*** ./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsergroupDetailsForm_vue_vue_type_template_id_0fa014e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsergroupDetailsForm.vue?vue&type=template&id=0fa014e2&scoped=true& */ "./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=template&id=0fa014e2&scoped=true&");
/* harmony import */ var _UsergroupDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsergroupDetailsForm.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UsergroupDetailsForm_vue_vue_type_style_index_0_id_0fa014e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UsergroupDetailsForm.vue?vue&type=style&index=0&id=0fa014e2&scoped=true&lang=css& */ "./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=style&index=0&id=0fa014e2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UsergroupDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsergroupDetailsForm_vue_vue_type_template_id_0fa014e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsergroupDetailsForm_vue_vue_type_template_id_0fa014e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0fa014e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UsergroupDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsergroupDetailsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UsergroupDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=style&index=0&id=0fa014e2&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=style&index=0&id=0fa014e2&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsergroupDetailsForm_vue_vue_type_style_index_0_id_0fa014e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsergroupDetailsForm.vue?vue&type=style&index=0&id=0fa014e2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=style&index=0&id=0fa014e2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsergroupDetailsForm_vue_vue_type_style_index_0_id_0fa014e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsergroupDetailsForm_vue_vue_type_style_index_0_id_0fa014e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsergroupDetailsForm_vue_vue_type_style_index_0_id_0fa014e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsergroupDetailsForm_vue_vue_type_style_index_0_id_0fa014e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsergroupDetailsForm_vue_vue_type_style_index_0_id_0fa014e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=template&id=0fa014e2&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=template&id=0fa014e2&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsergroupDetailsForm_vue_vue_type_template_id_0fa014e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsergroupDetailsForm.vue?vue&type=template&id=0fa014e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/usergroups/components/UsergroupDetailsForm.vue?vue&type=template&id=0fa014e2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsergroupDetailsForm_vue_vue_type_template_id_0fa014e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsergroupDetailsForm_vue_vue_type_template_id_0fa014e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/applications/usergroups/pages/Create.vue":
/*!*********************************************************************!*\
  !*** ./resources/frontend/applications/usergroups/pages/Create.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_255358e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=255358e0& */ "./resources/frontend/applications/usergroups/pages/Create.vue?vue&type=template&id=255358e0&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/usergroups/pages/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_255358e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_255358e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/usergroups/pages/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/usergroups/pages/Create.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/frontend/applications/usergroups/pages/Create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/usergroups/pages/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/usergroups/pages/Create.vue?vue&type=template&id=255358e0&":
/*!****************************************************************************************************!*\
  !*** ./resources/frontend/applications/usergroups/pages/Create.vue?vue&type=template&id=255358e0& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_255358e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=255358e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/usergroups/pages/Create.vue?vue&type=template&id=255358e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_255358e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_255358e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);