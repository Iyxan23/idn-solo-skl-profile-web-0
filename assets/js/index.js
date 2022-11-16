const header = document.querySelector('header');

window.onscroll = () => {
    if (scrollY > 0) {
        if (!header.classList.contains('collapsed')) {
            header.classList.add('collapsed');
            window.scrollBy(0, header.getBoundingClientRect().height);
        }
    } else {
        header.classList.remove('collapsed');
    }
}