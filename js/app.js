$(document).foundation();

function openFBLink() {
    setTimeout(function () { window.location = "https://www.facebook.com/christinalovelyreiki/"; }, 25);
    window.location = "fb://page/1801675033395776";
}

function openIGLink() {
    setTimeout(function () { window.location = "https://www.instagram.com/christinalovelyreiki/"; }, 25);
    window.location = "user?username=christinalovelyreiki";
}

var fbFooterElement = document.getElementById('fb-footer-element');
fbFooterElement.onclick = openFBLink;

var igFooterElement = document.getElementById('ig-footer-element');
igFooterElement.onclick = openIGLink;
