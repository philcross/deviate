(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _applications_activities_activities_components_UserSearchItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @applications/activities/activities/components/UserSearchItem */ "./resources/frontend/applications/activities/activities/components/UserSearchItem.vue");
/* harmony import */ var _components_alerts_ExceptionAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/alerts/ExceptionAlert */ "./resources/frontend/components/alerts/ExceptionAlert.vue");
/* harmony import */ var _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/spinners/LargeSpinner */ "./resources/frontend/components/spinners/LargeSpinner.vue");
/* harmony import */ var _components_forms_layouts_with_icon_TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/forms/layouts/with-icon/TextInput */ "./resources/frontend/components/forms/layouts/with-icon/TextInput.vue");
/* harmony import */ var _components_lists_basic_ActionableDescriptiveList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/lists/basic/ActionableDescriptiveList */ "./resources/frontend/components/lists/basic/ActionableDescriptiveList.vue");
/* harmony import */ var _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/errors/ErrorBus */ "./resources/frontend/modules/errors/ErrorBus.js");
/* harmony import */ var _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/alerts/Toast */ "./resources/frontend/modules/alerts/Toast.js");
//
//
//
//
//
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
  name: 'staff-search',
  components: {
    LargeSpinner: _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_3__["default"],
    TextInput: _components_forms_layouts_with_icon_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"],
    ExceptionAlert: _components_alerts_ExceptionAlert__WEBPACK_IMPORTED_MODULE_2__["default"],
    ActionableDescriptiveList: _components_lists_basic_ActionableDescriptiveList__WEBPACK_IMPORTED_MODULE_5__["default"],
    UserSearchItem: _applications_activities_activities_components_UserSearchItem__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    collection: {
      required: true
    },
    activity: {
      required: true
    }
  },
  data: function data() {
    return {
      isLoadingResults: false,
      isDisplayingResults: false,
      searchTerm: '',
      results: []
    };
  },
  computed: {
    shouldDisplayResults: function shouldDisplayResults() {
      return this.isDisplayingResults && this.results.length > 0;
    }
  },
  watch: {
    searchTerm: function searchTerm() {
      this.getDebouncedSearchTerm();
    }
  },
  methods: {
    searchUsers: function searchUsers() {
      var _this = this;

      _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_6__["default"].clear('search_error');
      this.isLoadingResults = true;
      this.isDisplayingResults = false;

      if (this.searchTerm.length === 0) {
        this.isLoadingResults = false;
        this.results = [];
        return;
      }

      window.axios.get('/activity-collections/' + this.collection.id + '/activities/' + this.activity.id + '/staff/eligible?filters[term]=' + this.searchTerm).then(function (response) {
        _this.isDisplayingResults = true;
        _this.results = response.data.data;
      }).catch(function (error) {
        _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_6__["default"].record(error.response.data, 'search_error');
      }).then(function () {
        _this.isLoadingResults = false;
      });
    },
    addUser: function addUser(user) {
      var _this2 = this;

      window.axios.post('/activity-collections/' + this.collection.id + '/activities/' + this.activity.id + '/staff/' + user.id).then(function () {
        _this2.results = _this2.results.filter(function (obj) {
          return obj.id !== user.id;
        });
        new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_7__["default"]().success(user.name.forename + ' ' + user.name.surname + ' has been added to the activity.');
      }).catch(function (error) {
        _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_6__["default"].record(error.response.data, 'search_error');
      });
      this.$emit('user-added', {
        user: user
      });
    }
  },
  created: function created() {
    this.getDebouncedSearchTerm = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(this.searchUsers, 500);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_lists_basic_ActionableItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/lists/basic/ActionableItem */ "./resources/frontend/components/lists/basic/ActionableItem.vue");
/* harmony import */ var _components_buttons_icon_only_DangerButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/buttons/icon-only/DangerButton */ "./resources/frontend/components/buttons/icon-only/DangerButton.vue");
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "user-item",
  components: {
    DangerButton: _components_buttons_icon_only_DangerButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    ActionableItem: _components_lists_basic_ActionableItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    user: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      removing: false
    };
  },
  computed: {
    removingClass: function removingClass() {
      return {
        'removing': this.removing
      };
    },
    userProfileUrl: function userProfileUrl() {
      return "/users/".concat(this.user.id);
    },
    full_name: function full_name() {
      return this.user.name.forename + ' ' + this.user.name.surname;
    }
  },
  methods: {
    remove: function remove() {
      this.removing = true;
      this.$emit('remove-user');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/components/UserList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applications_activities_activities_components_UserItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @applications/activities/activities/components/UserItem */ "./resources/frontend/applications/activities/activities/components/UserItem.vue");
/* harmony import */ var _components_lists_basic_ActionableDescriptiveList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/lists/basic/ActionableDescriptiveList */ "./resources/frontend/components/lists/basic/ActionableDescriptiveList.vue");
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
  name: "user-list",
  props: {
    users: {
      required: true,
      type: Array
    }
  },
  components: {
    ActionableDescriptiveList: _components_lists_basic_ActionableDescriptiveList__WEBPACK_IMPORTED_MODULE_1__["default"],
    UserItem: _applications_activities_activities_components_UserItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_lists_basic_ActionableItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/lists/basic/ActionableItem */ "./resources/frontend/components/lists/basic/ActionableItem.vue");
/* harmony import */ var _components_buttons_icon_only_BrandButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/buttons/icon-only/BrandButton */ "./resources/frontend/components/buttons/icon-only/BrandButton.vue");
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
  components: {
    BrandButton: _components_buttons_icon_only_BrandButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    ActionableItem: _components_lists_basic_ActionableItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  name: "user-search-item",
  props: {
    user: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      isAdding: false
    };
  },
  computed: {
    resultClass: function resultClass() {
      return {
        'result': true,
        'adding': this.isAdding
      };
    },
    full_name: function full_name() {
      return this.user.name.forename + ' ' + this.user.name.surname;
    }
  },
  methods: {
    add: function add() {
      this.isAdding = true;
      this.$emit('add-user');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/EditActivity.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/pages/EditActivity.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/errors/ErrorBus */ "./resources/frontend/modules/errors/ErrorBus.js");
/* harmony import */ var _applications_activities_activities_pages_EditDetailsTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @applications/activities/activities/pages/EditDetailsTab */ "./resources/frontend/applications/activities/activities/pages/EditDetailsTab.vue");
/* harmony import */ var _applications_activities_activities_pages_EditImageTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @applications/activities/activities/pages/EditImageTab */ "./resources/frontend/applications/activities/activities/pages/EditImageTab.vue");
/* harmony import */ var _applications_activities_activities_pages_EditStaffTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @applications/activities/activities/pages/EditStaffTab */ "./resources/frontend/applications/activities/activities/pages/EditStaffTab.vue");
/* harmony import */ var _components_portlets_standard_BrandPortlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/portlets/standard/BrandPortlet */ "./resources/frontend/components/portlets/standard/BrandPortlet.vue");
/* harmony import */ var _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/layout/header/FeatureHeader */ "./resources/frontend/components/layout/header/FeatureHeader.vue");
/* harmony import */ var _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/layout/header/ContextMenu */ "./resources/frontend/components/layout/header/ContextMenu.vue");
/* harmony import */ var _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/layout/header/ContextMenuItem */ "./resources/frontend/components/layout/header/ContextMenuItem.vue");
/* harmony import */ var _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/spinners/LargeSpinner */ "./resources/frontend/components/spinners/LargeSpinner.vue");
/* harmony import */ var _components_portlets_tabbed_TabbedPortlet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/portlets/tabbed/TabbedPortlet */ "./resources/frontend/components/portlets/tabbed/TabbedPortlet.vue");
/* harmony import */ var _components_portlets_tabbed_PortletTab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/portlets/tabbed/PortletTab */ "./resources/frontend/components/portlets/tabbed/PortletTab.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'edit-activity',
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
      activity: null,
      isDangerousPortlet: false
    };
  },
  components: {
    EditImageTab: _applications_activities_activities_pages_EditImageTab__WEBPACK_IMPORTED_MODULE_2__["default"],
    EditDetailsTab: _applications_activities_activities_pages_EditDetailsTab__WEBPACK_IMPORTED_MODULE_1__["default"],
    EditStaffTab: _applications_activities_activities_pages_EditStaffTab__WEBPACK_IMPORTED_MODULE_3__["default"],
    PortletTab: _components_portlets_tabbed_PortletTab__WEBPACK_IMPORTED_MODULE_10__["default"],
    TabbedPortlet: _components_portlets_tabbed_TabbedPortlet__WEBPACK_IMPORTED_MODULE_9__["default"],
    LargeSpinner: _components_spinners_LargeSpinner__WEBPACK_IMPORTED_MODULE_8__["default"],
    ContextMenuItem: _components_layout_header_ContextMenuItem__WEBPACK_IMPORTED_MODULE_7__["default"],
    ContextMenu: _components_layout_header_ContextMenu__WEBPACK_IMPORTED_MODULE_6__["default"],
    FeatureHeader: _components_layout_header_FeatureHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
    BrandPortlet: _components_portlets_standard_BrandPortlet__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: {
    title: function title() {
      return this.activity ? 'Edit Activity: ' + this.activity.name : 'Edit Activity';
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
        _this2.activity = response.data.data;
      }).catch(function (error) {
        return console.log(error);
      });
    },
    checkPortletTab: function checkPortletTab() {}
  },
  mounted: function mounted() {
    this.loadCollection();
    this.loadActivity();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/EditDetailsTab.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/pages/EditDetailsTab.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_forms_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/forms/Form */ "./resources/frontend/modules/forms/Form.js");
/* harmony import */ var _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/alerts/Toast */ "./resources/frontend/modules/alerts/Toast.js");
/* harmony import */ var _applications_activities_activities_components_ActivityForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @applications/activities/activities/components/ActivityForm */ "./resources/frontend/applications/activities/activities/components/ActivityForm.vue");
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
  name: 'edit-details-tab',
  components: {
    ActivityForm: _applications_activities_activities_components_ActivityForm__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    collection: {
      required: true
    },
    activity: {
      required: true
    }
  },
  data: function data() {
    return {
      form: new _modules_forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: this.activity.name,
        description: this.activity.description,
        places: this.activity.places,
        price: Number(this.activity.price.raw / 100),
        starts_at: this.activity.dates.starts_at,
        ends_at: this.activity.dates.ends_at
      })
    };
  },
  computed: {
    cancelUrl: function cancelUrl() {
      return '/activity-collections/' + this.collection.id + '/activities/' + this.activity.id;
    }
  },
  methods: {
    updateActivity: function updateActivity() {
      this.form.put('/activity-collections/' + this.collection.id + '/activities/' + this.activity.id).then(function () {
        return new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_1__["default"]().success('This activity has been updated.');
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/EditImageTab.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/pages/EditImageTab.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _components_buttons_basic_DangerButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/buttons/basic/DangerButton */ "./resources/frontend/components/buttons/basic/DangerButton.vue");
//
//
//
//
//
//
//
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
    DangerButton: _components_buttons_basic_DangerButton__WEBPACK_IMPORTED_MODULE_7__["default"],
    FormRow: _components_forms_layouts_FormRow__WEBPACK_IMPORTED_MODULE_6__["default"],
    SecondaryButton: _components_buttons_basic_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__["default"],
    BrandButton: _components_buttons_submit_BrandButton__WEBPACK_IMPORTED_MODULE_4__["default"],
    FormActions: _components_portlets_footers_FormActions__WEBPACK_IMPORTED_MODULE_3__["default"],
    HorizontalForm: _components_forms_HorizontalForm__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    collection: {
      required: true
    },
    activity: {
      required: true
    }
  },
  computed: {
    cancelUrl: function cancelUrl() {
      return '/activity-collections/' + this.collection.id + '/activities/' + this.activity.id;
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

      this.form.upload('/activity-collections/' + this.collection.id + '/activities/' + this.activity.id + '/image').then(function () {
        new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_1__["default"]().success('The image has been successfully uploaded.');

        _this.$router.push('/activity-collections/' + _this.collection.id + '/activities/' + _this.activity.id);
      }).catch(function (error) {
        return console.log(error);
      });
    },
    deleteImage: function deleteImage() {
      window.axios.delete('/activity-collections/' + this.collection.id + '/activities/' + this.activity.id + '/image').then(function () {
        return new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_1__["default"]().success('The image has been deleted. The image for the collection will be used until you upload a new image.');
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/EditStaffTab.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/pages/EditStaffTab.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applications_activities_activities_components_UserList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @applications/activities/activities/components/UserList */ "./resources/frontend/applications/activities/activities/components/UserList.vue");
/* harmony import */ var _applications_activities_activities_components_StaffSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @applications/activities/activities/components/StaffSearch */ "./resources/frontend/applications/activities/activities/components/StaffSearch.vue");
/* harmony import */ var _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/alerts/Toast */ "./resources/frontend/modules/alerts/Toast.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'edit-staff-tab',
  props: {
    collection: {
      required: true
    },
    activity: {
      required: true
    }
  },
  components: {
    StaffSearch: _applications_activities_activities_components_StaffSearch__WEBPACK_IMPORTED_MODULE_1__["default"],
    UserList: _applications_activities_activities_components_UserList__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      users: []
    };
  },
  methods: {
    removeUser: function removeUser(payload) {
      var _this = this;

      window.axios.delete('/activity-collections/' + this.collection.id + '/activities/' + this.activity.id + '/staff/' + payload.user.id).then(function () {
        _this.users = _this.users.filter(function (obj) {
          return obj.id !== payload.user.id;
        });
        new _modules_alerts_Toast__WEBPACK_IMPORTED_MODULE_2__["default"]().success(payload.user.name.forename + ' ' + payload.user.name.surname + ' has been removed from the activity.');
      }).catch(function (error) {
        _modules_errors_ErrorBus__WEBPACK_IMPORTED_MODULE_3__["default"].record(error.response.data);
      });
    },
    addUser: function addUser(payload) {
      this.users.push(payload.user);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    window.axios.get('/activity-collections/' + this.collection.id + '/activities/' + this.activity.id + '/staff').then(function (response) {
      return _this2.users = response.data.data;
    });
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=style&index=0&id=e0bed794&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=style&index=0&id=e0bed794&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.results[data-v-e0bed794] {\n    padding: 15px;\n    background-color: #f9f9f9;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=style&index=0&id=23f44be0&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=style&index=0&id=23f44be0&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.removing[data-v-23f44be0] {\n    opacity: 0.5;\n}\nimg.avatar[data-v-23f44be0] {\n    max-width: 20px;\n    max-height: 20px;\n}\ntr > td[data-v-23f44be0] {\n    vertical-align: middle;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=style&index=0&id=252191e8&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=style&index=0&id=252191e8&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.result .m-loader[data-v-252191e8] {\n    vertical-align: middle;\n    margin-right: 15px;\n}\n.result.adding[data-v-252191e8] {\n    opacity: 0.5;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=style&index=0&id=e0bed794&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=style&index=0&id=e0bed794&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StaffSearch.vue?vue&type=style&index=0&id=e0bed794&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=style&index=0&id=e0bed794&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=style&index=0&id=23f44be0&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=style&index=0&id=23f44be0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserItem.vue?vue&type=style&index=0&id=23f44be0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=style&index=0&id=23f44be0&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=style&index=0&id=252191e8&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=style&index=0&id=252191e8&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSearchItem.vue?vue&type=style&index=0&id=252191e8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=style&index=0&id=252191e8&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=template&id=e0bed794&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=template&id=e0bed794&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
      _c("text-input", {
        attrs: { icon: "la la-user", placeholder: "Search Staff" },
        model: {
          value: _vm.searchTerm,
          callback: function($$v) {
            _vm.searchTerm = $$v
          },
          expression: "searchTerm"
        }
      }),
      _vm._v(" "),
      _c("exception-alert", { attrs: { target: "search_error" } }),
      _vm._v(" "),
      _vm.shouldDisplayResults
        ? _c(
            "actionable-descriptive-list",
            { staticClass: "results" },
            _vm._l(_vm.results, function(user) {
              return _c("user-search-item", {
                key: user.id,
                attrs: { user: user },
                on: {
                  "add-user": function($event) {
                    _vm.addUser(user)
                  }
                }
              })
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isLoadingResults ? _c("large-spinner") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=template&id=23f44be0&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=template&id=23f44be0&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
    "actionable-item",
    {
      attrs: {
        title: _vm.full_name,
        description: _vm.user.email,
        image: _vm.user.avatar.url
      }
    },
    [
      !_vm.removing
        ? _c("danger-button", {
            attrs: { icon: "fa flaticon-delete-1" },
            on: { click: _vm.remove }
          })
        : _c("div", {
            staticClass: "m-loader m-loader--lg",
            staticStyle: { width: "30px", display: "inline-block" }
          })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserList.vue?vue&type=template&id=2df9c3eb&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/components/UserList.vue?vue&type=template&id=2df9c3eb& ***!
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
    "actionable-descriptive-list",
    [
      _vm._l(_vm.users, function(user) {
        return _c("user-item", {
          key: user.id,
          attrs: { user: user },
          on: {
            "remove-staff": function($event) {
              _vm.$emit("remove-user", { user: user })
            }
          }
        })
      }),
      _vm._v(" "),
      _vm.users.length == 0
        ? _c("div", [
            _c("p", [_vm._v("There aren't any users in this activity yet!")])
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=template&id=252191e8&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=template&id=252191e8&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
    "actionable-item",
    {
      class: _vm.resultClass,
      attrs: {
        image: _vm.user.avatar.url,
        title: _vm.full_name,
        description: _vm.user.email
      }
    },
    [
      [
        !_vm.isAdding
          ? _c("brand-button", {
              attrs: { icon: "fa flaticon-user-add" },
              on: { click: _vm.add }
            })
          : _c("span", { staticClass: "m-loader m-loader--lg" })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/EditActivity.vue?vue&type=template&id=6efa042a&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/pages/EditActivity.vue?vue&type=template&id=6efa042a& ***!
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
              )
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
            ? _c(
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
                        attrs: {
                          activity: _vm.activity,
                          collection: _vm.collection
                        }
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
                        attrs: {
                          collection: _vm.collection,
                          activity: _vm.activity
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "portlet-tab",
                    { attrs: { name: "Staff", icon: "la la-users" } },
                    [
                      _c("edit-staff-tab", {
                        attrs: {
                          collection: _vm.collection,
                          activity: _vm.activity
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("portlet-tab", {
                    attrs: { name: "Delete", icon: "la la-trash" }
                  })
                ],
                1
              )
            : _c("large-spinner")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/EditDetailsTab.vue?vue&type=template&id=2ced2dcf&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/pages/EditDetailsTab.vue?vue&type=template&id=2ced2dcf& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("activity-form", {
    attrs: {
      form: _vm.form,
      collection: _vm.collection,
      "cancel-url": _vm.cancelUrl,
      "submit-label": "Update Activity"
    },
    on: { submit: _vm.updateActivity }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/EditImageTab.vue?vue&type=template&id=2e7bd996&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/pages/EditImageTab.vue?vue&type=template&id=2e7bd996& ***!
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
              "Pick a new image to use for this activity. The best images to use are horizontal layouts as they will be cropped to fit into spaces available.",
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
          _c(
            "danger-button",
            { staticClass: "pull-right", on: { click: _vm.deleteImage } },
            [_vm._v("Delete")]
          ),
          _vm._v(" "),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/EditStaffTab.vue?vue&type=template&id=6149f071&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/frontend/applications/activities/activities/pages/EditStaffTab.vue?vue&type=template&id=6149f071& ***!
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-md-7" },
      [
        _c("user-list", {
          attrs: { users: _vm.users },
          on: { "remove-user": _vm.removeUser }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-5" },
      [
        _c("staff-search", {
          attrs: { collection: _vm.collection, activity: _vm.activity },
          on: { "user-added": _vm.addUser }
        })
      ],
      1
    )
  ])
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

/***/ "./resources/frontend/applications/activities/activities/components/StaffSearch.vue":
/*!******************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/components/StaffSearch.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StaffSearch_vue_vue_type_template_id_e0bed794_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StaffSearch.vue?vue&type=template&id=e0bed794&scoped=true& */ "./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=template&id=e0bed794&scoped=true&");
/* harmony import */ var _StaffSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StaffSearch.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StaffSearch_vue_vue_type_style_index_0_id_e0bed794_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StaffSearch.vue?vue&type=style&index=0&id=e0bed794&scoped=true&lang=css& */ "./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=style&index=0&id=e0bed794&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StaffSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StaffSearch_vue_vue_type_template_id_e0bed794_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StaffSearch_vue_vue_type_template_id_e0bed794_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e0bed794",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/activities/components/StaffSearch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StaffSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=style&index=0&id=e0bed794&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=style&index=0&id=e0bed794&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffSearch_vue_vue_type_style_index_0_id_e0bed794_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StaffSearch.vue?vue&type=style&index=0&id=e0bed794&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=style&index=0&id=e0bed794&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffSearch_vue_vue_type_style_index_0_id_e0bed794_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffSearch_vue_vue_type_style_index_0_id_e0bed794_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffSearch_vue_vue_type_style_index_0_id_e0bed794_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffSearch_vue_vue_type_style_index_0_id_e0bed794_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffSearch_vue_vue_type_style_index_0_id_e0bed794_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=template&id=e0bed794&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=template&id=e0bed794&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffSearch_vue_vue_type_template_id_e0bed794_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StaffSearch.vue?vue&type=template&id=e0bed794&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/StaffSearch.vue?vue&type=template&id=e0bed794&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffSearch_vue_vue_type_template_id_e0bed794_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffSearch_vue_vue_type_template_id_e0bed794_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/applications/activities/activities/components/UserItem.vue":
/*!***************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/components/UserItem.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserItem_vue_vue_type_template_id_23f44be0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserItem.vue?vue&type=template&id=23f44be0&scoped=true& */ "./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=template&id=23f44be0&scoped=true&");
/* harmony import */ var _UserItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserItem.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserItem_vue_vue_type_style_index_0_id_23f44be0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserItem.vue?vue&type=style&index=0&id=23f44be0&scoped=true&lang=css& */ "./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=style&index=0&id=23f44be0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserItem_vue_vue_type_template_id_23f44be0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserItem_vue_vue_type_template_id_23f44be0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "23f44be0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/activities/components/UserItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=style&index=0&id=23f44be0&scoped=true&lang=css&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=style&index=0&id=23f44be0&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserItem_vue_vue_type_style_index_0_id_23f44be0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserItem.vue?vue&type=style&index=0&id=23f44be0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=style&index=0&id=23f44be0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserItem_vue_vue_type_style_index_0_id_23f44be0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserItem_vue_vue_type_style_index_0_id_23f44be0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserItem_vue_vue_type_style_index_0_id_23f44be0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserItem_vue_vue_type_style_index_0_id_23f44be0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserItem_vue_vue_type_style_index_0_id_23f44be0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=template&id=23f44be0&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=template&id=23f44be0&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserItem_vue_vue_type_template_id_23f44be0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserItem.vue?vue&type=template&id=23f44be0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserItem.vue?vue&type=template&id=23f44be0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserItem_vue_vue_type_template_id_23f44be0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserItem_vue_vue_type_template_id_23f44be0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/applications/activities/activities/components/UserList.vue":
/*!***************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/components/UserList.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserList_vue_vue_type_template_id_2df9c3eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=2df9c3eb& */ "./resources/frontend/applications/activities/activities/components/UserList.vue?vue&type=template&id=2df9c3eb&");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/activities/components/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserList_vue_vue_type_template_id_2df9c3eb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserList_vue_vue_type_template_id_2df9c3eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/activities/components/UserList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/components/UserList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/components/UserList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/components/UserList.vue?vue&type=template&id=2df9c3eb&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/components/UserList.vue?vue&type=template&id=2df9c3eb& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_2df9c3eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=template&id=2df9c3eb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserList.vue?vue&type=template&id=2df9c3eb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_2df9c3eb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_2df9c3eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/applications/activities/activities/components/UserSearchItem.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/components/UserSearchItem.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSearchItem_vue_vue_type_template_id_252191e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSearchItem.vue?vue&type=template&id=252191e8&scoped=true& */ "./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=template&id=252191e8&scoped=true&");
/* harmony import */ var _UserSearchItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSearchItem.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserSearchItem_vue_vue_type_style_index_0_id_252191e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserSearchItem.vue?vue&type=style&index=0&id=252191e8&scoped=true&lang=css& */ "./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=style&index=0&id=252191e8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserSearchItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSearchItem_vue_vue_type_template_id_252191e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSearchItem_vue_vue_type_template_id_252191e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "252191e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/activities/components/UserSearchItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSearchItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSearchItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSearchItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=style&index=0&id=252191e8&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=style&index=0&id=252191e8&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSearchItem_vue_vue_type_style_index_0_id_252191e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSearchItem.vue?vue&type=style&index=0&id=252191e8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=style&index=0&id=252191e8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSearchItem_vue_vue_type_style_index_0_id_252191e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSearchItem_vue_vue_type_style_index_0_id_252191e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSearchItem_vue_vue_type_style_index_0_id_252191e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSearchItem_vue_vue_type_style_index_0_id_252191e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSearchItem_vue_vue_type_style_index_0_id_252191e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=template&id=252191e8&scoped=true&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=template&id=252191e8&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSearchItem_vue_vue_type_template_id_252191e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSearchItem.vue?vue&type=template&id=252191e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/components/UserSearchItem.vue?vue&type=template&id=252191e8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSearchItem_vue_vue_type_template_id_252191e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSearchItem_vue_vue_type_template_id_252191e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/applications/activities/activities/pages/EditActivity.vue":
/*!**************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/EditActivity.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditActivity_vue_vue_type_template_id_6efa042a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditActivity.vue?vue&type=template&id=6efa042a& */ "./resources/frontend/applications/activities/activities/pages/EditActivity.vue?vue&type=template&id=6efa042a&");
/* harmony import */ var _EditActivity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditActivity.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/activities/pages/EditActivity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditActivity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditActivity_vue_vue_type_template_id_6efa042a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditActivity_vue_vue_type_template_id_6efa042a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/activities/pages/EditActivity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/pages/EditActivity.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/EditActivity.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditActivity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditActivity.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/EditActivity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditActivity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/pages/EditActivity.vue?vue&type=template&id=6efa042a&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/EditActivity.vue?vue&type=template&id=6efa042a& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditActivity_vue_vue_type_template_id_6efa042a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditActivity.vue?vue&type=template&id=6efa042a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/EditActivity.vue?vue&type=template&id=6efa042a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditActivity_vue_vue_type_template_id_6efa042a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditActivity_vue_vue_type_template_id_6efa042a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/applications/activities/activities/pages/EditDetailsTab.vue":
/*!****************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/EditDetailsTab.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditDetailsTab_vue_vue_type_template_id_2ced2dcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditDetailsTab.vue?vue&type=template&id=2ced2dcf& */ "./resources/frontend/applications/activities/activities/pages/EditDetailsTab.vue?vue&type=template&id=2ced2dcf&");
/* harmony import */ var _EditDetailsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditDetailsTab.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/activities/pages/EditDetailsTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditDetailsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditDetailsTab_vue_vue_type_template_id_2ced2dcf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditDetailsTab_vue_vue_type_template_id_2ced2dcf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/activities/pages/EditDetailsTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/pages/EditDetailsTab.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/EditDetailsTab.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDetailsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditDetailsTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/EditDetailsTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDetailsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/pages/EditDetailsTab.vue?vue&type=template&id=2ced2dcf&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/EditDetailsTab.vue?vue&type=template&id=2ced2dcf& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDetailsTab_vue_vue_type_template_id_2ced2dcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditDetailsTab.vue?vue&type=template&id=2ced2dcf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/EditDetailsTab.vue?vue&type=template&id=2ced2dcf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDetailsTab_vue_vue_type_template_id_2ced2dcf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDetailsTab_vue_vue_type_template_id_2ced2dcf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/applications/activities/activities/pages/EditImageTab.vue":
/*!**************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/EditImageTab.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditImageTab_vue_vue_type_template_id_2e7bd996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditImageTab.vue?vue&type=template&id=2e7bd996& */ "./resources/frontend/applications/activities/activities/pages/EditImageTab.vue?vue&type=template&id=2e7bd996&");
/* harmony import */ var _EditImageTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditImageTab.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/activities/pages/EditImageTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditImageTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditImageTab_vue_vue_type_template_id_2e7bd996___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditImageTab_vue_vue_type_template_id_2e7bd996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/activities/pages/EditImageTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/pages/EditImageTab.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/EditImageTab.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditImageTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditImageTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/EditImageTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditImageTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/pages/EditImageTab.vue?vue&type=template&id=2e7bd996&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/EditImageTab.vue?vue&type=template&id=2e7bd996& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditImageTab_vue_vue_type_template_id_2e7bd996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditImageTab.vue?vue&type=template&id=2e7bd996& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/EditImageTab.vue?vue&type=template&id=2e7bd996&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditImageTab_vue_vue_type_template_id_2e7bd996___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditImageTab_vue_vue_type_template_id_2e7bd996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/frontend/applications/activities/activities/pages/EditStaffTab.vue":
/*!**************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/EditStaffTab.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditStaffTab_vue_vue_type_template_id_6149f071___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditStaffTab.vue?vue&type=template&id=6149f071& */ "./resources/frontend/applications/activities/activities/pages/EditStaffTab.vue?vue&type=template&id=6149f071&");
/* harmony import */ var _EditStaffTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditStaffTab.vue?vue&type=script&lang=js& */ "./resources/frontend/applications/activities/activities/pages/EditStaffTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditStaffTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditStaffTab_vue_vue_type_template_id_6149f071___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditStaffTab_vue_vue_type_template_id_6149f071___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/applications/activities/activities/pages/EditStaffTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/pages/EditStaffTab.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/EditStaffTab.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditStaffTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditStaffTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/EditStaffTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditStaffTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/applications/activities/activities/pages/EditStaffTab.vue?vue&type=template&id=6149f071&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/frontend/applications/activities/activities/pages/EditStaffTab.vue?vue&type=template&id=6149f071& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditStaffTab_vue_vue_type_template_id_6149f071___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditStaffTab.vue?vue&type=template&id=6149f071& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/frontend/applications/activities/activities/pages/EditStaffTab.vue?vue&type=template&id=6149f071&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditStaffTab_vue_vue_type_template_id_6149f071___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditStaffTab_vue_vue_type_template_id_6149f071___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);