var window_width = document.documentElement.clientWidth
var window_height = document.documentElement.clientHeight

//参考 https://myscreate.com/dom-acquisition/
(window.onload = function() {
    let out_link = document.getElementsByClassName('out-link');
    const out_link_array = Array.prototype.slice.call(out_link);
    out_link_array.forEach(function(item) {
        item.style.opacity =  1;
    });
})();
