export const getFilterSlides = (houseList, category) => {
    return houseList.filter(element => element.category === category);
}

export const toggleActiveClass = (e) => {
    const parentEl = e.target.parentElement;
    parentEl.childNodes.forEach(child => {
        child.classList.remove('active');
    });
    e.target.classList.add('active');
}