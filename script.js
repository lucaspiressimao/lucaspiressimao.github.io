document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.querySelector(".sidebar");

    menuIcon.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });

    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); 
            menuItems.forEach(menu => menu.classList.remove('active'));
            this.classList.add('active');

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
            sidebar.classList.toggle("open");
        });
    });

    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                menuItems.forEach(menu => menu.classList.remove('active'));
                document.querySelector(`a[href="#${entry.target.id}"]`).classList.add('active');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
