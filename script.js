document.addEventListener('DOMContentLoaded', function() {
    const topicTitles = document.querySelectorAll('.topic-title');

    topicTitles.forEach(title => {
        title.addEventListener('click', function() {
            const details = this.nextElementSibling;
            details.classList.toggle('show');
            this.classList.toggle('clicked');
        });
    });

    const topicNames = document.querySelectorAll('.topic-name');

    topicNames.forEach(name => {
        name.addEventListener('click', function() {
            const info = this.nextElementSibling.querySelector('.topic-info');
            info.classList.toggle('show');
            this.classList.toggle('clicked');
        });
    });
});
