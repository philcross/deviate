(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/components/ProfileOverview.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/users/components/ProfileOverview.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/spinners/LargeSpinner */ "./resources/frontend/components/spinners/LargeSpinner.vue");
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'profile-overview',
  components: {
    LargeSpinner: _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    user: {
      required: false,
      default: null
    }
  },
  computed: {
    rootUrl: function rootUrl() {
      return '/users/' + this.user.id;
    }
  }
});

/***/ }),

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/components/ProfileOverview.vue?vue&type=template&id=1ec765f7&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/users/components/ProfileOverview.vue?vue&type=template&id=1ec765f7& ***!
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
  return _c("div", { staticClass: "m-portlet m-portlet--full-height  " }, [
    _c(
      "div",
      { staticClass: "m-portlet__body" },
      [
        _vm.user
          ? _c("div", [
              _c("div", { staticClass: "m-card-profile" }, [
                _c("div", { staticClass: "m-card-profile__pic" }, [
                  _c("div", { staticClass: "m-card-profile__pic-wrapper" }, [
                    _c("img", { attrs: { src: _vm.user.avatar.url, alt: "" } })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "m-card-profile__details" }, [
                  _c("span", { staticClass: "m-card-profile__name" }, [
                    _vm._v(
                      _vm._s(_vm.user.name.forename) +
                        " " +
                        _vm._s(_vm.user.name.surname)
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "m-card-profile__email m-link",
                      attrs: { href: "" }
                    },
                    [_vm._v(_vm._s(_vm.user.email))]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "m-nav m-nav--hover-bg m-portlet-fit--sides" },
                [
                  _c("li", {
                    staticClass: "m-nav__separator m-nav__separator--fit"
                  }),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "m-nav__item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "m-nav__link",
                          attrs: { to: _vm.rootUrl }
                        },
                        [
                          _c("i", {
                            staticClass: "m-nav__link-icon flaticon-profile-1"
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "m-nav__link-text" }, [
                            _vm._v("Update details")
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "m-nav__item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "m-nav__link",
                          attrs: { to: _vm.rootUrl + "/avatar" }
                        },
                        [
                          _c("i", {
                            staticClass: "m-nav__link-icon flaticon-share"
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "m-nav__link-text" }, [
                            _vm._v("Avatar")
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "m-nav__item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "m-nav__link",
                          attrs: { to: _vm.rootUrl + "/usergroups" }
                        },
                        [
                          _c("i", {
                            staticClass: "m-nav__link-icon flaticon-chat-1"
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "m-nav__link-text" }, [
                            _vm._v("Usergroups")
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("li", {
                    staticClass: "m-nav__separator m-nav__separator--fit"
                  }),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "m-nav__item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "m-nav__link",
                          attrs: { to: _vm.rootUrl + "/deactivate" }
                        },
                        [
                          _c("i", {
                            staticClass:
                              "m-nav__link-icon flaticon-lifebuoy text-danger"
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "m-nav__link-text text-danger" },
                            [_vm._v("Deactivate / Delete")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            ])
          : _c("large-spinner")
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./resources/frontend/applications/users/components/ProfileOverview.vue":
/*!******************************************************************************!*\
  !*** ./resources/frontend/applications/users/components/ProfileOverview.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileOverview_vue_vue_type_template_id_1ec765f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileOverview.vue?vue&type=template&id=1ec765f7& */ "./resources/frontend/applications/users/components/ProfileOverview.vue?vue&type=template&id=1ec765f7&");
/* harmony import */ var _ProfileOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileOverview.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/users/components/ProfileOverview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileOverview_vue_vue_type_template_id_1ec765f7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileOverview_vue_vue_type_template_id_1ec765f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/users/components/ProfileOverview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/users/components/ProfileOverview.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/frontend/applications/users/components/ProfileOverview.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileOverview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/components/ProfileOverview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/users/components/ProfileOverview.vue?vue&type=template&id=1ec765f7&":
/*!*************************************************************************************************************!*\
  !*** ./resources/frontend/applications/users/components/ProfileOverview.vue?vue&type=template&id=1ec765f7& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileOverview_vue_vue_type_template_id_1ec765f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileOverview.vue?vue&type=template&id=1ec765f7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/components/ProfileOverview.vue?vue&type=template&id=1ec765f7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileOverview_vue_vue_type_template_id_1ec765f7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileOverview_vue_vue_type_template_id_1ec765f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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