(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/pages/CoreDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/users/pages/CoreDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applications_users_components_CoreDetailsForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @applications/users/components/CoreDetailsForm */ "./resources/frontend/applications/users/components/CoreDetailsForm.vue");
/* harmony import */ var _applications_users_components_ProfileOverview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @applications/users/components/ProfileOverview */ "./resources/frontend/applications/users/components/ProfileOverview.vue");
/* harmony import */ var _applications_users_components_PersonalDetailsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @applications/users/components/PersonalDetailsForm */ "./resources/frontend/applications/users/components/PersonalDetailsForm.vue");
/* harmony import */ var _applications_users_components_PasswordForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @applications/users/components/PasswordForm */ "./resources/frontend/applications/users/components/PasswordForm.vue");
/* harmony import */ var _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/layout/header/FeatureHeader */ "./resources/frontend/components/layout/header/FeatureHeader.vue");
/* harmony import */ var _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/layout/header/ContextMenu */ "./resources/frontend/components/layout/header/ContextMenu.vue");
/* harmony import */ var _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/layout/header/ContextMenuItem */ "./resources/frontend/components/layout/header/ContextMenuItem.vue");
/* harmony import */ var _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/spinners/LargeSpinner */ "./resources/frontend/components/spinners/LargeSpinner.vue");
/* harmony import */ var _components_portlets_headless_HeadlessPortlet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/portlets/headless/HeadlessPortlet */ "./resources/frontend/components/portlets/headless/HeadlessPortlet.vue");
/* harmony import */ var _modules_forms_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/forms/Form */ "./resources/frontend/modules/forms/Form.js");
/* harmony import */ var _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/alerts/Toast */ "./resources/frontend/modules/alerts/Toast.js");
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
  name: 'core-details',
  components: {
    HeadlessPortlet: _components_portlets_headless_HeadlessPortlet__WEBPACK_IMPORTED_MODULE_8__["default"],
    CoreDetailsForm: _applications_users_components_CoreDetailsForm__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProfileOverview: _applications_users_components_ProfileOverview__WEBPACK_IMPORTED_MODULE_1__["default"],
    FeatureHeader: _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
    ContextMenu: _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_5__["default"],
    ContextMenuItem: _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_6__["default"],
    LargeSpinner: _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_7__["default"],
    PersonalDetailsForm: _applications_users_components_PersonalDetailsForm__WEBPACK_IMPORTED_MODULE_2__["default"],
    PasswordForm: _applications_users_components_PasswordForm__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    id: {
      required: true
    }
  },
  data: function data() {
    return {
      user: null,
      updateForm: new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_9__["default"]({
        isLoaded: false,
        forename: '',
        surname: '',
        email: '',
        password: '',
        password_confirmation: ''
      })
    };
  },
  computed: {
    title: function title() {
      if (this.user === null) {
        return 'User Profile';
      } else {
        return 'User Profile: ' + this.user.name.forename + ' ' + this.user.name.surname;
      }
    }
  },
  methods: {
    loadUser: function loadUser() {
      var _this = this;

      window.axios.get('/users/' + this.id).then(function (response) {
        _this.user = response.data.data;
        _this.updateForm = new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_9__["default"]({
          isLoaded: true,
          forename: _this.user.name.forename,
          surname: _this.user.name.surname,
          email: _this.user.email,
          password: '',
          password_confirmation: ''
        });
      }).catch(function (error) {
        console.log(error);
      });
    },
    updateUser: function updateUser() {
      this.updateForm.put('/users/' + this.id).then(function () {
        return new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_10__["default"]().success('Core details have been successfully updated.');
      }).catch(function (error) {
        return console.log(error);
      });
    }
  },
  created: function created() {
    this.loadUser();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/headless/HeadlessPortlet.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/portlets/headless/HeadlessPortlet.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'headless-portlet',
  props: {
    fullHeight: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  computed: {
    portletClass: function portletClass() {
      return {
        'm-portlet--full-height': this.fullHeight
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/pages/CoreDetails.vue?vue&type=template&id=e28dd24c&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/users/pages/CoreDetails.vue?vue&type=template&id=e28dd24c& ***!
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
        { attrs: { title: _vm.title } },
        [
          _c(
            "context-menu",
            [
              _c(
                "context-menu-item",
                { attrs: { icon: "flaticon-plus", url: "/users/create" } },
                [_vm._v("Create User")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "m-content" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-3 col-lg-4" },
            [_c("profile-overview", { attrs: { user: _vm.user } })],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-9 col-lg-8" },
            [
              _c(
                "headless-portlet",
                [
                  _vm.user
                    ? _c(
                        "core-details-form",
                        {
                          attrs: { form: _vm.updateForm },
                          on: { submit: _vm.updateUser }
                        },
                        [
                          _c("personal-details-form", {
                            attrs: { form: _vm.updateForm }
                          }),
                          _vm._v(" "),
                          _c("password-form", {
                            attrs: {
                              form: _vm.updateForm,
                              description:
                                "If you would like to update the users password, complete this section. If you do not want to change this users password, leave this section empty."
                            }
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
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/headless/HeadlessPortlet.vue?vue&type=template&id=b4d9db86&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/portlets/headless/HeadlessPortlet.vue?vue&type=template&id=b4d9db86& ***!
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
  return _c(
    "div",
    {
      staticClass: "m-portlet",
      class: _vm.portletClass,
      attrs: { "m-portlet": "true" }
    },
    [_c("div", { staticClass: "m-portlet__body" }, [_vm._t("default")], 2)]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/frontend/applications/users/pages/CoreDetails.vue":
/*!*********************************************************************!*\
  !*** ./resources/frontend/applications/users/pages/CoreDetails.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CoreDetails_vue_vue_type_template_id_e28dd24c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoreDetails.vue?vue&type=template&id=e28dd24c& */ "./resources/frontend/applications/users/pages/CoreDetails.vue?vue&type=template&id=e28dd24c&");
/* harmony import */ var _CoreDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoreDetails.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/users/pages/CoreDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CoreDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CoreDetails_vue_vue_type_template_id_e28dd24c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CoreDetails_vue_vue_type_template_id_e28dd24c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/users/pages/CoreDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/users/pages/CoreDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/frontend/applications/users/pages/CoreDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CoreDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CoreDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/pages/CoreDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CoreDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/users/pages/CoreDetails.vue?vue&type=template&id=e28dd24c&":
/*!****************************************************************************************************!*\
  !*** ./resources/frontend/applications/users/pages/CoreDetails.vue?vue&type=template&id=e28dd24c& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoreDetails_vue_vue_type_template_id_e28dd24c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CoreDetails.vue?vue&type=template&id=e28dd24c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/pages/CoreDetails.vue?vue&type=template&id=e28dd24c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoreDetails_vue_vue_type_template_id_e28dd24c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoreDetails_vue_vue_type_template_id_e28dd24c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/components/portlets/headless/HeadlessPortlet.vue":
/*!*****************************************************************************!*\
  !*** ./resources/frontend/components/portlets/headless/HeadlessPortlet.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeadlessPortlet_vue_vue_type_template_id_b4d9db86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeadlessPortlet.vue?vue&type=template&id=b4d9db86& */ "./resources/frontend/components/portlets/headless/HeadlessPortlet.vue?vue&type=template&id=b4d9db86&");
/* harmony import */ var _HeadlessPortlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeadlessPortlet.vue?vue&type=script&lang=js& */ "./resources/frontend/components/portlets/headless/HeadlessPortlet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeadlessPortlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeadlessPortlet_vue_vue_type_template_id_b4d9db86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeadlessPortlet_vue_vue_type_template_id_b4d9db86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/components/portlets/headless/HeadlessPortlet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/components/portlets/headless/HeadlessPortlet.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/frontend/components/portlets/headless/HeadlessPortlet.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlessPortlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeadlessPortlet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/headless/HeadlessPortlet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlessPortlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/components/portlets/headless/HeadlessPortlet.vue?vue&type=template&id=b4d9db86&":
/*!************************************************************************************************************!*\
  !*** ./resources/frontend/components/portlets/headless/HeadlessPortlet.vue?vue&type=template&id=b4d9db86& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlessPortlet_vue_vue_type_template_id_b4d9db86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeadlessPortlet.vue?vue&type=template&id=b4d9db86& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/headless/HeadlessPortlet.vue?vue&type=template&id=b4d9db86&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlessPortlet_vue_vue_type_template_id_b4d9db86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlessPortlet_vue_vue_type_template_id_b4d9db86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);