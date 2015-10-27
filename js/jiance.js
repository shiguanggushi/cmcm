   //event listener form DOM ready
    function addLoadEvent(func) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function() {
                oldonload();
                func();
            }
        }
    }
    //call function after DOM ready
    addLoadEvent(
        outdatedBrowser({
            bgColor: '#222',
            color: '#c77405',
            lowerThan: 'borderImage'
        })
    );