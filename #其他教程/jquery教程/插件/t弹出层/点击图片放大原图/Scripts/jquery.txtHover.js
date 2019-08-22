(function ($) {
    $.fn.txtHover = function (options) {
        var defaults = { txt: 'text changed!' };
        var options = $.extend(defaults, options);

        return this.each(function () {
            var self = $(this);
            var temp = self.text();
            self.hover(function () {
                self.text(options.txt);
            }, function () {
                self.text(temp);
            });
        });
    }
})(jQuery);