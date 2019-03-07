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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        return _this.collection = response.data.data;
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
                      _c("collection-item", {
                        attrs: { collection: _vm.collection, withButton: false }
                      })
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
          { staticClass: "m-portlet__body  m-portlet__body--no-padding" },
          [
            _c(
              "div",
              { staticClass: "row m-row--no-padding m-row--col-separator-xl" },
              [
                _c("div", { staticClass: "col-xs-12" }, [
                  _c("div", { staticClass: "m-widget24" }, [
                    _c("div", { staticClass: "m-widget24__item" }, [
                      _c("h4", { staticClass: "m-widget24__title" }, [
                        _vm._v("Places Left")
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "m-widget24__stats m--font-brand" },
                        [_vm._v("5")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "m--space-10" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "progress m-progress--sm" }, [
                        _c("div", {
                          staticClass: "progress-bar m--bg-brand",
                          staticStyle: { width: "75%" },
                          attrs: {
                            role: "progressbar",
                            "aria-valuenow": "75",
                            "aria-valuemin": "0",
                            "aria-valuemax": "100"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "m-widget24__change" }, [
                        _vm._v("15 / 20 spaces booked")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "m-widget24__number" }, [
                        _vm._v("75%")
                      ])
                    ])
                  ])
                ])
              ]
            )
          ]
        )
      ])
    ])
  }
]
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



/***/ })

}]);