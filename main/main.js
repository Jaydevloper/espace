const headerlist = document.querySelector('.site-wrraper-list') 
const headerlistBTN = document.querySelector('.js-btn') 

headerlistBTN.addEventListener('click', () => {
headerlist.classList.toggle('site-wrraper-list--open')
})