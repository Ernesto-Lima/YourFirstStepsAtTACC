document.addEventListener("DOMContentLoaded", function(){
    var links = document.querySelectorAll('a[href^="http"]');
    links.forEach(function(link){
        link.target = '_blank';
    });
});
