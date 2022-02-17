const imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
    image.removeAttribute('data-src');
    };
};
const imOption ={
    threshold: 1,
    rootMargin: '0 0 5px 0'
}
if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
            }
        });
        });
        imagesToLoad.forEach((img) => {
        observer.observe(img);
        }, imOption);
    } else {
        imagesToLoad.forEach((img) => {
        loadImages(img);
        });
    }
        