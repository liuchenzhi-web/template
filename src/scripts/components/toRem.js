    /*font-size-change*/
    var docEl = document.documentElement;
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    recalc = (function recalc() {
        var clientWidth = docEl.clientWidth > 750 ? 750 : docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 12 * clientWidth / 320 + 'px';
        return recalc;
    })();

    //320/750
    window.addEventListener(resizeEvt, recalc, false);