(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/CreateActivity.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/pages/CreateActivity.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/alerts/Toast */ "./resources/frontend/modules/alerts/Toast.js");
/* harmony import */ var _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/errors/ErrorBus */ "./resources/frontend/modules/errors/ErrorBus.js");
/* harmony import */ var _modules_forms_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/forms/Form */ "./resources/frontend/modules/forms/Form.js");
/* harmony import */ var _applications_activities_activities_components_ActivityForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @applications/activities/activities/components/ActivityForm */ "./resources/frontend/applications/activities/activities/components/ActivityForm.vue");
/* harmony import */ var _components_portlets_standard_BrandPortlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/portlets/standard/BrandPortlet */ "./resources/frontend/components/portlets/standard/BrandPortlet.vue");
/* harmony import */ var _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/layout/header/FeatureHeader */ "./resources/frontend/components/layout/header/FeatureHeader.vue");
/* harmony import */ var _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/layout/header/ContextMenu */ "./resources/frontend/components/layout/header/ContextMenu.vue");
/* harmony import */ var _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/layout/header/ContextMenuItem */ "./resources/frontend/components/layout/header/ContextMenuItem.vue");
/* harmony import */ var _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/spinners/LargeSpinner */ "./resources/frontend/components/spinners/LargeSpinner.vue");
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
  name: 'create-activity',
  props: {
    id: {
      required: true
    }
  },
  data: function data() {
    return {
      collection: null,
      form: new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_2__["default"]({
        name: '',
        description: '',
        places: '',
        price: '',
        starts_at: '',
        ends_at: ''
      })
    };
  },
  components: {
    ActivityForm: _applications_activities_activities_components_ActivityForm__WEBPACK_IMPORTED_MODULE_3__["default"],
    LargeSpinner: _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_8__["default"],
    ContextMenuItem: _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_7__["default"],
    ContextMenu: _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_6__["default"],
    FeatureHeader: _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
    BrandPortlet: _components_portlets_standard_BrandPortlet__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: {
    cancelUrl: function cancelUrl() {
      return '/activity-collections/' + this.id;
    }
  },
  methods: {
    loadCollection: function loadCollection() {
      var _this = this;

      window.axios.get('/activity-collections/' + this.id).then(function (response) {
        return _this.collection = response.data.data;
      }).catch(function (error) {
        return console.log(error);
      });
    },
    createActivity: function createActivity() {
      var _this2 = this;

      this.form.post('/activity-collections/' + this.id + '/activities').then(function (response) {
        new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_0__["default"]().success('This activity has been successfully created.');

        _this2.$router.push('/activity-collections/' + _this2.id + '/activities/' + response.data.id);
      }).catch(function (error) {
        return console.log(error);
      });
    }
  },
  mounted: function mounted() {
    this.loadCollection();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "large-spinner"
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=style&index=0&id=338a2f0f&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=style&index=0&id=338a2f0f&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.m-loader[data-v-338a2f0f] {\n    display: block;\n    height: 4rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=style&index=0&id=338a2f0f&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=style&index=0&id=338a2f0f&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./LargeSpinner.vue?vue&type=style&index=0&id=338a2f0f&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=style&index=0&id=338a2f0f&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/CreateActivity.vue?vue&type=template&id=490f975d&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/pages/CreateActivity.vue?vue&type=template&id=490f975d& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
        { attrs: { title: "Create Activity" } },
        [
          _c(
            "context-menu",
            [
              _c(
                "context-menu-item",
                {
                  attrs: {
                    icon: "flaticon-plus",
                    url: "/activity-collections/create"
                  }
                },
                [_vm._v("Create Collection")]
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
          _vm.collection
            ? _c(
                "brand-portlet",
                { attrs: { title: "Create new Activity" } },
                [
                  _c("activity-form", {
                    attrs: {
                      form: _vm.form,
                      collection: _vm.collection,
                      "cancel-url": _vm.cancelUrl,
                      "submit-label": "Create Activity"
                    },
                    on: { submit: _vm.createActivity }
                  })
                ],
                1
              )
            : _c("large-spinner")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=template&id=338a2f0f&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=template&id=338a2f0f&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "m-loader m-loader--lg" })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/frontend/applications/activities/activities/pages/CreateActivity.vue":
/*!****************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/CreateActivity.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateActivity_vue_vue_type_template_id_490f975d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateActivity.vue?vue&type=template&id=490f975d& */ "./resources/frontend/applications/activities/activities/pages/CreateActivity.vue?vue&type=template&id=490f975d&");
/* harmony import */ var _CreateActivity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateActivity.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/activities/pages/CreateActivity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateActivity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateActivity_vue_vue_type_template_id_490f975d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateActivity_vue_vue_type_template_id_490f975d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/activities/pages/CreateActivity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/pages/CreateActivity.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/CreateActivity.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateActivity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateActivity.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/CreateActivity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateActivity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/pages/CreateActivity.vue?vue&type=template&id=490f975d&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/CreateActivity.vue?vue&type=template&id=490f975d& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateActivity_vue_vue_type_template_id_490f975d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateActivity.vue?vue&type=template&id=490f975d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/CreateActivity.vue?vue&type=template&id=490f975d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateActivity_vue_vue_type_template_id_490f975d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateActivity_vue_vue_type_template_id_490f975d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/components/spinners/LargeSpinner.vue":
/*!*****************************************************************!*\
  !*** ./resources/frontend/components/spinners/LargeSpinner.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LargeSpinner_vue_vue_type_template_id_338a2f0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LargeSpinner.vue?vue&type=template&id=338a2f0f&scoped=true& */ "./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=template&id=338a2f0f&scoped=true&");
/* harmony import */ var _LargeSpinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LargeSpinner.vue?vue&type=script&lang=js& */ "./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LargeSpinner_vue_vue_type_style_index_0_id_338a2f0f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LargeSpinner.vue?vue&type=style&index=0&id=338a2f0f&scoped=true&lang=css& */ "./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=style&index=0&id=338a2f0f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LargeSpinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LargeSpinner_vue_vue_type_template_id_338a2f0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LargeSpinner_vue_vue_type_template_id_338a2f0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "338a2f0f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/components/spinners/LargeSpinner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LargeSpinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./LargeSpinner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LargeSpinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=style&index=0&id=338a2f0f&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=style&index=0&id=338a2f0f&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LargeSpinner_vue_vue_type_style_index_0_id_338a2f0f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./LargeSpinner.vue?vue&type=style&index=0&id=338a2f0f&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=style&index=0&id=338a2f0f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LargeSpinner_vue_vue_type_style_index_0_id_338a2f0f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LargeSpinner_vue_vue_type_style_index_0_id_338a2f0f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LargeSpinner_vue_vue_type_style_index_0_id_338a2f0f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LargeSpinner_vue_vue_type_style_index_0_id_338a2f0f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LargeSpinner_vue_vue_type_style_index_0_id_338a2f0f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=template&id=338a2f0f&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=template&id=338a2f0f&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LargeSpinner_vue_vue_type_template_id_338a2f0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LargeSpinner.vue?vue&type=template&id=338a2f0f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/spinners/LargeSpinner.vue?vue&type=template&id=338a2f0f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LargeSpinner_vue_vue_type_template_id_338a2f0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LargeSpinner_vue_vue_type_template_id_338a2f0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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