function header_style() {
    const $div = document.querySelector('.header-content > div');
    if (window.innerWidth < 950) {
        $div.children[1].innerHTML = '<a href="https://github.com/Rafael-Rueda" target="_blank"> => Linkedin</a>'
        $div.children[2].innerHTML = '<a href="https://github.com/Rafael-Rueda" target="_blank"> => Github</a>'
    } else if (window.innerWidth < 1400) {
        $div.children[1].innerHTML = ' => Linkedin: <a href="https://www.linkedin.com/in/rafael-rueda-03477a237/" target="_blank">https://www.linkedin.com/in/rafael-rueda-03477a237/</a>'
        $div.children[2].innerHTML = ' => Github: <a href="https://github.com/Rafael-Rueda" target="_blank">https://github.com/Rafael-Rueda</a>'
    } else {
        $div.children[1].innerHTML = '<a href="https://github.com/Rafael-Rueda" target="_blank"> => Linkedin</a>'
        $div.children[2].innerHTML = '<a href="https://github.com/Rafael-Rueda" target="_blank"> => Github</a>'
    }
    
}

window.addEventListener('load', header_style);
window.addEventListener('resize', header_style)
