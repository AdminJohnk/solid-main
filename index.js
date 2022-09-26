function getID(id) {
    return document.getElementById(id);
}

document.getElementById('more').onclick = () => {
    var more = getID('more');
    var more__content = getID('more__content');
    if (more.innerHTML == 'More...') {
        more__content.style.display = 'block';
        more.innerHTML = 'Less...';
    } else {
         more__content.style.display = 'none';
        more.innerHTML = 'More...';
    }
}
