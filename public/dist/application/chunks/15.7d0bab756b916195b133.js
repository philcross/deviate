(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/pages/DeleteUser.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/users/pages/DeleteUser.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applications_users_components_ProfileOverview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @applications/users/components/ProfileOverview */ "./resources/frontend/applications/users/components/ProfileOverview.vue");
/* harmony import */ var _modules_forms_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/forms/Form */ "./resources/frontend/modules/forms/Form.js");
/* harmony import */ var _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/errors/ErrorBus */ "./resources/frontend/modules/errors/ErrorBus.js");
/* harmony import */ var _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/alerts/Toast */ "./resources/frontend/modules/alerts/Toast.js");
/* harmony import */ var _components_forms_HorizontalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/forms/HorizontalForm */ "./resources/frontend/components/forms/HorizontalForm.vue");
/* harmony import */ var _components_forms_layouts_FormColumn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/forms/layouts/FormColumn */ "./resources/frontend/components/forms/layouts/FormColumn.vue");
/* harmony import */ var _components_buttons_submit_BrandButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/buttons/submit/BrandButton */ "./resources/frontend/components/buttons/submit/BrandButton.vue");
/* harmony import */ var _components_portlets_footers_FormActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/portlets/footers/FormActions */ "./resources/frontend/components/portlets/footers/FormActions.vue");
/* harmony import */ var _components_portlets_standard_BrandPortlet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/portlets/standard/BrandPortlet */ "./resources/frontend/components/portlets/standard/BrandPortlet.vue");
/* harmony import */ var _components_portlets_standard_DangerPortlet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/portlets/standard/DangerPortlet */ "./resources/frontend/components/portlets/standard/DangerPortlet.vue");
/* harmony import */ var _components_buttons_submit_DangerButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/buttons/submit/DangerButton */ "./resources/frontend/components/buttons/submit/DangerButton.vue");
/* harmony import */ var _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/layout/header/FeatureHeader */ "./resources/frontend/components/layout/header/FeatureHeader.vue");
/* harmony import */ var _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/layout/header/ContextMenu */ "./resources/frontend/components/layout/header/ContextMenu.vue");
/* harmony import */ var _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/layout/header/ContextMenuItem */ "./resources/frontend/components/layout/header/ContextMenuItem.vue");
/* harmony import */ var _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/spinners/LargeSpinner */ "./resources/frontend/components/spinners/LargeSpinner.vue");
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
  name: "delete-user",
  components: {
    BrandButton: _components_buttons_submit_BrandButton__WEBPACK_IMPORTED_MODULE_6__["default"],
    FormColumn: _components_forms_layouts_FormColumn__WEBPACK_IMPORTED_MODULE_5__["default"],
    DangerButton: _components_buttons_submit_DangerButton__WEBPACK_IMPORTED_MODULE_10__["default"],
    FormActions: _components_portlets_footers_FormActions__WEBPACK_IMPORTED_MODULE_7__["default"],
    HorizontalForm: _components_forms_HorizontalForm__WEBPACK_IMPORTED_MODULE_4__["default"],
    BrandPortlet: _components_portlets_standard_BrandPortlet__WEBPACK_IMPORTED_MODULE_8__["default"],
    DangerPortlet: _components_portlets_standard_DangerPortlet__WEBPACK_IMPORTED_MODULE_9__["default"],
    FeatureHeader: _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_11__["default"],
    ContextMenu: _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_12__["default"],
    ContextMenuItem: _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_13__["default"],
    LargeSpinner: _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_14__["default"],
    ProfileOverview: _applications_users_components_ProfileOverview__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    id: {
      required: true
    }
  },
  data: function data() {
    return {
      user: null,
      deactivateForm: new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_1__["default"](),
      deleteForm: new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_1__["default"](),
      restoreForm: new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  },
  methods: {
    loadUser: function loadUser() {
      var _this = this;

      window.axios.get('/users/' + this.id).then(function (response) {
        return _this.user = response.data.data;
      }).catch(function (error) {
        return console.log(error);
      });
    },
    deactivateUser: function deactivateUser() {
      var _this2 = this;

      this.deactivateForm.patch('/users/' + this.user.id + '/deactivate').then(function (response) {
        console.log(response);
        new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_3__["default"]().success('User Deactivated', 'This users avatar has been successfully deactivated.');
        _this2.user = response.data.data;
      }).catch(function (error) {
        return _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_2__["default"].record(error);
      });
    },
    deleteUser: function deleteUser() {
      this.deleteForm.delete('/users/' + this.user.id).then(function () {
        new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_3__["default"]().success('User Deactivated', 'This users avatar has been successfully deleted.');
        window.location.href = '/users';
      }).catch(function (error) {
        return _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_2__["default"].record(error);
      });
    },
    restoreUser: function restoreUser() {
      this.restoreForm.delete('/users/' + this.user.id + '/restore').then(function () {
        return new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_3__["default"]().success('User Restored', 'This users avatar has been successfully restored.');
      }).catch(function (error) {
        return _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_2__["default"].record(error);
      });
    }
  },
  computed: {
    title: function title() {
      if (this.user === null) {
        return 'Deactivate / User';
      }

      if (this.user.status === 'active') {
        return 'Deactivate ' + this.user.name.forename + ' ' + this.user.name.surname;
      } else if (this.user.status === 'deactivated') {
        return 'Delete / Restore ' + this.user.name.forename + ' ' + this.user.name.surname;
      }
    }
  },
  mounted: function mounted() {
    this.loadUser();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/pages/DeleteUser.vue?vue&type=template&id=322d88a2&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/users/pages/DeleteUser.vue?vue&type=template&id=322d88a2& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
              _vm.user
                ? _c(
                    "div",
                    [
                      _vm.user.status === "active"
                        ? _c(
                            "danger-portlet",
                            {
                              attrs: {
                                title: "Deactivate User",
                                icon: "flaticon-warning-2",
                                dangerous: true
                              }
                            },
                            [
                              _c(
                                "horizontal-form",
                                { on: { submit: _vm.deactivateUser } },
                                [
                                  _c("form-column", [
                                    _c("p", [
                                      _vm._v(
                                        "Deactivating a user will allow them to remain on the system for historical purposes, but will not allow them to log in or perform any actions. They will also be hidden by default on search lists."
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _vm._v(
                                        "Users can be restored at a later date if they are deactivated. Deactivating a user is a prerequisite of being able to delete a user."
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _vm._v(
                                        "If you are sure you want to deactivate this user, click the confirmation button below."
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "form-actions",
                                    { attrs: { offset: false } },
                                    [
                                      _c(
                                        "danger-button",
                                        {
                                          attrs: {
                                            actioning:
                                              _vm.deactivateForm.isSubmitting
                                          }
                                        },
                                        [_vm._v("Deactivate User")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.user.status === "deactivated"
                        ? _c(
                            "brand-portlet",
                            {
                              attrs: {
                                title: "Restore User",
                                icon: "flaticon-delete-1"
                              }
                            },
                            [
                              _c(
                                "horizontal-form",
                                { on: { submit: _vm.restoreUser } },
                                [
                                  _c("form-column", [
                                    _c("p", [
                                      _vm._v(
                                        "Restoring a user will allow them to log back into the system and perform normal tasks. Any previous data they had will be restored as well."
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _vm._v(
                                        "If you are sure you want to restore the user, please click the confirmation button below."
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "form-actions",
                                    { attrs: { offset: "2" } },
                                    [
                                      _c(
                                        "brand-button",
                                        {
                                          attrs: {
                                            actioning:
                                              _vm.restoreForm.isSubmitting
                                          },
                                          on: { click: _vm.restoreUser }
                                        },
                                        [_vm._v("Restore User")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.user.status === "deactivated"
                        ? _c(
                            "brand-portlet",
                            {
                              attrs: {
                                title: "Delete User",
                                icon: "flaticon-delete-1",
                                dangerous: true
                              }
                            },
                            [
                              _c(
                                "horizontal-form",
                                { on: { submit: _vm.deleteUser } },
                                [
                                  _c("form-column", [
                                    _c("p", [
                                      _vm._v(
                                        "Deleting a user will remove all their data from the Deviate application, except any payment details. They will no longer be able to access the system, and will need a new account creating."
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _vm._v(
                                        "This action is irreversible. Once deleted, they cannot be restored. If you are absolutely sure you want to "
                                      ),
                                      _c("strong", [_vm._v("delete")]),
                                      _vm._v(
                                        " this user, please click the confirmation button below."
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "form-actions",
                                    { attrs: { offset: "2" } },
                                    [
                                      _c(
                                        "danger-button",
                                        {
                                          attrs: {
                                            actioning:
                                              _vm.deleteForm.isSubmitting
                                          },
                                          on: { click: _vm.deleteUser }
                                        },
                                        [_vm._v("Permanently Delete User")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                : _c("large-spinner")
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

/***/ "./resources/frontend/applications/users/pages/DeleteUser.vue":
/*!********************************************************************!*\
  !*** ./resources/frontend/applications/users/pages/DeleteUser.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeleteUser_vue_vue_type_template_id_322d88a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteUser.vue?vue&type=template&id=322d88a2& */ "./resources/frontend/applications/users/pages/DeleteUser.vue?vue&type=template&id=322d88a2&");
/* harmony import */ var _DeleteUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteUser.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/users/pages/DeleteUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeleteUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeleteUser_vue_vue_type_template_id_322d88a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeleteUser_vue_vue_type_template_id_322d88a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/users/pages/DeleteUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/users/pages/DeleteUser.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/frontend/applications/users/pages/DeleteUser.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/pages/DeleteUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/users/pages/DeleteUser.vue?vue&type=template&id=322d88a2&":
/*!***************************************************************************************************!*\
  !*** ./resources/frontend/applications/users/pages/DeleteUser.vue?vue&type=template&id=322d88a2& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteUser_vue_vue_type_template_id_322d88a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteUser.vue?vue&type=template&id=322d88a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/pages/DeleteUser.vue?vue&type=template&id=322d88a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteUser_vue_vue_type_template_id_322d88a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteUser_vue_vue_type_template_id_322d88a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);