export default function () {
    this.errors = {};

    this.record = function (errors) {
        this.errors = errors;
    }

    this.has = function (field) {
        return typeof this.errors[field] !== 'undefined'
            && this.errors[field].length > 0;
    }

    this.get = function (field) {
        return this.has(field) ? this.errors[field] : [];
    }

    this.reset = function () {
        this.errors = {};
    }

    this.clear = function (field) {
        delete this.errors[field];
    }
}
