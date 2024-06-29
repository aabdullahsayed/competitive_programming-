document.addEventListener('DOMContentLoaded', () => {
    const topicTitles = document.querySelectorAll('.topic-title');
    const topicNames = document.querySelectorAll('.topic-name');

    topicTitles.forEach(title => {
        title.addEventListener('click', () => {
            const targetId = title.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement.style.display === 'none' || targetElement.style.display === '') {
                targetElement.style.display = 'block';
                title.classList.add('clicked');
            } else {
                targetElement.style.display = 'none';
                title.classList.remove('clicked');
            }
        });
    });

    topicNames.forEach(name => {
        name.addEventListener('click', () => {
            const info = name.nextElementSibling;
            if (info.style.display === 'none' || info.style.display === '') {
                info.style.display = 'block';
                name.style.color = 'blue';
            } else {
                info.style.display = 'none';
                name.style.color = '#007bff';
            }
        });
    });
});
