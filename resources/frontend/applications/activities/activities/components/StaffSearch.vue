<template>
    <div>
        <text-input v-model="searchTerm" icon="la la-user" placeholder="Search Staff"></text-input>

        <exception-alert target="search_error"></exception-alert>

        <actionable-descriptive-list class="results" v-if="shouldDisplayResults">
            <user-search-item v-for="user in results" :user="user" :key="user.id" v-on:add-user="addUser(user)"></user-search-item>
        </actionable-descriptive-list>

        <large-spinner v-if="isLoadingResults"></large-spinner>
    </div>
</template>

<script>
    import _ from "lodash";

    import UserSearchItem from '@applications/activities/activities/components/UserSearchItem';

    import ExceptionAlert from '@components/alerts/ExceptionAlert';
    import LargeSpinner from '@components/spinners/LargeSpinner';
    import TextInput from '@components/forms/layouts/with-icon/TextInput';
    import ActionableDescriptiveList from '@components/lists/basic/ActionableDescriptiveList';

    import ErrorBus from '@modules/errors/ErrorBus';
    import Toast from '@modules/alerts/Toast';

    export default {
        name: 'staff-search',
        components: {
            LargeSpinner,
            TextInput,
            ExceptionAlert,
            ActionableDescriptiveList,
            UserSearchItem,
        },
        props: {
            collection: { required: true },
            activity: { required: true }
        },
        data: function () {
            return {
                isLoadingResults: false,
                isDisplayingResults: false,
                searchTerm: '',
                results: [],
            }
        },
        computed: {
            shouldDisplayResults: function () {
                return this.isDisplayingResults && this.results.length > 0;
            }
        },
        watch: {
            searchTerm: function () {
                this.getDebouncedSearchTerm();
            }
        },
        methods: {
            searchUsers: function () {
                ErrorBus.clear('search_error');

                this.isLoadingResults = true;
                this.isDisplayingResults = false;

                if (this.searchTerm.length === 0) {
                    this.isLoadingResults = false;
                    this.results = [];

                    return;
                }

                window.axios.get('/activity-collections/' + this.collection.id + '/activities/' + this.activity.id + '/staff/eligible?filters[term]=' + this.searchTerm)
                    .then(response => {
                        this.isDisplayingResults = true;
                        this.results = response.data.data;
                    })
                    .catch(error => {
                        ErrorBus.record(error.response.data, 'search_error');
                    })
                    .then(() => {
                        this.isLoadingResults = false;
                    })
            },
            addUser: function (user) {
                window.axios.post('/activity-collections/' + this.collection.id + '/activities/' + this.activity.id + '/staff/' + user.id)
                    .then(() => {
                        this.results = this.results.filter(obj => obj.id !== user.id);
                        (new Toast).success(user.name.forename + ' ' + user.name.surname + ' has been added to the activity.');
                    })
                    .catch(error => {
                        ErrorBus.record(error.response.data, 'search_error');
                    });

                this.$emit('user-added', { user });
            }
        },
        created: function () {
            this.getDebouncedSearchTerm = _.debounce(this.searchUsers, 500);
        },
    }
</script>

<style scoped>
    .results {
        padding: 15px;
        background-color: #f9f9f9;
    }
</style>
