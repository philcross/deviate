<template>
    <div>
        <text-input v-model="searchTerm" icon="la la-user" placeholder="Search Users"></text-input>

        <exception-alert target="search_error"></exception-alert>

        <actionable-descriptive-list class="results" v-if="shouldDisplayResults">
            <member-search-item v-for="user in results" :user="user" :usergroup="usergroup" :key="user.id" v-on:add-member="addMember(user)"></member-search-item>
        </actionable-descriptive-list>

        <large-spinner v-if="isLoadingResults"></large-spinner>
    </div>
</template>

<script>
    import _ from "lodash";

    import MemberSearchItem from '@applications/usergroups/components/MemberSearchItem';

    import ExceptionAlert from '@components/alerts/ExceptionAlert';
    import LargeSpinner from '@components/spinners/LargeSpinner';
    import TextInput from '@components/forms/layouts/with-icon/TextInput';
    import ActionableDescriptiveList from '@components/lists/basic/ActionableDescriptiveList';

    import ErrorBus from '@modules/errors/ErrorBus';
    import Toast from '@modules/alerts/Toast';

    export default {
        name: 'member-search',
        components: {
            LargeSpinner,
            TextInput,
            ExceptionAlert,
            ActionableDescriptiveList,
            MemberSearchItem,
        },
        props: {
            usergroup: { required: true, type: Object },
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

                window.axios.get('/usergroups/' + this.usergroup.id + '/members/eligible?filters[term]=' + this.searchTerm)
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
            addMember: function (user) {
                window.axios.post('/usergroups/' + this.usergroup.id + '/members/' + user.id)
                    .then(() => {
                        this.results = this.results.filter(obj => obj.id !== user.id);
                        (new Toast).success(user.name.forename + ' ' + user.name.surname + ' has been added to the usergroup.');
                    })
                    .catch(error => {
                        ErrorBus.record(error.response.data, 'search_error');
                    });

                this.$emit('member-added', { user });
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
