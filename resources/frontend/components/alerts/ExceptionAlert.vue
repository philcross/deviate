<template>
    <transition name="fade">
        <div :class="{ 'exception-content': exception }">
            <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="hasException">
                <button type="button" class="close" aria-label="Close" v-on:click="dismiss"></button>
                <strong>{{ title}}</strong>
                <p>{{ details }}</p>
                <ul v-if="hasValidationErrors">
                    <template v-for="(errors, field) in additional.errors">
                        <li v-for="(error, index) in errors" :key="field+index">{{ error }}</li>
                    </template>
                </ul>
                <p>ID: {{ id }} &nbsp; | &nbsp; Code: {{ code }}</p>
            </div>
        </div>
    </transition>
</template>

<script>
    import ErrorBus from '@modules/errors/ErrorBus';

    export default {
        name: "exception-alert",
        props: {
            target: { required: true, type: String },
            exception: { required: false, type: Boolean, default: false }
        },
        data: function () {
            return {
                hasException: false,
                title: '',
                details: '',
                id: '',
                code: '',
                additional: {},
            }
        },
        methods: {
            dismiss: function () {
                this.title = '';
                this.details = '';
                this.id = '';
                this.code = '';
                this.additional = {};
                this.hasException = false;
            },

            hasValidationErrors: function () {
                return this.additional && this.additional.errors && this.additional.errors.length;
            }
        },
        mounted: function () {
            ErrorBus.$on('exception', (exception) => {
                let target = exception.hasOwnProperty('target') ? exception.target : 'page';

                if (target === this.target) {
                    this.hasException = true;

                    this.title = exception.title;
                    this.details = exception.details;
                    this.id = exception.id;
                    this.code = exception.code;

                    this.additional = exception.hasOwnProperty('additional') ? exception.additional : {}
                }
            });

            ErrorBus.$on('clear', (target) => {
                if (target === this.target) {
                    this.dismiss();
                }
            });
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    @media (min-width: 1025px) {
        div.exception-content {
            padding-right: 0;
            padding-bottom: 0;
            padding-left: 20px;
        }
    }
</style>
