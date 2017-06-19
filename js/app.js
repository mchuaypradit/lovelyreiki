$(document).foundation();

// Open the Facebook app if installed (on mobile), else open website.
function openFBLink() {
    setTimeout(function () { window.location = "https://www.facebook.com/christinalovelyreiki/"; }, 25);
    window.location = "fb://page/1801675033395776";
}

// Open the Instagram app if installed (on mobile), else open website.
function openIGLink() {
    setTimeout(function () { window.location = "https://www.instagram.com/christinalovelyreiki/"; }, 25);
    window.location = "instagram://user?username=christinalovelyreiki";
}

// Focus on Name field in contact form after clicking the reset button.
function contactFormFocus() {
    document.getElementById('fullname').focus();
}

var fbFooterElement = document.getElementById('fb-footer-element');
fbFooterElement.onclick = openFBLink;

var igFooterElement = document.getElementById('ig-footer-element');
igFooterElement.onclick = openIGLink;

document.getElementById('contact-form-reset').onclick = contactFormFocus;
