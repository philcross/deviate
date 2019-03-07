(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/pages/EditAvatar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/users/pages/EditAvatar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applications_users_components_ProfileOverview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @applications/users/components/ProfileOverview */ "./resources/frontend/applications/users/components/ProfileOverview.vue");
/* harmony import */ var _modules_forms_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/forms/Form */ "./resources/frontend/modules/forms/Form.js");
/* harmony import */ var _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/errors/ErrorBus */ "./resources/frontend/modules/errors/ErrorBus.js");
/* harmony import */ var _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/alerts/Toast */ "./resources/frontend/modules/alerts/Toast.js");
/* harmony import */ var _components_forms_layouts_FormRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/forms/layouts/FormRow */ "./resources/frontend/components/forms/layouts/FormRow.vue");
/* harmony import */ var _components_forms_layouts_FormColumn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/forms/layouts/FormColumn */ "./resources/frontend/components/forms/layouts/FormColumn.vue");
/* harmony import */ var _components_forms_HorizontalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/forms/HorizontalForm */ "./resources/frontend/components/forms/HorizontalForm.vue");
/* harmony import */ var _components_portlets_standard_BrandPortlet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/portlets/standard/BrandPortlet */ "./resources/frontend/components/portlets/standard/BrandPortlet.vue");
/* harmony import */ var _components_buttons_submit_BrandButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/buttons/submit/BrandButton */ "./resources/frontend/components/buttons/submit/BrandButton.vue");
/* harmony import */ var _components_portlets_footers_FormActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/portlets/footers/FormActions */ "./resources/frontend/components/portlets/footers/FormActions.vue");
/* harmony import */ var _components_buttons_basic_DangerButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/buttons/basic/DangerButton */ "./resources/frontend/components/buttons/basic/DangerButton.vue");
/* harmony import */ var _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/layout/header/FeatureHeader */ "./resources/frontend/components/layout/header/FeatureHeader.vue");
/* harmony import */ var _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/layout/header/ContextMenu */ "./resources/frontend/components/layout/header/ContextMenu.vue");
/* harmony import */ var _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/layout/header/ContextMenuItem */ "./resources/frontend/components/layout/header/ContextMenuItem.vue");
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
  name: 'edit-avatar',
  components: {
    DangerButton: _components_buttons_basic_DangerButton__WEBPACK_IMPORTED_MODULE_10__["default"],
    FormColumn: _components_forms_layouts_FormColumn__WEBPACK_IMPORTED_MODULE_5__["default"],
    FormRow: _components_forms_layouts_FormRow__WEBPACK_IMPORTED_MODULE_4__["default"],
    BrandButton: _components_buttons_submit_BrandButton__WEBPACK_IMPORTED_MODULE_8__["default"],
    FormActions: _components_portlets_footers_FormActions__WEBPACK_IMPORTED_MODULE_9__["default"],
    HorizontalForm: _components_forms_HorizontalForm__WEBPACK_IMPORTED_MODULE_6__["default"],
    BrandPortlet: _components_portlets_standard_BrandPortlet__WEBPACK_IMPORTED_MODULE_7__["default"],
    ProfileOverview: _applications_users_components_ProfileOverview__WEBPACK_IMPORTED_MODULE_0__["default"],
    FeatureHeader: _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_11__["default"],
    ContextMenu: _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_12__["default"],
    ContextMenuItem: _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  props: {
    id: {
      required: true
    }
  },
  data: function data() {
    return {
      user: null,
      avatarForm: new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({
        avatar: null
      }),
      deleteAvatarForm: new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({})
    };
  },
  methods: {
    loadUser: function loadUser() {
      var _this = this;

      window.axios.get('/users/' + this.id).then(function (response) {
        _this.user = response.data.data;
      }).catch(function (error) {
        console.log(error);
      });
    },
    attachFileToForm: function attachFileToForm() {
      this.avatarForm.manualSet('avatar', this.$refs.file.files[0]);
    },
    updateAvatar: function updateAvatar() {
      var _this2 = this;

      _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_2__["default"].clear();
      this.avatarForm.upload('/users/' + this.user.id + '/avatar').then(function () {
        new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_3__["default"]().success('Details Update', "This users core details have been successfully updated.");

        _this2.$emit('user-updated');
      }).catch(function (error) {
        _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_2__["default"].record(error);
      }).then(function () {
        return document.getElementById('file').value = '';
      });
    },
    deleteAvatar: function deleteAvatar() {
      var _this3 = this;

      _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_2__["default"].clear();
      this.deleteAvatarForm.delete('/users/' + this.user.id + '/avatar').then(function (response) {
        new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_3__["default"]().success('Avatar Deleted', 'This users avatar has been successfully deleted.');

        _this3.$emit('user-updated');
      }).catch(function (error) {
        _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_2__["default"].record(error);
      });
    }
  },
  mounted: function mounted() {
    this.loadUser();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/buttons/basic/DangerButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/buttons/basic/DangerButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'danger-button',
  props: {
    actioning: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass: function buttonClass() {
      return {
        'm-loader m-loader--light m-loader--right': this.actioning
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/forms/layouts/FormColumn.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/forms/layouts/FormColumn.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  name: 'form-column',
  props: {
    width: {
      required: false,
      type: Number,
      default: 12
    }
  },
  computed: {
    columnWidth: function columnWidth() {
      return 'col-md-' + this.width;
    }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/pages/EditAvatar.vue?vue&type=template&id=91bf5dc8&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/users/pages/EditAvatar.vue?vue&type=template&id=91bf5dc8& ***!
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
        { attrs: { title: "Edit Avatar" } },
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
                  _c(
                    "brand-portlet",
                    {
                      attrs: {
                        title: "Manage Avatar",
                        icon: "flaticon-confetti"
                      }
                    },
                    [
                      _c(
                        "horizontal-form",
                        { on: { submit: _vm.updateAvatar } },
                        [
                          _c(
                            "form-row",
                            {
                              attrs: {
                                form: _vm.avatarForm,
                                name: "avatar",
                                label: "Avatar",
                                columns: [2, 7]
                              }
                            },
                            [
                              _c("input", {
                                ref: "file",
                                staticClass:
                                  "form-control m-input m-input--air",
                                attrs: {
                                  type: "file",
                                  name: "avatar",
                                  id: "file"
                                },
                                on: {
                                  change: function($event) {
                                    _vm.attachFileToForm()
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "form-actions",
                            { attrs: { offset: "2" } },
                            [
                              _c(
                                "brand-button",
                                {
                                  attrs: {
                                    actioning: _vm.avatarForm.isSubmitting
                                  },
                                  on: { click: _vm.updateAvatar }
                                },
                                [_vm._v("Update Avatar")]
                              )
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
                    "brand-portlet",
                    {
                      attrs: {
                        title: "Delete Avatar",
                        icon: "flaticon-delete-1",
                        dangerous: true
                      }
                    },
                    [
                      _c(
                        "horizontal-form",
                        { on: { submit: _vm.deleteAvatar } },
                        [
                          _c("form-column", { attrs: { width: "7" } }, [
                            _vm._v(
                              "\n                                This action will permanently delete this users avatar from the system. Deleted avatars cannot be recovered. If you are sure you want to perform this action, click the delete button below.\n                            "
                            )
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
                                    actioning: _vm.deleteAvatarForm.isSubmitting
                                  },
                                  on: { click: _vm.deleteAvatar }
                                },
                                [_vm._v("Delete Avatar")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/buttons/basic/DangerButton.vue?vue&type=template&id=065f2ef8&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/buttons/basic/DangerButton.vue?vue&type=template&id=065f2ef8& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    "button",
    {
      staticClass: "btn btn-danger",
      class: _vm.buttonClass,
      attrs: { type: "button", disabled: _vm.actioning },
      on: {
        click: function($event) {
          _vm.$emit("click")
        }
      }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/forms/layouts/FormColumn.vue?vue&type=template&id=0e5fd4d8&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/forms/layouts/FormColumn.vue?vue&type=template&id=0e5fd4d8& ***!
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
  return _c("div", { staticClass: "form-group m-form__group row" }, [
    _c("div", { class: _vm.columnWidth }, [_vm._t("default")], 2)
  ])
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

/***/ "./resources/frontend/applications/users/pages/EditAvatar.vue":
/*!********************************************************************!*\
  !*** ./resources/frontend/applications/users/pages/EditAvatar.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditAvatar_vue_vue_type_template_id_91bf5dc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditAvatar.vue?vue&type=template&id=91bf5dc8& */ "./resources/frontend/applications/users/pages/EditAvatar.vue?vue&type=template&id=91bf5dc8&");
/* harmony import */ var _EditAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditAvatar.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/users/pages/EditAvatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditAvatar_vue_vue_type_template_id_91bf5dc8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditAvatar_vue_vue_type_template_id_91bf5dc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/users/pages/EditAvatar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/users/pages/EditAvatar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/frontend/applications/users/pages/EditAvatar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditAvatar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/pages/EditAvatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/users/pages/EditAvatar.vue?vue&type=template&id=91bf5dc8&":
/*!***************************************************************************************************!*\
  !*** ./resources/frontend/applications/users/pages/EditAvatar.vue?vue&type=template&id=91bf5dc8& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatar_vue_vue_type_template_id_91bf5dc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditAvatar.vue?vue&type=template&id=91bf5dc8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/pages/EditAvatar.vue?vue&type=template&id=91bf5dc8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatar_vue_vue_type_template_id_91bf5dc8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatar_vue_vue_type_template_id_91bf5dc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/components/buttons/basic/DangerButton.vue":
/*!**********************************************************************!*\
  !*** ./resources/frontend/components/buttons/basic/DangerButton.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DangerButton_vue_vue_type_template_id_065f2ef8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DangerButton.vue?vue&type=template&id=065f2ef8& */ "./resources/frontend/components/buttons/basic/DangerButton.vue?vue&type=template&id=065f2ef8&");
/* harmony import */ var _DangerButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DangerButton.vue?vue&type=script&lang=js& */ "./resources/frontend/components/buttons/basic/DangerButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DangerButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DangerButton_vue_vue_type_template_id_065f2ef8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DangerButton_vue_vue_type_template_id_065f2ef8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/components/buttons/basic/DangerButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/components/buttons/basic/DangerButton.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/frontend/components/buttons/basic/DangerButton.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DangerButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/buttons/basic/DangerButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/components/buttons/basic/DangerButton.vue?vue&type=template&id=065f2ef8&":
/*!*****************************************************************************************************!*\
  !*** ./resources/frontend/components/buttons/basic/DangerButton.vue?vue&type=template&id=065f2ef8& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerButton_vue_vue_type_template_id_065f2ef8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DangerButton.vue?vue&type=template&id=065f2ef8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/buttons/basic/DangerButton.vue?vue&type=template&id=065f2ef8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerButton_vue_vue_type_template_id_065f2ef8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerButton_vue_vue_type_template_id_065f2ef8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/components/forms/layouts/FormColumn.vue":
/*!********************************************************************!*\
  !*** ./resources/frontend/components/forms/layouts/FormColumn.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormColumn_vue_vue_type_template_id_0e5fd4d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormColumn.vue?vue&type=template&id=0e5fd4d8& */ "./resources/frontend/components/forms/layouts/FormColumn.vue?vue&type=template&id=0e5fd4d8&");
/* harmony import */ var _FormColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormColumn.vue?vue&type=script&lang=js& */ "./resources/frontend/components/forms/layouts/FormColumn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormColumn_vue_vue_type_template_id_0e5fd4d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormColumn_vue_vue_type_template_id_0e5fd4d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/components/forms/layouts/FormColumn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/components/forms/layouts/FormColumn.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/frontend/components/forms/layouts/FormColumn.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormColumn.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/forms/layouts/FormColumn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/components/forms/layouts/FormColumn.vue?vue&type=template&id=0e5fd4d8&":
/*!***************************************************************************************************!*\
  !*** ./resources/frontend/components/forms/layouts/FormColumn.vue?vue&type=template&id=0e5fd4d8& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormColumn_vue_vue_type_template_id_0e5fd4d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormColumn.vue?vue&type=template&id=0e5fd4d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/forms/layouts/FormColumn.vue?vue&type=template&id=0e5fd4d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormColumn_vue_vue_type_template_id_0e5fd4d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormColumn_vue_vue_type_template_id_0e5fd4d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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