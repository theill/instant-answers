(function() {
    "use strict";
    function IA() {

    }
    IA.prototype = {
        QUERY_PARAMETER: 'q',
        getParameterByName: function(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        },
        getQuery: function () {
            return this.getParameterByName(this.QUERY_PARAMETER);
        }
    };
    window.IA = new IA();
})();