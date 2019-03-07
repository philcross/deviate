(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/ListCollections.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/pages/ListCollections.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/layout/header/FeatureHeader */ "./resources/frontend/components/layout/header/FeatureHeader.vue");
/* harmony import */ var _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layout/header/ContextMenu */ "./resources/frontend/components/layout/header/ContextMenu.vue");
/* harmony import */ var _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/layout/header/ContextMenuItem */ "./resources/frontend/components/layout/header/ContextMenuItem.vue");
/* harmony import */ var _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/errors/ErrorBus */ "./resources/frontend/modules/errors/ErrorBus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'search',
  data: function data() {
    return {
      usergroups: null
    };
  },
  components: {
    FeatureHeader: _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenu: _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_1__["default"],
    ContextMenuItem: _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    loadUsergroups: function loadUsergroups() {
      var _this = this;

      window.axios.get('/usergroups').then(function (response) {
        _this.usergroups = response.data.data;
      }).catch(function (error) {//ErrorBus.record(error.response.data);
      });
    }
  },
  mounted: function mounted() {
    this.loadUsergroups();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/layout/header/ContextMenu.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/layout/header/ContextMenu.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "context-menu",
  computed: {
    hasItems: function hasItems() {
      return !!this.$slots.default;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/layout/header/ContextMenuItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/layout/header/ContextMenuItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "context-menu-item",
  props: {
    url: {
      required: false,
      type: String,
      default: null
    },
    icon: {
      required: true,
      type: String
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/layout/header/FeatureHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/layout/header/FeatureHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
// import BootstrapAlert from "./BootstrapAlert";
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "feature-header",
  props: {
    title: {
      required: true,
      type: String
    }
  },
  components: {// BootstrapAlert
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/ListCollections.vue?vue&type=template&id=c3e2be12&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/pages/ListCollections.vue?vue&type=template&id=c3e2be12& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
        { attrs: { title: "Activity Collections" } },
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
      _vm._m(0)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "m-content" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4" }, [
          _c(
            "div",
            {
              staticClass:
                "m-portlet m-portlet--bordered-semi m-portlet--full-height  m-portlet--rounded-force"
            },
            [
              _c("div", { staticClass: "m-portlet__body" }, [
                _c("div", { staticClass: "m-widget19" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "m-widget19__pic m-portlet-fit--top m-portlet-fit--sides",
                      staticStyle: {
                        height: "286px",
                        "background-image":
                          "url('https://img2.10bestmedia.com/Images/Photos/352450/GettyImages-913753556_55_660x440.jpg')",
                        "background-size": "cover",
                        "background-repeat": "no-repeat"
                      }
                    },
                    [
                      _c(
                        "h3",
                        { staticClass: "m-widget19__title m--font-light" },
                        [
                          _vm._v(
                            "\n                                    Summer 2019 Activities Week\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "m-widget19__shadow" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "m-widget19__content",
                      staticStyle: { "margin-top": "2rem" }
                    },
                    [
                      _c("div", { staticClass: "m-widget19__body" }, [
                        _vm._v(
                          "\n                                    Short ribs cow jowl drumstick. Meatloaf bacon leberkas pig tail, drumstick andouille strip steak t-bone pork loin kielbasa frankfurter biltong jowl. Tail brisket biltong burgdoggen strip steak. Burgdoggen meatloaf leberkas, beef tri-tip pastrami turducken pork belly biltong flank ribeye. Pork loin brisket venison ham bacon. Meatball pork loin biltong, strip steak leberkas jerky capicola. Tail boudin buffalo jerky pastrami ground round, short loin spare ribs tri-tip fatback pig turducken andouille kielbasa.\n                                "
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "m-widget19__action" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn m-btn--pill btn-secondary m-btn m-btn--hover-brand m-btn--custom",
                        attrs: { type: "button" }
                      },
                      [_vm._v("View Activities")]
                    )
                  ])
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c(
            "div",
            {
              staticClass:
                "m-portlet m-portlet--bordered-semi m-portlet--full-height  m-portlet--rounded-force"
            },
            [
              _c("div", { staticClass: "m-portlet__body" }, [
                _c("div", { staticClass: "m-widget19" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "m-widget19__pic m-portlet-fit--top m-portlet-fit--sides",
                      staticStyle: {
                        height: "286px",
                        "background-image":
                          "url('https://img2.10bestmedia.com/Images/Photos/352450/GettyImages-913753556_55_660x440.jpg')",
                        "background-size": "cover",
                        "background-repeat": "no-repeat"
                      }
                    },
                    [
                      _c(
                        "h3",
                        { staticClass: "m-widget19__title m--font-light" },
                        [
                          _vm._v(
                            "\n                                    Summer 2019 Activities Week\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "m-widget19__shadow" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "m-widget19__content",
                      staticStyle: { "margin-top": "2rem" }
                    },
                    [
                      _c("div", { staticClass: "m-widget19__body" }, [
                        _vm._v(
                          "\n                                    Short ribs cow jowl drumstick. Meatloaf bacon leberkas pig tail, drumstick andouille strip steak t-bone pork loin kielbasa frankfurter biltong jowl. Tail brisket biltong burgdoggen strip steak. Burgdoggen meatloaf leberkas, beef tri-tip pastrami turducken pork belly biltong flank ribeye. Pork loin brisket venison ham bacon. Meatball pork loin biltong, strip steak leberkas jerky capicola. Tail boudin buffalo jerky pastrami ground round, short loin spare ribs tri-tip fatback pig turducken andouille kielbasa.\n                                "
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "m-widget19__action" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn m-btn--pill btn-secondary m-btn m-btn--hover-brand m-btn--custom",
                        attrs: { type: "button" }
                      },
                      [_vm._v("View Activities")]
                    )
                  ])
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c(
            "div",
            {
              staticClass:
                "m-portlet m-portlet--bordered-semi m-portlet--full-height  m-portlet--rounded-force"
            },
            [
              _c("div", { staticClass: "m-portlet__body" }, [
                _c("div", { staticClass: "m-widget19" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "m-widget19__pic m-portlet-fit--top m-portlet-fit--sides",
                      staticStyle: {
                        height: "286px",
                        "background-image":
                          "url('https://img2.10bestmedia.com/Images/Photos/352450/GettyImages-913753556_55_660x440.jpg')",
                        "background-size": "cover",
                        "background-repeat": "no-repeat"
                      }
                    },
                    [
                      _c(
                        "h3",
                        { staticClass: "m-widget19__title m--font-light" },
                        [
                          _vm._v(
                            "\n                                    Summer 2019 Activities Week\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "m-widget19__shadow" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "m-widget19__content",
                      staticStyle: { "margin-top": "2rem" }
                    },
                    [
                      _c("div", { staticClass: "m-widget19__body" }, [
                        _vm._v(
                          "\n                                    Short ribs cow jowl drumstick. Meatloaf bacon leberkas pig tail, drumstick andouille strip steak t-bone pork loin kielbasa frankfurter biltong jowl. Tail brisket biltong burgdoggen strip steak. Burgdoggen meatloaf leberkas, beef tri-tip pastrami turducken pork belly biltong flank ribeye. Pork loin brisket venison ham bacon. Meatball pork loin biltong, strip steak leberkas jerky capicola. Tail boudin buffalo jerky pastrami ground round, short loin spare ribs tri-tip fatback pig turducken andouille kielbasa.\n                                "
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "m-widget19__action" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn m-btn--pill btn-secondary m-btn m-btn--hover-brand m-btn--custom",
                        attrs: { type: "button" }
                      },
                      [_vm._v("View Activities")]
                    )
                  ])
                ])
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/layout/header/ContextMenu.vue?vue&type=template&id=3ccda9a6&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/layout/header/ContextMenu.vue?vue&type=template&id=3ccda9a6& ***!
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
  return _vm.hasItems
    ? _c("div", [
        _c(
          "div",
          {
            staticClass:
              "m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push",
            attrs: { "m-dropdown-toggle": "hover", "aria-expanded": "true" }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "m-dropdown__wrapper" }, [
              _c("span", {
                staticClass:
                  "m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"
              }),
              _vm._v(" "),
              _c("div", { staticClass: "m-dropdown__inner" }, [
                _c("div", { staticClass: "m-dropdown__body" }, [
                  _c("div", { staticClass: "m-dropdown__content" }, [
                    _c("ul", { staticClass: "m-nav" }, [_vm._t("default")], 2)
                  ])
                ])
              ])
            ])
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "m-portlet__nav-link btn btn-lg btn-brand  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill m-dropdown__toggle",
        attrs: { href: "#" }
      },
      [_c("i", { staticClass: "la la-plus" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/layout/header/ContextMenuItem.vue?vue&type=template&id=3db2f660&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/layout/header/ContextMenuItem.vue?vue&type=template&id=3db2f660& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    "li",
    { staticClass: "m-nav__item" },
    [
      _vm.url
        ? _c(
            "router-link",
            { staticClass: "m-nav__link", attrs: { to: _vm.url } },
            [
              _c("i", { staticClass: "m-nav__link-icon", class: _vm.icon }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "m-nav__link-text" },
                [_vm._t("default")],
                2
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/layout/header/FeatureHeader.vue?vue&type=template&id=411b7462&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/layout/header/FeatureHeader.vue?vue&type=template&id=411b7462& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "m-subheader " }, [
    _c(
      "div",
      { staticClass: "d-flex align-items-center" },
      [
        _c("div", { staticClass: "mr-auto" }, [
          _c("h3", { staticClass: "m-subheader__title" }, [
            _vm._v(_vm._s(_vm.title))
          ])
        ]),
        _vm._v(" "),
        _vm._t("default")
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/ListCollections.vue":
/*!******************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/ListCollections.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListCollections_vue_vue_type_template_id_c3e2be12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListCollections.vue?vue&type=template&id=c3e2be12& */ "./resources/frontend/applications/activities/collections/pages/ListCollections.vue?vue&type=template&id=c3e2be12&");
/* harmony import */ var _ListCollections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListCollections.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/collections/pages/ListCollections.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListCollections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListCollections_vue_vue_type_template_id_c3e2be12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListCollections_vue_vue_type_template_id_c3e2be12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/collections/pages/ListCollections.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/ListCollections.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/ListCollections.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCollections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListCollections.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/ListCollections.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCollections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/ListCollections.vue?vue&type=template&id=c3e2be12&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/ListCollections.vue?vue&type=template&id=c3e2be12& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCollections_vue_vue_type_template_id_c3e2be12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListCollections.vue?vue&type=template&id=c3e2be12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/ListCollections.vue?vue&type=template&id=c3e2be12&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCollections_vue_vue_type_template_id_c3e2be12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCollections_vue_vue_type_template_id_c3e2be12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/components/layout/header/ContextMenu.vue":
/*!*********************************************************************!*\
  !*** ./resources/frontend/components/layout/header/ContextMenu.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContextMenu_vue_vue_type_template_id_3ccda9a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=template&id=3ccda9a6& */ "./resources/frontend/components/layout/header/ContextMenu.vue?vue&type=template&id=3ccda9a6&");
/* harmony import */ var _ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=script&lang=js& */ "./resources/frontend/components/layout/header/ContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContextMenu_vue_vue_type_template_id_3ccda9a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContextMenu_vue_vue_type_template_id_3ccda9a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/components/layout/header/ContextMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/components/layout/header/ContextMenu.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/frontend/components/layout/header/ContextMenu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/layout/header/ContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/components/layout/header/ContextMenu.vue?vue&type=template&id=3ccda9a6&":
/*!****************************************************************************************************!*\
  !*** ./resources/frontend/components/layout/header/ContextMenu.vue?vue&type=template&id=3ccda9a6& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_3ccda9a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenu.vue?vue&type=template&id=3ccda9a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/layout/header/ContextMenu.vue?vue&type=template&id=3ccda9a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_3ccda9a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_3ccda9a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/components/layout/header/ContextMenuItem.vue":
/*!*************************************************************************!*\
  !*** ./resources/frontend/components/layout/header/ContextMenuItem.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContextMenuItem_vue_vue_type_template_id_3db2f660___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextMenuItem.vue?vue&type=template&id=3db2f660& */ "./resources/frontend/components/layout/header/ContextMenuItem.vue?vue&type=template&id=3db2f660&");
/* harmony import */ var _ContextMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextMenuItem.vue?vue&type=script&lang=js& */ "./resources/frontend/components/layout/header/ContextMenuItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContextMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContextMenuItem_vue_vue_type_template_id_3db2f660___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContextMenuItem_vue_vue_type_template_id_3db2f660___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/components/layout/header/ContextMenuItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/components/layout/header/ContextMenuItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/frontend/components/layout/header/ContextMenuItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenuItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/layout/header/ContextMenuItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/components/layout/header/ContextMenuItem.vue?vue&type=template&id=3db2f660&":
/*!********************************************************************************************************!*\
  !*** ./resources/frontend/components/layout/header/ContextMenuItem.vue?vue&type=template&id=3db2f660& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenuItem_vue_vue_type_template_id_3db2f660___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenuItem.vue?vue&type=template&id=3db2f660& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/layout/header/ContextMenuItem.vue?vue&type=template&id=3db2f660&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenuItem_vue_vue_type_template_id_3db2f660___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenuItem_vue_vue_type_template_id_3db2f660___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/components/layout/header/FeatureHeader.vue":
/*!***********************************************************************!*\
  !*** ./resources/frontend/components/layout/header/FeatureHeader.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeatureHeader_vue_vue_type_template_id_411b7462___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeatureHeader.vue?vue&type=template&id=411b7462& */ "./resources/frontend/components/layout/header/FeatureHeader.vue?vue&type=template&id=411b7462&");
/* harmony import */ var _FeatureHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureHeader.vue?vue&type=script&lang=js& */ "./resources/frontend/components/layout/header/FeatureHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeatureHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeatureHeader_vue_vue_type_template_id_411b7462___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FeatureHeader_vue_vue_type_template_id_411b7462___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/components/layout/header/FeatureHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/components/layout/header/FeatureHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/frontend/components/layout/header/FeatureHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatureHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FeatureHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/layout/header/FeatureHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatureHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/components/layout/header/FeatureHeader.vue?vue&type=template&id=411b7462&":
/*!******************************************************************************************************!*\
  !*** ./resources/frontend/components/layout/header/FeatureHeader.vue?vue&type=template&id=411b7462& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatureHeader_vue_vue_type_template_id_411b7462___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FeatureHeader.vue?vue&type=template&id=411b7462& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/layout/header/FeatureHeader.vue?vue&type=template&id=411b7462&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatureHeader_vue_vue_type_template_id_411b7462___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatureHeader_vue_vue_type_template_id_411b7462___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);