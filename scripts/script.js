document.addEventListener('DOMContentLoaded', function() {
    var projects = document.querySelectorAll('.card-unhover');

    projects.forEach(function(project) {
        var thumbnails = project.querySelectorAll('.thumbnails img');
        var mainImage = project.querySelector('.main-image');

        thumbnails.forEach(function(thumbnail) {
            thumbnail.addEventListener('click', function() {
                var thumbnailSrc = thumbnail.src;
                mainImage.src = thumbnailSrc;
            });
        });
    });
});
