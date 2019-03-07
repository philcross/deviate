export default function (classConfig) {

    this.classConfig = classConfig;

    const defaultConfig = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "showDuration": "300",
        "hideDuration": "2000",
        "timeOut": "8000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    this.success = function (title, details, config) {
        toastr.success(details, title, this.getConfig(config)).css('width', '600px');
    }

    this.error = function (title, details, config) {
        toastr.error(details, title, this.getConfig(config)).css('width', '600px');
    }

    this.warning = function (title, details, config) {
        toastr.warning(details, title, this.getConfig(config)).css('width', '600px');
    }

    this.info = function (title, details, config) {
        toastr.info(details, title, this.getConfig(config)).css('width', '600px');
    }

    this.clear = function () {
        toastr.clear();
    }

    this.getConfig = function (config) {
        return Object.assign({}, defaultConfig, this.classConfig, config);
    }
}
