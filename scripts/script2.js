const images = document.querySelectorAll('.image-gallery img');
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        console.log(`Slika id:${index + 1}`);
    });
});
