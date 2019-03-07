(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/components/CoreDetailsForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/users/components/CoreDetailsForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/spinners/LargeSpinner */ "./resources/frontend/components/spinners/LargeSpinner.vue");
/* harmony import */ var _components_portlets_footers_FormActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/portlets/footers/FormActions */ "./resources/frontend/components/portlets/footers/FormActions.vue");
/* harmony import */ var _components_buttons_submit_BrandButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/buttons/submit/BrandButton */ "./resources/frontend/components/buttons/submit/BrandButton.vue");
/* harmony import */ var _components_buttons_basic_SecondaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/buttons/basic/SecondaryButton */ "./resources/frontend/components/buttons/basic/SecondaryButton.vue");
/* harmony import */ var _components_forms_layouts_FormRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/forms/layouts/FormRow */ "./resources/frontend/components/forms/layouts/FormRow.vue");
/* harmony import */ var _components_forms_HorizontalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/forms/HorizontalForm */ "./resources/frontend/components/forms/HorizontalForm.vue");
/* harmony import */ var _modules_forms_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/forms/Form */ "./resources/frontend/modules/forms/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'core-details-form',
  components: {
    HorizontalForm: _components_forms_HorizontalForm__WEBPACK_IMPORTED_MODULE_5__["default"],
    FormRow: _components_forms_layouts_FormRow__WEBPACK_IMPORTED_MODULE_4__["default"],
    SecondaryButton: _components_buttons_basic_SecondaryButton__WEBPACK_IMPORTED_MODULE_3__["default"],
    BrandButton: _components_buttons_submit_BrandButton__WEBPACK_IMPORTED_MODULE_2__["default"],
    FormActions: _components_portlets_footers_FormActions__WEBPACK_IMPORTED_MODULE_1__["default"],
    LargeSpinner: _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    form: {
      required: true,
      type: _modules_forms_Form__WEBPACK_IMPORTED_MODULE_6__["default"]
    }
  }
});

/***/ }),

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
/* harmony import */ var _modules_forms_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/forms/Form */ "./resources/frontend/modules/forms/Form.js");
/* harmony import */ var _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/alerts/Toast */ "./resources/frontend/modules/alerts/Toast.js");
//
//
//
//
//
//
//
//
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
    CoreDetailsForm: _applications_users_components_CoreDetailsForm__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProfileOverview: _applications_users_components_ProfileOverview__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    id: {
      required: true
    }
  },
  data: function data() {
    return {
      user: null,
      updateForm: new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_2__["default"]({
        isLoaded: false,
        forename: '',
        surname: '',
        email: '',
        password: '',
        password_confirmation: ''
      })
    };
  },
  methods: {
    loadUser: function loadUser() {
      var _this = this;

      window.axios.get('/users/' + this.id).then(function (response) {
        _this.user = response.data.data;
        _this.updateForm = new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_2__["default"]({
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
        return new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_3__["default"]().success('Core details have been successfully updated.');
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/buttons/submit/BrandButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/buttons/submit/BrandButton.vue?vue&type=script&lang=js& ***!
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
  name: 'brand-button',
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/components/CoreDetailsForm.vue?vue&type=template&id=55b32a3c&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/users/components/CoreDetailsForm.vue?vue&type=template&id=55b32a3c& ***!
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
    [
      _c(
        "horizontal-form",
        {
          on: {
            submit: function($event) {
              _vm.$emit("update-user")
            }
          }
        },
        [
          _c("div", { staticClass: "form-group m-form__group row" }, [
            _c("div", { staticClass: "col-10 ml-auto" }, [
              _c("h3", { staticClass: "m-form__section" }, [
                _vm._v("1. Personal Details")
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "form-row",
            {
              attrs: {
                form: _vm.form,
                name: "forename",
                label: "Forename",
                helper: "Enter this users forename",
                columns: [2, 6]
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.forename,
                    expression: "form.forename"
                  }
                ],
                staticClass: "form-control m-input m-input--air",
                attrs: {
                  name: "forename",
                  id: "forename",
                  type: "text",
                  placeholder: "Forename"
                },
                domProps: { value: _vm.form.forename },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "forename", $event.target.value)
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
                name: "surname",
                label: "Surname",
                helper: "Enter this users surname",
                columns: [2, 6]
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.surname,
                    expression: "form.surname"
                  }
                ],
                staticClass: "form-control m-input m-input--air",
                attrs: {
                  name: "surname",
                  id: "surname",
                  type: "text",
                  placeholder: "Surname"
                },
                domProps: { value: _vm.form.surname },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "surname", $event.target.value)
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
                name: "email",
                label: "Email Address",
                helper:
                  "Enter this users email address. They will log in with this.",
                columns: [2, 6]
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.email,
                    expression: "form.email"
                  }
                ],
                staticClass: "form-control m-input m-input--air",
                attrs: {
                  name: "forename",
                  id: "email",
                  type: "email",
                  placeholder: "Email Address"
                },
                domProps: { value: _vm.form.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "email", $event.target.value)
                  }
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "m-form__seperator m-form__seperator--dashed m-form__seperator--space-2x"
          }),
          _vm._v(" "),
          _c("div", { staticClass: "form-group m-form__group row" }, [
            _c("div", { staticClass: "col-10 ml-auto" }, [
              _c("h3", { staticClass: "m-form__section" }, [
                _vm._v("2. Password")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "If you would like to update the users password, complete this section. If you do not want to change this users password, leave this section empty."
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "form-row",
            {
              attrs: {
                form: _vm.form,
                name: "password",
                label: "Password",
                helper: "Enter a new password for this user",
                columns: [2, 6]
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.password,
                    expression: "form.password"
                  }
                ],
                staticClass: "form-control m-input m-input--air",
                attrs: {
                  name: "password",
                  id: "password",
                  type: "password",
                  placeholder: "New Password"
                },
                domProps: { value: _vm.form.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "password", $event.target.value)
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
                name: "password_confirmation",
                label: "Confirm new password",
                helper: "Confirm the new password for this user",
                columns: [2, 6]
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.password_confirmation,
                    expression: "form.password_confirmation"
                  }
                ],
                staticClass: "form-control m-input m-input--air",
                attrs: {
                  name: "password_confirmation",
                  id: "password_confirmation",
                  type: "password",
                  placeholder: "Confirm New Password"
                },
                domProps: { value: _vm.form.password_confirmation },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.form,
                      "password_confirmation",
                      $event.target.value
                    )
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
                { attrs: { actioning: _vm.form.isSubmitting } },
                [_vm._v("Save changes")]
              ),
              _vm._v(" "),
              _c(
                "secondary-button",
                [
                  _c("router-link", { attrs: { to: "/users" } }, [
                    _vm._v("Cancel")
                  ])
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
}
var staticRenderFns = []
render._withStripped = true



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
  return _c("div", { staticClass: "m-content" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-xl-3 col-lg-4" },
        [_c("profile-overview", { attrs: { user: _vm.user } })],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-9 col-lg-8" }, [
        _c("div", { staticClass: "m-portlet" }, [
          _c(
            "div",
            { staticClass: "m-portlet__body" },
            [
              _c("core-details-form", {
                attrs: { form: _vm.updateForm },
                on: { "update-user": _vm.updateUser }
              })
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/buttons/submit/BrandButton.vue?vue&type=template&id=6429b138&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/buttons/submit/BrandButton.vue?vue&type=template&id=6429b138& ***!
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
      staticClass: "btn btn-brand",
      class: _vm.buttonClass,
      attrs: { type: "submit", disabled: _vm.actioning },
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

/***/ "./resources/frontend/applications/users/components/CoreDetailsForm.vue":
/*!******************************************************************************!*\
  !*** ./resources/frontend/applications/users/components/CoreDetailsForm.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CoreDetailsForm_vue_vue_type_template_id_55b32a3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoreDetailsForm.vue?vue&type=template&id=55b32a3c& */ "./resources/frontend/applications/users/components/CoreDetailsForm.vue?vue&type=template&id=55b32a3c&");
/* harmony import */ var _CoreDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoreDetailsForm.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/users/components/CoreDetailsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CoreDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CoreDetailsForm_vue_vue_type_template_id_55b32a3c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CoreDetailsForm_vue_vue_type_template_id_55b32a3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/users/components/CoreDetailsForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/users/components/CoreDetailsForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/frontend/applications/users/components/CoreDetailsForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CoreDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CoreDetailsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/components/CoreDetailsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CoreDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/users/components/CoreDetailsForm.vue?vue&type=template&id=55b32a3c&":
/*!*************************************************************************************************************!*\
  !*** ./resources/frontend/applications/users/components/CoreDetailsForm.vue?vue&type=template&id=55b32a3c& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoreDetailsForm_vue_vue_type_template_id_55b32a3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CoreDetailsForm.vue?vue&type=template&id=55b32a3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/users/components/CoreDetailsForm.vue?vue&type=template&id=55b32a3c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoreDetailsForm_vue_vue_type_template_id_55b32a3c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoreDetailsForm_vue_vue_type_template_id_55b32a3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/frontend/components/buttons/submit/BrandButton.vue":
/*!**********************************************************************!*\
  !*** ./resources/frontend/components/buttons/submit/BrandButton.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BrandButton_vue_vue_type_template_id_6429b138___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrandButton.vue?vue&type=template&id=6429b138& */ "./resources/frontend/components/buttons/submit/BrandButton.vue?vue&type=template&id=6429b138&");
/* harmony import */ var _BrandButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrandButton.vue?vue&type=script&lang=js& */ "./resources/frontend/components/buttons/submit/BrandButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BrandButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BrandButton_vue_vue_type_template_id_6429b138___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BrandButton_vue_vue_type_template_id_6429b138___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/components/buttons/submit/BrandButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/components/buttons/submit/BrandButton.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/frontend/components/buttons/submit/BrandButton.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BrandButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/buttons/submit/BrandButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/components/buttons/submit/BrandButton.vue?vue&type=template&id=6429b138&":
/*!*****************************************************************************************************!*\
  !*** ./resources/frontend/components/buttons/submit/BrandButton.vue?vue&type=template&id=6429b138& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandButton_vue_vue_type_template_id_6429b138___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BrandButton.vue?vue&type=template&id=6429b138& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/buttons/submit/BrandButton.vue?vue&type=template&id=6429b138&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandButton_vue_vue_type_template_id_6429b138___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandButton_vue_vue_type_template_id_6429b138___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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