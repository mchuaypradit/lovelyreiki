$(document).foundation();

function openFBPage() {
    setTimeout(function () { window.location = "https://www.facebook.com/christinalovelyreiki/"; }, 25);
    window.location = "fb://page/1801675033395776";
}

var fbFooterElement = document.getElementById('fb-footer-element');
fbFooterElement.onclick = openFBPage;
