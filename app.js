document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Animate all sections to the right
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.left = "100%";
            });

            // Bring the clicked section into view
            targetSection.style.left = "0";
        });
    });
});
