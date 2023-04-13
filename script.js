
document.addEventListener('DOMContentLoaded', function() {
    const elementsToShow = document.querySelectorAll('.contact-me, .location, .Projects, .sub-header2, .header, .contact, .sub-header1, .about');
    elementsToShow.forEach(function(element) {
        element.classList.add('show');
    });
});