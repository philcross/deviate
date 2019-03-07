(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/EditCollection.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/pages/EditCollection.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/alerts/Toast */ "./resources/frontend/modules/alerts/Toast.js");
/* harmony import */ var _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/errors/ErrorBus */ "./resources/frontend/modules/errors/ErrorBus.js");
/* harmony import */ var _modules_forms_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/forms/Form */ "./resources/frontend/modules/forms/Form.js");
/* harmony import */ var _components_portlets_standard_BrandPortlet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/portlets/standard/BrandPortlet */ "./resources/frontend/components/portlets/standard/BrandPortlet.vue");
/* harmony import */ var _applications_activities_collections_components_CollectionForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @applications/activities/collections/components/CollectionForm */ "./resources/frontend/applications/activities/collections/components/CollectionForm.vue");
//
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
  name: 'create-collection',
  props: {
    id: {
      required: true
    }
  },
  data: function data() {
    return {
      collection: null,
      form: new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_2__["default"]({
        name: '',
        description: '',
        booking_opens_at: '',
        booking_closes_at: '',
        payment_opens_at: '',
        payment_closes_at: '',
        activities_start_at: '',
        activities_end_at: '',
        is_hidden: false
      })
    };
  },
  components: {
    CollectionForm: _applications_activities_collections_components_CollectionForm__WEBPACK_IMPORTED_MODULE_4__["default"],
    BrandPortlet: _components_portlets_standard_BrandPortlet__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  methods: {
    loadCollection: function loadCollection() {
      var _this = this;

      window.axios.get('/activity-collections/' + this.id).then(function (response) {
        _this.collection = response.data.data;
        _this.form = new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_2__["default"]({
          name: _this.collection.name,
          description: _this.collection.description,
          booking_opens_at: _this.collection.dates.booking.opens,
          booking_closes_at: _this.collection.dates.booking.closes,
          payment_opens_at: _this.collection.dates.payment.opens,
          payment_closes_at: _this.collection.dates.payment.closes,
          activities_start_at: _this.collection.dates.activities.starts,
          activities_end_at: _this.collection.dates.activities.ends,
          is_hidden: _this.collection.is_hidden
        });
      }).catch(function (error) {
        return colsole.log(error);
      });
    },
    updateCollection: function updateCollection() {
      var _this2 = this;

      this.form.post('/activity-collections').then(function (response) {
        new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_0__["default"]().success('This collection has been successfully updated.');

        _this2.$router.push('/activity-collections/' + _this2.id);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/EditCollection.vue?vue&type=template&id=b5daf3d0&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/pages/EditCollection.vue?vue&type=template&id=b5daf3d0& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "m-content" },
      [
        _c(
          "brand-portlet",
          { attrs: { title: "Create new Activity Collection" } },
          [
            _c("collection-form", {
              attrs: { form: _vm.form, "cancel-url": _vm.cancelUrl },
              on: { submit: _vm.updateCollection }
            })
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/EditCollection.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/EditCollection.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditCollection_vue_vue_type_template_id_b5daf3d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditCollection.vue?vue&type=template&id=b5daf3d0& */ "./resources/frontend/applications/activities/collections/pages/EditCollection.vue?vue&type=template&id=b5daf3d0&");
/* harmony import */ var _EditCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditCollection.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/collections/pages/EditCollection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditCollection_vue_vue_type_template_id_b5daf3d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditCollection_vue_vue_type_template_id_b5daf3d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/collections/pages/EditCollection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/EditCollection.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/EditCollection.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCollection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/EditCollection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/EditCollection.vue?vue&type=template&id=b5daf3d0&":
/*!************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/EditCollection.vue?vue&type=template&id=b5daf3d0& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCollection_vue_vue_type_template_id_b5daf3d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCollection.vue?vue&type=template&id=b5daf3d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/EditCollection.vue?vue&type=template&id=b5daf3d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCollection_vue_vue_type_template_id_b5daf3d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCollection_vue_vue_type_template_id_b5daf3d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);