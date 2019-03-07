(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/components/UsergroupForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/users/components/UsergroupForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_portlets_standard_BrandPortlet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/portlets/standard/BrandPortlet */ "./resources/frontend/components/portlets/standard/BrandPortlet.vue");
/* harmony import */ var _components_forms_HorizontalForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/forms/HorizontalForm */ "./resources/frontend/components/forms/HorizontalForm.vue");
/* harmony import */ var _components_lists_basic_ActionableDescriptiveList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/lists/basic/ActionableDescriptiveList */ "./resources/frontend/components/lists/basic/ActionableDescriptiveList.vue");
/* harmony import */ var _components_lists_basic_ActionableItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/lists/basic/ActionableItem */ "./resources/frontend/components/lists/basic/ActionableItem.vue");
/* harmony import */ var _components_forms_elements_ToggleSwitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/forms/elements/ToggleSwitch */ "./resources/frontend/components/forms/elements/ToggleSwitch.vue");
/* harmony import */ var _components_portlets_footers_FormActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/portlets/footers/FormActions */ "./resources/frontend/components/portlets/footers/FormActions.vue");
/* harmony import */ var _components_buttons_submit_BrandButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/buttons/submit/BrandButton */ "./resources/frontend/components/buttons/submit/BrandButton.vue");
/* harmony import */ var _components_buttons_basic_SecondaryButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/buttons/basic/SecondaryButton */ "./resources/frontend/components/buttons/basic/SecondaryButton.vue");
/* harmony import */ var _modules_forms_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/forms/Form */ "./resources/frontend/modules/forms/Form.js");
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
  name: 'usergroup-form',
  components: {
    BrandPortlet: _components_portlets_standard_BrandPortlet__WEBPACK_IMPORTED_MODULE_0__["default"],
    HorizontalForm: _components_forms_HorizontalForm__WEBPACK_IMPORTED_MODULE_1__["default"],
    ActionableDescriptiveList: _components_lists_basic_ActionableDescriptiveList__WEBPACK_IMPORTED_MODULE_2__["default"],
    ActionableItem: _components_lists_basic_ActionableItem__WEBPACK_IMPORTED_MODULE_3__["default"],
    ToggleSwitch: _components_forms_elements_ToggleSwitch__WEBPACK_IMPORTED_MODULE_4__["default"],
    FormActions: _components_portlets_footers_FormActions__WEBPACK_IMPORTED_MODULE_5__["default"],
    BrandButton: _components_buttons_submit_BrandButton__WEBPACK_IMPORTED_MODULE_6__["default"],
    SecondaryButton: _components_buttons_basic_SecondaryButton__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    form: {
      required: true,
      type: _modules_forms_Form__WEBPACK_IMPORTED_MODULE_8__["default"]
    },
    usergroups: {
      required: false,
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    isMemberOf: function isMemberOf(usergroup) {
      return this.form.usergroups.indexOf(usergroup.id) > -1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/pages/EditUsergroups.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/users/pages/EditUsergroups.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _applications_users_components_ProfileOverview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @applications/users/components/ProfileOverview */ "./resources/frontend/applications/users/components/ProfileOverview.vue");
/* harmony import */ var _applications_users_components_UsergroupForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @applications/users/components/UsergroupForm */ "./resources/frontend/applications/users/components/UsergroupForm.vue");
/* harmony import */ var _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/layout/header/FeatureHeader */ "./resources/frontend/components/layout/header/FeatureHeader.vue");
/* harmony import */ var _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/layout/header/ContextMenu */ "./resources/frontend/components/layout/header/ContextMenu.vue");
/* harmony import */ var _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/layout/header/ContextMenuItem */ "./resources/frontend/components/layout/header/ContextMenuItem.vue");
/* harmony import */ var _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/errors/ErrorBus */ "./resources/frontend/modules/errors/ErrorBus.js");
/* harmony import */ var _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/alerts/Toast */ "./resources/frontend/modules/alerts/Toast.js");
/* harmony import */ var _modules_forms_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/forms/Form */ "./resources/frontend/modules/forms/Form.js");
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
  name: "update-usergroups",
  components: {
    UsergroupForm: _applications_users_components_UsergroupForm__WEBPACK_IMPORTED_MODULE_2__["default"],
    ProfileOverview: _applications_users_components_ProfileOverview__WEBPACK_IMPORTED_MODULE_1__["default"],
    FeatureHeader: _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_3__["default"],
    ContextMenuItem: _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_5__["default"],
    ContextMenu: _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    id: {
      required: true
    }
  },
  data: function data() {
    return {
      usergroups: [],
      user: null,
      form: new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_8__["default"]({
        usergroups: []
      })
    };
  },
  computed: {
    title: function title() {
      return this.user === null ? 'Edit Usergroups' : 'Edit Usergroups for ' + this.user.name.forename + ' ' + this.user.name.surname;
    }
  },
  methods: {
    loadUser: function loadUser() {
      var _this = this;

      window.axios.get('/users/' + this.id + '/usergroups').then(function (response) {
        _this.form.usergroups = response.data.data.map(function (usergroup) {
          return usergroup.id;
        });
      }).catch(function (error) {
        return console.log(error);
      });
      window.axios.get('/users/' + this.id).then(function (response) {
        _this.user = response.data.data;
      }).catch(function (error) {
        console.log(error);
      });
    },
    loadUsergroups: function loadUsergroups() {
      var _this2 = this;

      window.axios.get('/usergroups').then(function (response) {
        _this2.usergroups = response.data.data;
      }).catch(function (error) {
        return console.log(error);
      });
    },
    updateUsergroups: function updateUsergroups() {
      this.form.put('/users/' + this.user.id + '/usergroups').then(function () {
        return new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_7__["default"]().success('Usergroups Updated', "This usergroups for this user have been updated.");
      }).catch(function (error) {
        return console.log(error);
      });
    },
    toggleUsergroup: function toggleUsergroup(payload) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.indexOf(this.form.usergroups, payload.usergroup.id) > -1) {
        this.form.usergroups = this.form.usergroups.filter(function (obj) {
          return obj !== payload.usergroup.id;
        });
      } else {
        this.form.usergroups.push(payload.usergroup.id);
      }
    }
  },
  created: function created() {
    this.loadUser();
    this.loadUsergroups();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/standard/BrandPortlet.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/portlets/standard/BrandPortlet.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_portlets_standard_PortletHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/portlets/standard/PortletHeader */ "./resources/frontend/components/portlets/standard/PortletHeader.vue");
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
  name: "brand-portlet",
  props: {
    title: {
      required: true,
      type: String
    },
    icon: {
      required: false,
      default: null
    }
  },
  components: {
    PortletHeader: _components_portlets_standard_PortletHeader__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/standard/PortletHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/portlets/standard/PortletHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "portlet-header",
  props: {
    title: {
      required: true,
      type: String
    },
    icon: {
      required: false,
      default: null
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/components/UsergroupForm.vue?vue&type=template&id=761e646d&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/users/components/UsergroupForm.vue?vue&type=template&id=761e646d& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    "brand-portlet",
    { attrs: { title: "Edit Usergroups", icon: "flaticon-users" } },
    [
      _c(
        "horizontal-form",
        {
          on: {
            submit: function($event) {
              _vm.$emit("update-usergroups")
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "col-md-12" },
            [
              _c(
                "actionable-descriptive-list",
                _vm._l(_vm.usergroups, function(usergroup) {
                  return _c(
                    "actionable-item",
                    {
                      key: usergroup.id,
                      attrs: {
                        title: usergroup.name,
                        description: usergroup.description
                      }
                    },
                    [
                      _c("toggle-switch", {
                        attrs: {
                          "checked-value": usergroup.id,
                          checked: _vm.isMemberOf(usergroup)
                        },
                        on: {
                          change: function($event) {
                            _vm.$emit("toggle-usergroup", {
                              usergroup: usergroup
                            })
                          }
                        }
                      })
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "form-actions",
            [
              _c(
                "brand-button",
                { attrs: { actioning: _vm.form.isSubmitting } },
                [_vm._v("Update Usergroups")]
              ),
              _vm._v(" "),
              _c(
                "secondary-button",
                {
                  on: {
                    click: function($event) {
                      _vm.window.location.href = "/users"
                    }
                  }
                },
                [_vm._v("Cancel")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/pages/EditUsergroups.vue?vue&type=template&id=4a34d0a2&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/users/pages/EditUsergroups.vue?vue&type=template&id=4a34d0a2& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
              _c("usergroup-form", {
                attrs: { form: _vm.form, usergroups: _vm.usergroups },
                on: {
                  "toggle-usergroup": _vm.toggleUsergroup,
                  "update-usergroups": function($event) {
                    _vm.updateUsergroups()
                  }
                }
              })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/standard/BrandPortlet.vue?vue&type=template&id=0aa7b563&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/portlets/standard/BrandPortlet.vue?vue&type=template&id=0aa7b563& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "m-portlet m-portlet--brand m-portlet--head-solid-bg" },
    [
      _c("portlet-header", { attrs: { title: _vm.title, icon: _vm.icon } }),
      _vm._v(" "),
      _c("div", { staticClass: "m-portlet__body" }, [_vm._t("default")], 2)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/standard/PortletHeader.vue?vue&type=template&id=6ba5a932&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/portlets/standard/PortletHeader.vue?vue&type=template&id=6ba5a932& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "m-portlet__head" }, [
    _c("div", { staticClass: "m-portlet__head-caption" }, [
      _c("div", { staticClass: "m-portlet__head-title" }, [
        _vm.icon
          ? _c("span", { staticClass: "m-portlet__head-icon" }, [
              _c("i", { class: _vm.icon })
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("h3", { staticClass: "m-portlet__head-text" }, [
          _vm._v(_vm._s(_vm.title))
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/frontend/applications/users/components/UsergroupForm.vue":
/*!****************************************************************************!*\
  !*** ./resources/frontend/applications/users/components/UsergroupForm.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsergroupForm_vue_vue_type_template_id_761e646d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsergroupForm.vue?vue&type=template&id=761e646d& */ "./resources/frontend/applications/users/components/UsergroupForm.vue?vue&type=template&id=761e646d&");
/* harmony import */ var _UsergroupForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsergroupForm.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/users/components/UsergroupForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsergroupForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsergroupForm_vue_vue_type_template_id_761e646d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsergroupForm_vue_vue_type_template_id_761e646d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/users/components/UsergroupForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/users/components/UsergroupForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/frontend/applications/users/components/UsergroupForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UsergroupForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsergroupForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/components/UsergroupForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UsergroupForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/users/components/UsergroupForm.vue?vue&type=template&id=761e646d&":
/*!***********************************************************************************************************!*\
  !*** ./resources/frontend/applications/users/components/UsergroupForm.vue?vue&type=template&id=761e646d& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsergroupForm_vue_vue_type_template_id_761e646d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsergroupForm.vue?vue&type=template&id=761e646d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/components/UsergroupForm.vue?vue&type=template&id=761e646d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsergroupForm_vue_vue_type_template_id_761e646d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsergroupForm_vue_vue_type_template_id_761e646d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/applications/users/pages/EditUsergroups.vue":
/*!************************************************************************!*\
  !*** ./resources/frontend/applications/users/pages/EditUsergroups.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditUsergroups_vue_vue_type_template_id_4a34d0a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditUsergroups.vue?vue&type=template&id=4a34d0a2& */ "./resources/frontend/applications/users/pages/EditUsergroups.vue?vue&type=template&id=4a34d0a2&");
/* harmony import */ var _EditUsergroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditUsergroups.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/users/pages/EditUsergroups.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditUsergroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditUsergroups_vue_vue_type_template_id_4a34d0a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditUsergroups_vue_vue_type_template_id_4a34d0a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/users/pages/EditUsergroups.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/users/pages/EditUsergroups.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/frontend/applications/users/pages/EditUsergroups.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUsergroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditUsergroups.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/pages/EditUsergroups.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUsergroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/users/pages/EditUsergroups.vue?vue&type=template&id=4a34d0a2&":
/*!*******************************************************************************************************!*\
  !*** ./resources/frontend/applications/users/pages/EditUsergroups.vue?vue&type=template&id=4a34d0a2& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUsergroups_vue_vue_type_template_id_4a34d0a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditUsergroups.vue?vue&type=template&id=4a34d0a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/pages/EditUsergroups.vue?vue&type=template&id=4a34d0a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUsergroups_vue_vue_type_template_id_4a34d0a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUsergroups_vue_vue_type_template_id_4a34d0a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/components/portlets/standard/BrandPortlet.vue":
/*!**************************************************************************!*\
  !*** ./resources/frontend/components/portlets/standard/BrandPortlet.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BrandPortlet_vue_vue_type_template_id_0aa7b563___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrandPortlet.vue?vue&type=template&id=0aa7b563& */ "./resources/frontend/components/portlets/standard/BrandPortlet.vue?vue&type=template&id=0aa7b563&");
/* harmony import */ var _BrandPortlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrandPortlet.vue?vue&type=script&lang=js& */ "./resources/frontend/components/portlets/standard/BrandPortlet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BrandPortlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BrandPortlet_vue_vue_type_template_id_0aa7b563___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BrandPortlet_vue_vue_type_template_id_0aa7b563___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/components/portlets/standard/BrandPortlet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/components/portlets/standard/BrandPortlet.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/frontend/components/portlets/standard/BrandPortlet.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandPortlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BrandPortlet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/standard/BrandPortlet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandPortlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/components/portlets/standard/BrandPortlet.vue?vue&type=template&id=0aa7b563&":
/*!*********************************************************************************************************!*\
  !*** ./resources/frontend/components/portlets/standard/BrandPortlet.vue?vue&type=template&id=0aa7b563& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandPortlet_vue_vue_type_template_id_0aa7b563___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BrandPortlet.vue?vue&type=template&id=0aa7b563& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/standard/BrandPortlet.vue?vue&type=template&id=0aa7b563&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandPortlet_vue_vue_type_template_id_0aa7b563___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandPortlet_vue_vue_type_template_id_0aa7b563___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/components/portlets/standard/PortletHeader.vue":
/*!***************************************************************************!*\
  !*** ./resources/frontend/components/portlets/standard/PortletHeader.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PortletHeader_vue_vue_type_template_id_6ba5a932___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PortletHeader.vue?vue&type=template&id=6ba5a932& */ "./resources/frontend/components/portlets/standard/PortletHeader.vue?vue&type=template&id=6ba5a932&");
/* harmony import */ var _PortletHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PortletHeader.vue?vue&type=script&lang=js& */ "./resources/frontend/components/portlets/standard/PortletHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PortletHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PortletHeader_vue_vue_type_template_id_6ba5a932___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PortletHeader_vue_vue_type_template_id_6ba5a932___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/components/portlets/standard/PortletHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/components/portlets/standard/PortletHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/frontend/components/portlets/standard/PortletHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PortletHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PortletHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/standard/PortletHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PortletHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/components/portlets/standard/PortletHeader.vue?vue&type=template&id=6ba5a932&":
/*!**********************************************************************************************************!*\
  !*** ./resources/frontend/components/portlets/standard/PortletHeader.vue?vue&type=template&id=6ba5a932& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PortletHeader_vue_vue_type_template_id_6ba5a932___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PortletHeader.vue?vue&type=template&id=6ba5a932& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/standard/PortletHeader.vue?vue&type=template&id=6ba5a932&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PortletHeader_vue_vue_type_template_id_6ba5a932___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PortletHeader_vue_vue_type_template_id_6ba5a932___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);