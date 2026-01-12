/*!
 * modernizr.custom.js
 * Minimal stub for legacy compatibility
 */

(function (window, document) {
    "use strict";

    window.Modernizr = {
        touch: "ontouchstart" in window || navigator.maxTouchPoints > 0,
        flexbox: (function () {
            var d = document.createElement("div");
            d.style.display = "flex";
            return d.style.display === "flex";
        })()
    };

    document.documentElement.classList.add(
        window.Modernizr.touch ? "touch" : "no-touch"
    );
})(window, document);
