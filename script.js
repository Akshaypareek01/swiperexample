document.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.box');
    const footer = document.querySelector('.footer');
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;

    boxes.forEach((box, index) => {
        const boxOffset = index * windowHeight;
        if (scrollPos >= boxOffset && scrollPos < boxOffset + windowHeight) {
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        } else {
            box.style.opacity = '0';
            box.style.transform = 'translateY(100px)';
        }
    });

    if (scrollPos >= (boxes.length * windowHeight)) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});
