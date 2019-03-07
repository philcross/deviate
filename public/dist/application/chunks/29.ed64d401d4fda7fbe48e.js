(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/ShowActivity.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/pages/ShowActivity.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_lists_pagination_PaginationList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/lists/pagination/PaginationList */ "./resources/frontend/components/lists/pagination/PaginationList.vue");
/* harmony import */ var _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layout/header/FeatureHeader */ "./resources/frontend/components/layout/header/FeatureHeader.vue");
/* harmony import */ var _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/layout/header/ContextMenu */ "./resources/frontend/components/layout/header/ContextMenu.vue");
/* harmony import */ var _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/layout/header/ContextMenuItem */ "./resources/frontend/components/layout/header/ContextMenuItem.vue");
/* harmony import */ var _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/spinners/LargeSpinner */ "./resources/frontend/components/spinners/LargeSpinner.vue");
/* harmony import */ var _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/errors/ErrorBus */ "./resources/frontend/modules/errors/ErrorBus.js");
/* harmony import */ var _applications_activities_collections_components_CollectionItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @applications/activities/collections/components/CollectionItem */ "./resources/frontend/applications/activities/collections/components/CollectionItem.vue");
/* harmony import */ var _applications_activities_collections_components_CollectionDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @applications/activities/collections/components/CollectionDetails */ "./resources/frontend/applications/activities/collections/components/CollectionDetails.vue");
/* harmony import */ var _applications_activities_collections_components_ActivityList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @applications/activities/collections/components/ActivityList */ "./resources/frontend/applications/activities/collections/components/ActivityList.vue");
/* harmony import */ var _components_portlets_widgets_ImagePortlet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/portlets/widgets/ImagePortlet */ "./resources/frontend/components/portlets/widgets/ImagePortlet.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    collectionId: {
      required: true
    },
    activityId: {
      required: true
    }
  },
  data: function data() {
    return {
      collection: null,
      activity: null
    };
  },
  components: {
    ImagePortlet: _components_portlets_widgets_ImagePortlet__WEBPACK_IMPORTED_MODULE_9__["default"],
    ActivityList: _applications_activities_collections_components_ActivityList__WEBPACK_IMPORTED_MODULE_8__["default"],
    CollectionDetails: _applications_activities_collections_components_CollectionDetails__WEBPACK_IMPORTED_MODULE_7__["default"],
    LargeSpinner: _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_4__["default"],
    CollectionItem: _applications_activities_collections_components_CollectionItem__WEBPACK_IMPORTED_MODULE_6__["default"],
    FeatureHeader: _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_1__["default"],
    ContextMenu: _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_2__["default"],
    ContextMenuItem: _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_3__["default"],
    PaginationList: _components_lists_pagination_PaginationList__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    title: function title() {
      return this.collection === null ? '' : this.collection.name;
    }
  },
  methods: {
    loadCollection: function loadCollection() {
      var _this = this;

      window.axios.get('/activity-collections/' + this.collectionId).then(function (response) {
        _this.collection = response.data.data;
        _this.collection.description = "\n                        Bacon ipsum dolor amet kielbasa chuck salami, ham hock ham spare ribs porchetta short ribs pastrami strip steak ball tip. Jowl burgdoggen doner, landjaeger ham short loin andouille. Jerky pork chop jowl shank drumstick. Frankfurter chuck chicken leberkas tri-tip hamburger. Porchetta spare ribs venison beef ribs buffalo, filet mignon burgdoggen corned beef prosciutto.<br /><br />\n                        Pancetta t-bone filet mignon drumstick, sirloin pastrami pork pig pork belly doner jerky corned beef burgdoggen. Boudin shank ham flank turkey shoulder andouille. Leberkas hamburger prosciutto, brisket shank swine chicken ham hock flank ground round corned beef. Short loin capicola ball tip tenderloin pork belly pig, ground round pork chop drumstick porchetta. Leberkas corned beef alcatra pancetta capicola turkey, kevin salami tri-tip burgdoggen buffalo meatloaf. Strip steak bacon pork chop bresaola filet mignon tenderloin shank burgdoggen pancetta ham swine frankfurter short ribs.<br /><br />\n                        Meatball pork kevin, jowl flank chicken ham cupim pig hamburger filet mignon. Ham hock shank frankfurter filet mignon, chicken cow pork beef ribs tongue buffalo swine. Flank venison shoulder, boudin jowl bacon hamburger sirloin ground round leberkas porchetta capicola pork chop ham hock. Kevin t-bone leberkas picanha meatball boudin pancetta short loin tongue ham hock brisket biltong ball tip pork loin frankfurter. Meatloaf burgdoggen beef ribs buffalo, ground round hamburger doner venison landjaeger capicola brisket. Jerky ham hock hamburger meatball rump bresaola shoulder beef ribs. Doner short ribs tenderloin pork, shank pancetta jerky.<br /></br\n                        Bresaola ham short loin, brisket tri-tip biltong pancetta porchetta sirloin burgdoggen. Doner chicken shoulder, pig kielbasa spare ribs biltong shank boudin meatloaf. Kielbasa beef leberkas swine bacon turkey shank landjaeger. Andouille bacon pork chop short loin shoulder corned beef ribeye leberkas tenderloin cupim meatloaf.\n                    ";
      }).catch(function (error) {
        return console.log(error);
      });
    },
    loadActivity: function loadActivity() {
      var _this2 = this;

      window.axios.get('/activity-collections/' + this.collectionId + '/activities/' + this.activityId).then(function (response) {
        return _this2.activity = response.data.data;
      }).catch(function (error) {
        return console.log(error);
      });
    }
  },
  mounted: function mounted() {
    this.loadCollection();
    this.loadActivity();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
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
  name: 'image-portlet',
  props: {
    image: {
      required: true,
      type: String
    },
    title: {
      required: false,
      type: String,
      default: ''
    },
    fullHeight: {
      required: false,
      type: Boolean,
      default: true
    },
    withButton: {
      required: false,
      type: Boolean,
      default: false
    },
    buttonLink: {
      required: false,
      type: String,
      default: ''
    },
    buttonText: {
      required: false,
      type: String,
      default: ''
    }
  },
  computed: {
    backgroundImage: function backgroundImage() {
      return 'background-image: url(\'' + this.image + '\')';
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=style&index=0&id=99e1395e&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=style&index=0&id=99e1395e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.m-portlet.m-portlet--bordered-semi .m-portlet-fit--top[data-v-99e1395e] {\n    height: 286px;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.m-widget19 .m-widget19__content[data-v-99e1395e] {\n    margin-top: 2rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=style&index=0&id=99e1395e&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=style&index=0&id=99e1395e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImagePortlet.vue?vue&type=style&index=0&id=99e1395e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=style&index=0&id=99e1395e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/ShowActivity.vue?vue&type=template&id=c6b2d344&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/pages/ShowActivity.vue?vue&type=template&id=c6b2d344& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
                {
                  attrs: {
                    icon: "flaticon-plus",
                    url: "/activity-collections/create"
                  }
                },
                [_vm._v("Create Collection")]
              ),
              _vm._v(" "),
              _vm.collection
                ? _c(
                    "context-menu-item",
                    {
                      attrs: {
                        icon: "flaticon-edit-1",
                        url:
                          "/activity-collections/" + _vm.collectionId + "/edit"
                      }
                    },
                    [_vm._v("Edit Collection")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.collection
                ? _c(
                    "context-menu-item",
                    {
                      attrs: {
                        icon: "flaticon-plus",
                        url:
                          "/activity-collections/" +
                          _vm.collectionId +
                          "/activities/create"
                      }
                    },
                    [_vm._v("Create Activity")]
                  )
                : _vm._e()
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
          _vm.collection && _vm.activity
            ? _c("div", [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-6 col-xs-12" },
                    [
                      _c(
                        "image-portlet",
                        {
                          attrs: {
                            image: _vm.collection.image,
                            title: _vm.collection.name,
                            "with-button": false,
                            "full-height": false
                          }
                        },
                        [_vm._t("default", [void 0])],
                        2
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(0)
                ])
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
      _c("div", { staticClass: "m-portlet " }, [
        _c(
          "div",
          { staticClass: "m-portlet__body m-portlet__body--no-padding" },
          [
            _c(
              "div",
              { staticClass: "row m-row--no-padding m-row--col-separator-xl" },
              [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("div", { staticClass: "m-widget1" }, [
                    _c("div", { staticClass: "m-widget1__item" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "row m-row--no-padding align-items-center"
                        },
                        [
                          _c("div", { staticClass: "col" }, [
                            _c("h3", { staticClass: "m-widget1__title" }, [
                              _vm._v("Places Left")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "m-widget1__desc" }, [
                              _vm._v(
                                "Total number of places left for this activity"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col m--align-right" }, [
                            _c(
                              "span",
                              {
                                staticClass: "m-widget1__number m--font-brand"
                              },
                              [_vm._v("5")]
                            )
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "m-widget1__item" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "row m-row--no-padding align-items-center"
                        },
                        [
                          _c("div", { staticClass: "col" }, [
                            _c("h3", { staticClass: "m-widget1__title" }, [
                              _vm._v("Price")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "m-widget1__desc" }, [
                              _vm._v("The total cost for this activity")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col m--align-right" }, [
                            _c(
                              "span",
                              {
                                staticClass: "m-widget1__number m--font-brand"
                              },
                              [_vm._v("£20.00")]
                            )
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "m-widget1__item" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "row m-row--no-padding align-items-center"
                        },
                        [
                          _c("div", { staticClass: "col" }, [
                            _c("h3", { staticClass: "m-widget1__title" }, [
                              _vm._v("Starts At")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "m-widget1__desc" }, [
                              _vm._v("Date and time this activity starts")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col m--align-right" }, [
                            _c(
                              "span",
                              {
                                staticClass: "m-widget1__number m--font-brand"
                              },
                              [_vm._v("Monday, 1st January, 09:00")]
                            )
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "m-widget1__item" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "row m-row--no-padding align-items-center"
                        },
                        [
                          _c("div", { staticClass: "col" }, [
                            _c("h3", { staticClass: "m-widget1__title" }, [
                              _vm._v("Ends At")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "m-widget1__desc" }, [
                              _vm._v("Date and tme this activity ends")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col m--align-right" }, [
                            _c(
                              "span",
                              {
                                staticClass: "m-widget1__number m--font-brand"
                              },
                              [_vm._v("Tuesday, 2nd January, 15:30")]
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "m-portlet m-portlet--full-height " }, [
        _c("div", { staticClass: "m-portlet__head" }, [
          _c("div", { staticClass: "m-portlet__head-caption" }, [
            _c("div", { staticClass: "m-portlet__head-title" }, [
              _c("h3", { staticClass: "m-portlet__head-text" }, [
                _vm._v(
                  "\n                                    Activity Files\n                                "
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "m-portlet__body" }, [
          _c("div", { staticClass: "m-widget4" }, [
            _c("div", { staticClass: "m-widget4__item" }, [
              _c(
                "div",
                { staticClass: "m-widget4__img m-widget4__img--icon" },
                [
                  _c("img", {
                    attrs: {
                      src: "/assets/app/media/img/files/doc.svg",
                      alt: ""
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "m-widget4__info" }, [
                _c("span", { staticClass: "m-widget4__text" }, [
                  _vm._v(
                    "\n                                        Metronic Documentation\n                                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "m-widget4__ext" }, [
                _c(
                  "a",
                  { staticClass: "m-widget4__icon", attrs: { href: "#" } },
                  [_c("i", { staticClass: "la la-download" })]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "m-widget4__item" }, [
              _c(
                "div",
                { staticClass: "m-widget4__img m-widget4__img--icon" },
                [
                  _c("img", {
                    attrs: {
                      src: "/assets/app/media/img/files/jpg.svg",
                      alt: ""
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "m-widget4__info" }, [
                _c("span", { staticClass: "m-widget4__text" }, [
                  _vm._v(
                    "\n                                        Make JPEG Great Again\n                                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "m-widget4__ext" }, [
                _c(
                  "a",
                  { staticClass: "m-widget4__icon", attrs: { href: "#" } },
                  [_c("i", { staticClass: "la la-download" })]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "m-widget4__item" }, [
              _c(
                "div",
                { staticClass: "m-widget4__img m-widget4__img--icon" },
                [
                  _c("img", {
                    attrs: {
                      src: "/assets/app/media/img/files/pdf.svg",
                      alt: ""
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "m-widget4__info" }, [
                _c("span", { staticClass: "m-widget4__text" }, [
                  _vm._v(
                    "\n                                        Full Deeveloper Manual For 4.7\n                                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "m-widget4__ext" }, [
                _c(
                  "a",
                  { staticClass: "m-widget4__icon", attrs: { href: "#" } },
                  [_c("i", { staticClass: "la la-download" })]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=template&id=99e1395e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=template&id=99e1395e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
        "m-portlet m-portlet--bordered-semi m-portlet--rounded-force",
      class: { "m-portlet--full-height": _vm.fullHeight }
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
                    _vm._s(_vm.title) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "m-widget19__shadow" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "m-widget19__content" }, [
            _c(
              "div",
              { staticClass: "m-widget19__body" },
              [_vm._t("default")],
              2
            )
          ]),
          _vm._v(" "),
          _vm.withButton
            ? _c(
                "div",
                { staticClass: "m-widget19__action" },
                [
                  _vm._t("button", [
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "btn m-btn--pill btn-secondary m-btn m-btn--hover-brand m-btn--custom",
                        attrs: { to: _vm.buttonLink }
                      },
                      [_vm._v(_vm._s(_vm.buttonText))]
                    )
                  ])
                ],
                2
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

/***/ "./resources/frontend/applications/activities/activities/pages/ShowActivity.vue":
/*!**************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/ShowActivity.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowActivity_vue_vue_type_template_id_c6b2d344___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowActivity.vue?vue&type=template&id=c6b2d344& */ "./resources/frontend/applications/activities/activities/pages/ShowActivity.vue?vue&type=template&id=c6b2d344&");
/* harmony import */ var _ShowActivity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowActivity.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/activities/pages/ShowActivity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowActivity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowActivity_vue_vue_type_template_id_c6b2d344___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowActivity_vue_vue_type_template_id_c6b2d344___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/activities/pages/ShowActivity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/pages/ShowActivity.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/ShowActivity.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowActivity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowActivity.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/ShowActivity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowActivity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/pages/ShowActivity.vue?vue&type=template&id=c6b2d344&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/ShowActivity.vue?vue&type=template&id=c6b2d344& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowActivity_vue_vue_type_template_id_c6b2d344___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowActivity.vue?vue&type=template&id=c6b2d344& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/ShowActivity.vue?vue&type=template&id=c6b2d344&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowActivity_vue_vue_type_template_id_c6b2d344___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowActivity_vue_vue_type_template_id_c6b2d344___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/components/portlets/widgets/ImagePortlet.vue":
/*!*************************************************************************!*\
  !*** ./resources/frontend/components/portlets/widgets/ImagePortlet.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImagePortlet_vue_vue_type_template_id_99e1395e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImagePortlet.vue?vue&type=template&id=99e1395e&scoped=true& */ "./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=template&id=99e1395e&scoped=true&");
/* harmony import */ var _ImagePortlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImagePortlet.vue?vue&type=script&lang=js& */ "./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ImagePortlet_vue_vue_type_style_index_0_id_99e1395e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImagePortlet.vue?vue&type=style&index=0&id=99e1395e&scoped=true&lang=css& */ "./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=style&index=0&id=99e1395e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImagePortlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImagePortlet_vue_vue_type_template_id_99e1395e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImagePortlet_vue_vue_type_template_id_99e1395e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "99e1395e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/components/portlets/widgets/ImagePortlet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagePortlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImagePortlet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagePortlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=style&index=0&id=99e1395e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=style&index=0&id=99e1395e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagePortlet_vue_vue_type_style_index_0_id_99e1395e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImagePortlet.vue?vue&type=style&index=0&id=99e1395e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=style&index=0&id=99e1395e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagePortlet_vue_vue_type_style_index_0_id_99e1395e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagePortlet_vue_vue_type_style_index_0_id_99e1395e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagePortlet_vue_vue_type_style_index_0_id_99e1395e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagePortlet_vue_vue_type_style_index_0_id_99e1395e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagePortlet_vue_vue_type_style_index_0_id_99e1395e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=template&id=99e1395e&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=template&id=99e1395e&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagePortlet_vue_vue_type_template_id_99e1395e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImagePortlet.vue?vue&type=template&id=99e1395e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/components/portlets/widgets/ImagePortlet.vue?vue&type=template&id=99e1395e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagePortlet_vue_vue_type_template_id_99e1395e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagePortlet_vue_vue_type_template_id_99e1395e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);