!(function (t, i) {
    jQuery.fn[i] = function (t) {
        return t
            ? this.bind(
                  "resize",
                  ((e = t),
                  function () {
                      var t = this,
                          i = arguments;
                      n ? clearTimeout(n) : a && e.apply(t, i),
                          (n = setTimeout(function () {
                              a || e.apply(t, i), (n = null);
                          }, r || 50));
                  })
              )
            : this.trigger(i);
        var e, r, a, n;
    };
})(jQuery, "smartresize"),
    (function (t) {
        "use strict";
        var i = t(".projects-list"),
            e = function () {
                var e, r, a;
                i.isotope({
                    resizable: !1,
                    itemSelector: ".project-item",
                    masonry: {
                        columnWidth:
                            ((e = i.width()),
                            (r = 2),
                            (a = 0),
                            e > 1199 ? (r = 6) : e > 991 ? (r = 5) : e > 767 ? (r = 4) : e > 620 ? (r = 3) : e > 454 ? (r = 2) : e > 310 && (r = 1),
                            (a = Math.floor(e / r)),
                            (a -= 0),
                            i.find(".project-item").each(function () {
                                var i = t(this),
                                    e = i.attr("class").match(/item-w(\d)/),
                                    r = e ? a * e[1] - 0 : a - 0;
                                i.css({ width: r });
                            }),
                            a),
                        gutter: 0,
                    },
                });
            };
        t(document).ready(function () {
            t("#filterNav").find("li.active"), i.isotope({ filter: t("li.active").attr("data-filter") });
        }),
            t("#filterNav").on("click", "li", function () {
                t("#filterNav").find("li").removeClass("active"), t(this).addClass("active");
                var e = t(this).attr("data-filter");
                i.isotope({ filter: e });
            }),
            e(),
            t(window).smartresize(e),
            t(window).load(function () {
                e();
            });
    })(jQuery);
