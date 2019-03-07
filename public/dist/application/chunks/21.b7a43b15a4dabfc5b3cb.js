(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/ConfirmDeleteCollectionTab.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/pages/ConfirmDeleteCollectionTab.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/alerts/Toast */ "./resources/frontend/modules/alerts/Toast.js");
/* harmony import */ var _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/errors/ErrorBus */ "./resources/frontend/modules/errors/ErrorBus.js");
/* harmony import */ var _modules_forms_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/forms/Form */ "./resources/frontend/modules/forms/Form.js");
/* harmony import */ var _components_forms_layouts_FormColumn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/forms/layouts/FormColumn */ "./resources/frontend/components/forms/layouts/FormColumn.vue");
/* harmony import */ var _components_buttons_basic_DangerButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/buttons/basic/DangerButton */ "./resources/frontend/components/buttons/basic/DangerButton.vue");
/* harmony import */ var _components_buttons_basic_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/buttons/basic/SecondaryButton */ "./resources/frontend/components/buttons/basic/SecondaryButton.vue");
/* harmony import */ var _components_portlets_footers_FormActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/portlets/footers/FormActions */ "./resources/frontend/components/portlets/footers/FormActions.vue");
/* harmony import */ var _components_forms_HorizontalForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/forms/HorizontalForm */ "./resources/frontend/components/forms/HorizontalForm.vue");
//
//
//
//
//
//
//
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
  name: 'confirm-delete-collection-tab',
  props: {
    collection: {
      required: true
    }
  },
  data: function data() {
    return {
      form: new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_2__["default"]()
    };
  },
  components: {
    HorizontalForm: _components_forms_HorizontalForm__WEBPACK_IMPORTED_MODULE_7__["default"],
    FormActions: _components_portlets_footers_FormActions__WEBPACK_IMPORTED_MODULE_6__["default"],
    SecondaryButton: _components_buttons_basic_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__["default"],
    DangerButton: _components_buttons_basic_DangerButton__WEBPACK_IMPORTED_MODULE_4__["default"],
    FormColumn: _components_forms_layouts_FormColumn__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  methods: {
    deleteCollection: function deleteCollection() {
      var _this = this;

      this.form.delete('/activity-collections/' + this.collection).then(function (response) {
        new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_0__["default"]().success('You have successfully deleted the collection ');

        _this.$router.push('/activity-collections');
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/EditCollection.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/pages/EditCollection.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applications_activities_collections_pages_EditDetailsTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @applications/activities/collections/pages/EditDetailsTab */ "./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue");
/* harmony import */ var _applications_activities_collections_pages_EditImageTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @applications/activities/collections/pages/EditImageTab */ "./resources/frontend/applications/activities/collections/pages/EditImageTab.vue");
/* harmony import */ var _applications_activities_collections_pages_ConfirmDeleteCollectionTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @applications/activities/collections/pages/ConfirmDeleteCollectionTab */ "./resources/frontend/applications/activities/collections/pages/ConfirmDeleteCollectionTab.vue");
/* harmony import */ var _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/layout/header/FeatureHeader */ "./resources/frontend/components/layout/header/FeatureHeader.vue");
/* harmony import */ var _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/layout/header/ContextMenu */ "./resources/frontend/components/layout/header/ContextMenu.vue");
/* harmony import */ var _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/layout/header/ContextMenuItem */ "./resources/frontend/components/layout/header/ContextMenuItem.vue");
/* harmony import */ var _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/spinners/LargeSpinner */ "./resources/frontend/components/spinners/LargeSpinner.vue");
/* harmony import */ var _components_portlets_tabbed_TabbedPortlet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/portlets/tabbed/TabbedPortlet */ "./resources/frontend/components/portlets/tabbed/TabbedPortlet.vue");
/* harmony import */ var _components_portlets_tabbed_PortletTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/portlets/tabbed/PortletTab */ "./resources/frontend/components/portlets/tabbed/PortletTab.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'edit-collection',
  props: {
    id: {
      required: true
    }
  },
  data: function data() {
    return {
      collection: null,
      isDangerousPortlet: false
    };
  },
  components: {
    EditImageTab: _applications_activities_collections_pages_EditImageTab__WEBPACK_IMPORTED_MODULE_1__["default"],
    ConfirmDeleteCollectionTab: _applications_activities_collections_pages_ConfirmDeleteCollectionTab__WEBPACK_IMPORTED_MODULE_2__["default"],
    EditDetailsTab: _applications_activities_collections_pages_EditDetailsTab__WEBPACK_IMPORTED_MODULE_0__["default"],
    PortletTab: _components_portlets_tabbed_PortletTab__WEBPACK_IMPORTED_MODULE_8__["default"],
    TabbedPortlet: _components_portlets_tabbed_TabbedPortlet__WEBPACK_IMPORTED_MODULE_7__["default"],
    LargeSpinner: _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_6__["default"],
    ContextMenuItem: _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_5__["default"],
    ContextMenu: _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_4__["default"],
    FeatureHeader: _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: {
    title: function title() {
      return this.collection === null ? 'Edit Collection' : 'Edit Collection: ' + this.collection.name;
    }
  },
  methods: {
    loadCollection: function loadCollection() {
      var _this = this;

      window.axios.get('/activity-collections/' + this.id).then(function (response) {
        _this.collection = response.data.data;
      }).catch(function (error) {
        return console.log(error);
      });
    },
    checkPortletTab: function checkPortletTab(payload) {
      this.isDangerousPortlet = payload.selectedTab.name === 'Delete';
    }
  },
  mounted: function mounted() {
    this.loadCollection();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applications_activities_collections_components_CollectionForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @applications/activities/collections/components/CollectionForm */ "./resources/frontend/applications/activities/collections/components/CollectionForm.vue");
/* harmony import */ var _modules_forms_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/forms/Form */ "./resources/frontend/modules/forms/Form.js");
/* harmony import */ var _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/alerts/Toast */ "./resources/frontend/modules/alerts/Toast.js");
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'edit-details-tab',
  props: {
    collection: {
      required: true
    }
  },
  components: {
    CollectionForm: _applications_activities_collections_components_CollectionForm__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    cancelUrl: function cancelUrl() {
      return '/activity-collections/' + this.collection.id;
    },
    form: function form() {
      return new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({
        name: this.collection.name,
        description: this.collection.description,
        booking_opens_at: this.collection.dates.booking.opens,
        booking_closes_at: this.collection.dates.booking.closes,
        payment_opens_at: this.collection.dates.payment.opens,
        payment_closes_at: this.collection.dates.payment.closes,
        activities_start_at: this.collection.dates.activities.start,
        activities_end_at: this.collection.dates.activities.end,
        is_hidden: this.collection.is_hidden
      });
    }
  },
  methods: {
    updateCollection: function updateCollection() {
      var _this = this;

      this.form.put('/activity-collections/' + this.collection.id).then(function (response) {
        new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_2__["default"]().success('This collection has been successfully updated.');

        _this.$router.push('/activity-collections/' + _this.collection.id);
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/EditImageTab.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/pages/EditImageTab.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_forms_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/forms/Form */ "./resources/frontend/modules/forms/Form.js");
/* harmony import */ var _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/alerts/Toast */ "./resources/frontend/modules/alerts/Toast.js");
/* harmony import */ var _components_forms_HorizontalForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/forms/HorizontalForm */ "./resources/frontend/components/forms/HorizontalForm.vue");
/* harmony import */ var _components_portlets_footers_FormActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/portlets/footers/FormActions */ "./resources/frontend/components/portlets/footers/FormActions.vue");
/* harmony import */ var _components_buttons_submit_BrandButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/buttons/submit/BrandButton */ "./resources/frontend/components/buttons/submit/BrandButton.vue");
/* harmony import */ var _components_buttons_basic_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/buttons/basic/SecondaryButton */ "./resources/frontend/components/buttons/basic/SecondaryButton.vue");
/* harmony import */ var _components_forms_layouts_FormRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/forms/layouts/FormRow */ "./resources/frontend/components/forms/layouts/FormRow.vue");
//
//
//
//
//
//
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
  name: 'edit-image-tab',
  components: {
    FormRow: _components_forms_layouts_FormRow__WEBPACK_IMPORTED_MODULE_6__["default"],
    SecondaryButton: _components_buttons_basic_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__["default"],
    BrandButton: _components_buttons_submit_BrandButton__WEBPACK_IMPORTED_MODULE_4__["default"],
    FormActions: _components_portlets_footers_FormActions__WEBPACK_IMPORTED_MODULE_3__["default"],
    HorizontalForm: _components_forms_HorizontalForm__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    collection: {
      required: true
    }
  },
  computed: {
    cancelUrl: function cancelUrl() {
      return '/activity-collections/' + this.collection.id;
    },
    form: function form() {
      return new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        image: ''
      });
    }
  },
  methods: {
    uploadImage: function uploadImage() {
      var _this = this;

      this.form.upload('/activity-collections/' + this.collection.id + '/image').then(function (response) {
        new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_1__["default"]().success('The image has been successfully uploaded.');

        _this.$router.push('/activity-collections/' + _this.collection.id);
      }).catch(function (error) {
        return console.log(error);
      });
    },
    handleFileSelect: function handleFileSelect() {
      this.form.image = this.$refs.file.files[0];
    }
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=style&index=0&id=3dc83aed&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=style&index=0&id=3dc83aed&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=style&index=0&id=3dc83aed&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=style&index=0&id=3dc83aed&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditDetailsTab.vue?vue&type=style&index=0&id=3dc83aed&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=style&index=0&id=3dc83aed&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/ConfirmDeleteCollectionTab.vue?vue&type=template&id=04b02dc8&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/pages/ConfirmDeleteCollectionTab.vue?vue&type=template&id=04b02dc8& ***!
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
    "horizontal-form",
    { on: { submit: _vm.deleteCollection } },
    [
      _c("form-column", [
        _c("p", [
          _vm._v(
            "Are you sure you want to delete this activity collection? Deleting the collection will also delete all activities within the collection and unbook all users from activities."
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v("Payments will not automatically be refunded. "),
          _c("strong", [_vm._v("This action cannot be undone.")]),
          _vm._v(
            " If you are sure this is what you want to do, click the confirmation button below."
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "form-actions",
        [
          _c("danger-button", { attrs: { actioning: _vm.form.isSubmitting } }, [
            _vm._v("Delete Collection")
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            { attrs: { to: "/activity-collections/" + _vm.collection.id } },
            [_c("secondary-button", [_vm._v("Cancel")])],
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
                          icon: "flaticon-plus",
                          url:
                            "/activity-collections/" +
                            _vm.id +
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
        _vm.collection
          ? _c(
              "div",
              { staticClass: "m-content" },
              [
                _c(
                  "tabbed-portlet",
                  {
                    attrs: { "is-dangerous": _vm.isDangerousPortlet },
                    on: { "tab-changed": _vm.checkPortletTab }
                  },
                  [
                    _c(
                      "portlet-tab",
                      {
                        attrs: {
                          name: "Edit",
                          icon: "la la-pencil",
                          active: true
                        }
                      },
                      [
                        _c("edit-details-tab", {
                          attrs: { collection: _vm.collection }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "portlet-tab",
                      { attrs: { name: "Image", icon: "la la-image" } },
                      [
                        _c("edit-image-tab", {
                          attrs: { collection: _vm.collection }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "portlet-tab",
                      { attrs: { name: "Delete", icon: "la la-trash" } },
                      [
                        _c("confirm-delete-collection-tab", {
                          attrs: { collection: _vm.collection }
                        })
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=template&id=3dc83aed&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=template&id=3dc83aed&scoped=true& ***!
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
  return _c("collection-form", {
    attrs: {
      form: _vm.form,
      "cancel-url": _vm.cancelUrl,
      "submit-label": "Update Collection"
    },
    on: { submit: _vm.updateCollection }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/EditImageTab.vue?vue&type=template&id=5358d398&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/collections/pages/EditImageTab.vue?vue&type=template&id=5358d398& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    "horizontal-form",
    { on: { submit: _vm.uploadImage } },
    [
      _c(
        "form-row",
        {
          attrs: {
            form: _vm.form,
            name: "image",
            label: "Select Image",
            helper:
              "Pick a new image to use for this collection. The best images to use are horizontal layouts as they will be cropped to fit into spaces available.",
            columns: [3, 6]
          }
        },
        [
          _c("input", {
            ref: "file",
            staticClass: "form-control m-input m-input--air",
            attrs: { type: "file", name: "image", id: "file" },
            on: { change: _vm.handleFileSelect }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "form-actions",
        [
          _c("brand-button", { attrs: { actioning: _vm.form.isSubmitting } }, [
            _vm._v("Upload Image")
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            { attrs: { to: _vm.cancelUrl } },
            [_c("secondary-button", [_vm._v("Cancel")])],
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
  return _c("div", { staticClass: "form-group row" }, [
    _c("div", { class: _vm.columnWidth }, [_vm._t("default")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/ConfirmDeleteCollectionTab.vue":
/*!*****************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/ConfirmDeleteCollectionTab.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfirmDeleteCollectionTab_vue_vue_type_template_id_04b02dc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmDeleteCollectionTab.vue?vue&type=template&id=04b02dc8& */ "./resources/frontend/applications/activities/collections/pages/ConfirmDeleteCollectionTab.vue?vue&type=template&id=04b02dc8&");
/* harmony import */ var _ConfirmDeleteCollectionTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmDeleteCollectionTab.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/collections/pages/ConfirmDeleteCollectionTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ConfirmDeleteCollectionTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConfirmDeleteCollectionTab_vue_vue_type_template_id_04b02dc8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConfirmDeleteCollectionTab_vue_vue_type_template_id_04b02dc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/collections/pages/ConfirmDeleteCollectionTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/ConfirmDeleteCollectionTab.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/ConfirmDeleteCollectionTab.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDeleteCollectionTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ConfirmDeleteCollectionTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/ConfirmDeleteCollectionTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDeleteCollectionTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/ConfirmDeleteCollectionTab.vue?vue&type=template&id=04b02dc8&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/ConfirmDeleteCollectionTab.vue?vue&type=template&id=04b02dc8& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDeleteCollectionTab_vue_vue_type_template_id_04b02dc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ConfirmDeleteCollectionTab.vue?vue&type=template&id=04b02dc8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/ConfirmDeleteCollectionTab.vue?vue&type=template&id=04b02dc8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDeleteCollectionTab_vue_vue_type_template_id_04b02dc8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDeleteCollectionTab_vue_vue_type_template_id_04b02dc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditDetailsTab_vue_vue_type_template_id_3dc83aed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditDetailsTab.vue?vue&type=template&id=3dc83aed&scoped=true& */ "./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=template&id=3dc83aed&scoped=true&");
/* harmony import */ var _EditDetailsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditDetailsTab.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditDetailsTab_vue_vue_type_style_index_0_id_3dc83aed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditDetailsTab.vue?vue&type=style&index=0&id=3dc83aed&scoped=true&lang=css& */ "./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=style&index=0&id=3dc83aed&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditDetailsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditDetailsTab_vue_vue_type_template_id_3dc83aed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditDetailsTab_vue_vue_type_template_id_3dc83aed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3dc83aed",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDetailsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditDetailsTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDetailsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=style&index=0&id=3dc83aed&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=style&index=0&id=3dc83aed&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDetailsTab_vue_vue_type_style_index_0_id_3dc83aed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditDetailsTab.vue?vue&type=style&index=0&id=3dc83aed&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=style&index=0&id=3dc83aed&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDetailsTab_vue_vue_type_style_index_0_id_3dc83aed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDetailsTab_vue_vue_type_style_index_0_id_3dc83aed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDetailsTab_vue_vue_type_style_index_0_id_3dc83aed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDetailsTab_vue_vue_type_style_index_0_id_3dc83aed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDetailsTab_vue_vue_type_style_index_0_id_3dc83aed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=template&id=3dc83aed&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=template&id=3dc83aed&scoped=true& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDetailsTab_vue_vue_type_template_id_3dc83aed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditDetailsTab.vue?vue&type=template&id=3dc83aed&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/EditDetailsTab.vue?vue&type=template&id=3dc83aed&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDetailsTab_vue_vue_type_template_id_3dc83aed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDetailsTab_vue_vue_type_template_id_3dc83aed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/EditImageTab.vue":
/*!***************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/EditImageTab.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditImageTab_vue_vue_type_template_id_5358d398___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditImageTab.vue?vue&type=template&id=5358d398& */ "./resources/frontend/applications/activities/collections/pages/EditImageTab.vue?vue&type=template&id=5358d398&");
/* harmony import */ var _EditImageTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditImageTab.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/collections/pages/EditImageTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditImageTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditImageTab_vue_vue_type_template_id_5358d398___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditImageTab_vue_vue_type_template_id_5358d398___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/collections/pages/EditImageTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/EditImageTab.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/EditImageTab.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditImageTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditImageTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/EditImageTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditImageTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/collections/pages/EditImageTab.vue?vue&type=template&id=5358d398&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/collections/pages/EditImageTab.vue?vue&type=template&id=5358d398& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditImageTab_vue_vue_type_template_id_5358d398___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditImageTab.vue?vue&type=template&id=5358d398& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/collections/pages/EditImageTab.vue?vue&type=template&id=5358d398&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditImageTab_vue_vue_type_template_id_5358d398___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditImageTab_vue_vue_type_template_id_5358d398___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);