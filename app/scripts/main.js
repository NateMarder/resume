$(document).ready(function () {

    console.log("page load event");
    $("#to-resume").bind("click", function () {
        openResume()
    });

});


function openResume() {

    window.open('resume.html', '_self');
}