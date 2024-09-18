var ALERT_TITLE = "Error!";
var SUCCESS_TITLE = "Sucessful !";
var ALERT_BUTTON_TEXT = "Dismiss";

var SUCCESS_BUTTON_TEXT = "OK";

if (document.getElementById) {
    window.alert = function (txt) {
        createCustomAlert(txt);
    }
}

function createCustomAlert(txt) {
    d = document;
    if (d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if (d.all && !window.opera) alertObj.style.top = (document.documentElement.scrollTop + 100) + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px";
    alertObj.style.visiblity = "visible";

    h1 = alertObj.appendChild(d.createElement("h1"));

    if (txt.split('#')[1].trim() === "success")
    { h1.appendChild(d.createTextNode(SUCCESS_TITLE)); }
    else { h1.appendChild(d.createTextNode(ALERT_TITLE)); }



    msg = alertObj.appendChild(d.createElement("p"));
    //msg.appendChild(d.createTextNode(txt));
    msg.innerHTML = txt.split('#')[0].trim();
    btn = alertObj.appendChild(d.createElement("span"));
    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";

    if (txt.split('#')[1].trim() === "success")
    { btn.appendChild(d.createTextNode(SUCCESS_BUTTON_TEXT)); }
    else { btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT)); }

   


    btn.href = "#";
    btn.focus();
    btn.onclick = function () { removeCustomAlert(); return false; }

    alertObj.style.display = "block";

    if (txt.split('#')[1].trim() === "success")
    { alertObj.className = "inview"; }


    return false;

}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}
function ful() {
    alert('Alert this pages');
}