function dropdown() {
    var x = document.getElementById("dropdown-menu");

    if (x.className.indexOf("dropdown") == -1) { 
        x.className += " dropdown";
    } else {
        x.className = x.className.replace(" dropdown", "");
    }
}

var aboutText = document.getElementById('about-text');
var aboutImage = document.getElementById('about-image');
var aboutShow = document.getElementById('about-show');

$('#about-show').click(function (e) {
    e.preventDefault();

    if (condition) {
        $('#about-image').addClass('display-none');
        $('#about-text').removeClass('display-none');
    } else {
        
    }
})