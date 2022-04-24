function draggable(Big, Small) {
    const elem = document.getElementById(Big);
    var pos1 = 0, pos2 = 0;
    var pos3 = 0, pos4 = 0;
    if (document.getElementById(Small)) {
        document.getElementById(Small).onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        if (e.button == 0) {
            pos3 = e.clientX;
            pos4 = e.clientY;
            // console.log(elem.offsetLeft + " / " + elem.offsetTop);
            document.onmousemove = elementDrag;
            document.onmouseup = closeDragElement;
        }
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        elem.style.left = (elem.offsetLeft - pos1) + "px";
        elem.style.top = (elem.offsetTop - pos2) + "px";
        pos3 = e.clientX;
        pos4 = e.clientY;
    }

    function closeDragElement(e) {
        document.onmousemove = null;
        document.onmouseup = null;
    }
}
draggable("big_todo", "small_todo");
draggable("big_weather", "small_weather");
draggable("big_setting", "small_setting");
draggable("big_clock", "small_clock");