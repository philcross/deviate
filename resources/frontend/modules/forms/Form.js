import FormValidation from '@modules/forms/FormValidation';

export default function (data) {
    this.originalData = typeof data === 'undefined' ? {} : data;
    this.isSubmitting = false;
    this.isUpload = false;

    for (let field in this.originalData) {
        this[field] = this.originalData[field];
    }

    this.validationErrors = new FormValidation;

    this.manualSet = function (property, value) {
        this.originalData[property] = value;
        this[property] = value;

        return this;
    }

    this.data = function () {
        if (this.isUpload) {
            return this.formData();
        }

        let data = {};

        for (let property in this.originalData) {
            data[property] = this[property];
        }

        return data;
    };

    this.formData = function () {
        let formDataObject = new FormData();

        for (let property in this.originalData) {
            formDataObject.append(property, this[property]);
        }

        return formDataObject;
    }

    this.post = function (url) {
        return this.submit('post', url, {});
    };

    this.upload = function (url) {
        this.isUpload = true;

        return this.submit('post', url, {
            'Content-Type': 'multipart/form-data'
        });
    };

    this.put = function (url) {
        return this.submit('put', url, {});
    };

    this.delete = function (url) {
        return this.submit('delete', url, {});
    };

    this.patch = function (url) {
        return this.submit('patch', url, {});
    };

    this.reset = function () {
        for (let property in this.originalData) {
            this[property] = this.originalData[property];
        }

        this.validationErrors.reset();
    }

    this.submit = function (requestType, url, customHeaders) {
        let self = this;

        this.isSubmitting = true;

        return new Promise((resolve, reject) => {
            window.axios[requestType](url, this.data(), {
                headers: customHeaders
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                if (error.response.data.status === 422) {
                    self.validationErrors.record(error.response.data.additional.errors);
                }

                reject(error.response.data);
            })
            .then(() => self.isSubmitting = false )
        });
    }
}
