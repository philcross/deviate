(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'collection-item',
  props: {
    collection: {
      required: true
    },
    withButton: {
      required: false,
      type: Boolean,
      default: true
    }
  },
  computed: {
    backgroundImage: function backgroundImage() {
      return 'background-image: url(\'' + this.collection.image + '\')';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_lists_pagination_PaginationList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/lists/pagination/PaginationList */ "./resources/frontend/components/lists/pagination/PaginationList.vue");
/* harmony import */ var _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layout/header/FeatureHeader */ "./resources/frontend/components/layout/header/FeatureHeader.vue");
/* harmony import */ var _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/layout/header/ContextMenu */ "./resources/frontend/components/layout/header/ContextMenu.vue");
/* harmony import */ var _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/layout/header/ContextMenuItem */ "./resources/frontend/components/layout/header/ContextMenuItem.vue");
/* harmony import */ var _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/errors/ErrorBus */ "./resources/frontend/modules/errors/ErrorBus.js");
/* harmony import */ var _applications_activities_collections_components_CollectionItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @applications/activities/collections/components/CollectionItem */ "./resources/frontend/applications/activities/collections/components/CollectionItem.vue");
/* harmony import */ var _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/spinners/LargeSpinner */ "./resources/frontend/components/spinners/LargeSpinner.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'show-collection',
  props: {
    id: {
      required: true
    }
  },
  data: function data() {
    return {
      collection: null
    };
  },
  components: {
    LargeSpinner: _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_6__["default"],
    CollectionItem: _applications_activities_collections_components_CollectionItem__WEBPACK_IMPORTED_MODULE_5__["default"],
    FeatureHeader: _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_1__["default"],
    ContextMenu: _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_2__["default"],
    ContextMenuItem: _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_3__["default"],
    PaginationList: _components_lists_pagination_PaginationList__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    loadCollection: function loadCollection() {
      var _this = this;

      window.axios.get('/activity-collections/' + this.id).then(function (response) {
        return _this.collection = response.data.data;
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=style&index=0&id=0a0a41d5&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=style&index=0&id=0a0a41d5&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.m-portlet.m-portlet--bordered-semi .m-portlet-fit--top[data-v-0a0a41d5] {\n    height: 286px;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.m-widget19 .m-widget19__content[data-v-0a0a41d5] {\n    margin-top: 2rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=style&index=0&id=029c646a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=style&index=0&id=029c646a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.m-portlet.m-portlet--bordered-semi .m-portlet-fit--top[data-v-029c646a] {\n    height: 286px;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.m-widget19 .m-widget19__content[data-v-029c646a] {\n    margin-top: 2rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=style&index=0&id=0a0a41d5&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=style&index=0&id=0a0a41d5&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CollectionItem.vue?vue&type=style&index=0&id=0a0a41d5&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=style&index=0&id=0a0a41d5&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=style&index=0&id=029c646a&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=style&index=0&id=029c646a&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowCollection.vue?vue&type=style&index=0&id=029c646a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=style&index=0&id=029c646a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=template&id=0a0a41d5&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=template&id=0a0a41d5&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "m-portlet m-portlet--bordered-semi m-portlet--full-height m-portlet--rounded-force"
    },
    [
      _c("div", { staticClass: "m-portlet__body" }, [
        _c("div", { staticClass: "m-widget19" }, [
          _c(
            "div",
            {
              staticClass:
                "m-widget19__pic m-portlet-fit--top m-portlet-fit--sides",
              style: _vm.backgroundImage
            },
            [
              _c("h3", { staticClass: "m-widget19__title m--font-light" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.collection.name) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "m-widget19__shadow" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "m-widget19__content" }, [
            _c("div", { staticClass: "m-widget19__body" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.collection.description) +
                  "\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _vm.withButton
            ? _c(
                "div",
                { staticClass: "m-widget19__action" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "btn m-btn--pill btn-secondary m-btn m-btn--hover-brand m-btn--custom",
                      attrs: {
                        to: "/activity-collections/" + _vm.collection.id
                      }
                    },
                    [_vm._v("View Activities")]
                  )
                ],
                1
              )
            : _vm._e()
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=template&id=029c646a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=template&id=029c646a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
        { attrs: { title: "Activity Collections: Summer 2019" } },
        [
          _vm.collection
            ? _c(
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
                  ),
                  _vm._v(" "),
                  _c(
                    "context-menu-item",
                    {
                      attrs: {
                        icon: "flaticon-edit-1",
                        url:
                          "/activity-collections/" +
                          _vm.collection.id +
                          "/create"
                      }
                    },
                    [_vm._v("Create Collection")]
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "m-content" },
        [
          _vm.collection
            ? _c("div", [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-6 col-xs-12" },
                    [
                      _c("collection-item", {
                        attrs: { collection: _vm.collection, withButton: false }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(0)
                ]),
                _vm._v(" "),
                _vm._m(1)
              ])
            : _c("large-spinner")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6 col-xs-12" }, [
      _c("div", { staticClass: "m-portlet m-portlet--full-height" }, [
        _c("div", { staticClass: "m-portlet__body" }, [
          _c("div", { staticClass: "m-widget12" }, [
            _c("div", { staticClass: "m-widget12__item" }, [
              _c("span", { staticClass: "m-widget12__text1" }, [
                _vm._v(
                  "Booking Opens\n                                        "
                ),
                _c("br"),
                _vm._v(" "),
                _c("span", [_vm._v("Monday, 1st January")])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "m-widget12__text2" }, [
                _vm._v(
                  "Booking Closes\n                                        "
                ),
                _c("br"),
                _vm._v(" "),
                _c("span", [_vm._v("Tuesday, 2nd January")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "m-widget12__item" }, [
              _c("span", { staticClass: "m-widget12__text1" }, [
                _vm._v(
                  "Payment Opens\n                                        "
                ),
                _c("br"),
                _vm._v(" "),
                _c("span", [_vm._v("Wednesday, 3rd January")])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "m-widget12__text2" }, [
                _vm._v(
                  "Payment Closes\n                                        "
                ),
                _c("br"),
                _vm._v(" "),
                _c("span", [_vm._v("Friday, 5th January")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "m-widget12__item" }, [
              _c("span", { staticClass: "m-widget12__text1" }, [
                _vm._v(
                  "Activities Start\n                                        "
                ),
                _c("br"),
                _vm._v(" "),
                _c("span", [_vm._v("Monday, 8th January")])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "m-widget12__text2" }, [
                _vm._v(
                  "Activities End\n                                        "
                ),
                _c("br"),
                _vm._v(" "),
                _c("span", [_vm._v("Friday, 12th January")])
              ])
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "m-widget12__item" }, [
              _c("span", { staticClass: "m-widget12__text1" }, [
                _vm._v(
                  "Total Activities\n                                        "
                ),
                _c("br"),
                _vm._v(" "),
                _c("span", [_vm._v("32")])
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "m-portlet m-portlet--full-height" }, [
          _c("div", { staticClass: "m-portlet__body" }, [
            _c(
              "table",
              { staticClass: "table m-table m-table--head-separator-primary" },
              [
                _c("thead", [
                  _c("tr", [
                    _c("th", [_vm._v("Activity")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Starts")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Ends")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Price")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Places Left")])
                  ])
                ]),
                _vm._v(" "),
                _c("tbody", [
                  _c("tr", [
                    _c("td", [
                      _c(
                        "a",
                        {
                          staticClass: "m-link m--font-bolder",
                          attrs: { href: "" }
                        },
                        [_vm._v("Alton Towers")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Monday 2nd February, 2019")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Monday 2nd February, 2019")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("£40.00")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("50")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [
                      _c(
                        "a",
                        {
                          staticClass: "m-link m--font-bolder",
                          attrs: { href: "" }
                        },
                        [_vm._v("Alton Towers")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Tuesday 3rd February, 2019")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Tuesday 3rd February, 2019")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("£40.00")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("50")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [
                      _c(
                        "a",
                        {
                          staticClass: "m-link m--font-bolder",
                          attrs: { href: "" }
                        },
                        [_vm._v("Tower of London")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Monday 2nd February, 2019")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Monday 2nd February, 2019")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("£40.00")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("30")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [
                      _c(
                        "a",
                        {
                          staticClass: "m-link m--font-bolder",
                          attrs: { href: "" }
                        },
                        [_vm._v("Bowling and Ice Skating")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Wednesday 4th February, 2019")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Wednesday 4th February, 2019")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("£20.00")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("60")])
                  ])
                ])
              ]
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/frontend/applications/activities/collections/components/CollectionItem.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/components/CollectionItem.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollectionItem_vue_vue_type_template_id_0a0a41d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollectionItem.vue?vue&type=template&id=0a0a41d5&scoped=true& */ "./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=template&id=0a0a41d5&scoped=true&");
/* harmony import */ var _CollectionItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollectionItem.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CollectionItem_vue_vue_type_style_index_0_id_0a0a41d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CollectionItem.vue?vue&type=style&index=0&id=0a0a41d5&scoped=true&lang=css& */ "./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=style&index=0&id=0a0a41d5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CollectionItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CollectionItem_vue_vue_type_template_id_0a0a41d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CollectionItem_vue_vue_type_template_id_0a0a41d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0a0a41d5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/collections/components/CollectionItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CollectionItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=style&index=0&id=0a0a41d5&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=style&index=0&id=0a0a41d5&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionItem_vue_vue_type_style_index_0_id_0a0a41d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CollectionItem.vue?vue&type=style&index=0&id=0a0a41d5&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=style&index=0&id=0a0a41d5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionItem_vue_vue_type_style_index_0_id_0a0a41d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionItem_vue_vue_type_style_index_0_id_0a0a41d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionItem_vue_vue_type_style_index_0_id_0a0a41d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionItem_vue_vue_type_style_index_0_id_0a0a41d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionItem_vue_vue_type_style_index_0_id_0a0a41d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=template&id=0a0a41d5&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=template&id=0a0a41d5&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionItem_vue_vue_type_template_id_0a0a41d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CollectionItem.vue?vue&type=template&id=0a0a41d5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/components/CollectionItem.vue?vue&type=template&id=0a0a41d5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionItem_vue_vue_type_template_id_0a0a41d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionItem_vue_vue_type_template_id_0a0a41d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/ShowCollection.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/ShowCollection.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowCollection_vue_vue_type_template_id_029c646a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowCollection.vue?vue&type=template&id=029c646a&scoped=true& */ "./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=template&id=029c646a&scoped=true&");
/* harmony import */ var _ShowCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowCollection.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ShowCollection_vue_vue_type_style_index_0_id_029c646a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowCollection.vue?vue&type=style&index=0&id=029c646a&scoped=true&lang=css& */ "./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=style&index=0&id=029c646a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ShowCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowCollection_vue_vue_type_template_id_029c646a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowCollection_vue_vue_type_template_id_029c646a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "029c646a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/collections/pages/ShowCollection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowCollection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=style&index=0&id=029c646a&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=style&index=0&id=029c646a&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCollection_vue_vue_type_style_index_0_id_029c646a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowCollection.vue?vue&type=style&index=0&id=029c646a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=style&index=0&id=029c646a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCollection_vue_vue_type_style_index_0_id_029c646a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCollection_vue_vue_type_style_index_0_id_029c646a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCollection_vue_vue_type_style_index_0_id_029c646a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCollection_vue_vue_type_style_index_0_id_029c646a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCollection_vue_vue_type_style_index_0_id_029c646a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=template&id=029c646a&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=template&id=029c646a&scoped=true& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCollection_vue_vue_type_template_id_029c646a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowCollection.vue?vue&type=template&id=029c646a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/ShowCollection.vue?vue&type=template&id=029c646a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCollection_vue_vue_type_template_id_029c646a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCollection_vue_vue_type_template_id_029c646a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);