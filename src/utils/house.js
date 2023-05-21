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

export const toggleItemsClass = (itemsWrapper, category) => {
    itemsWrapper.current.childNodes.forEach(element => {
        element.id === category
            ?
            element.classList.add('active')
            :
            element.classList.remove('active');
    });
}