import Vue from 'vue';

const ErrorBus = new Vue({
    methods: {
        record: function (exception, target) {
            exception.target = this.getTarget(target);

            this.clear(target);
            this.$emit('exception', exception);
        },

        clear: function (target) {
            this.$emit('clear', this.getTarget(target));
        },

        getTarget: function (givenTarget) {
            return typeof givenTarget === 'undefined' ? 'page' : givenTarget;
        }
    }
});

export default ErrorBus;
