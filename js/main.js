const clickButton = document.querySelector('.toggle-btn');

clickButton.addEventListener('click', () => {
    // when that icon is clicked we are going to grab the nav element (or whatever is showing/hiding) and add or remove that special class we created in the CSS
    document.querySelector('nav').classList.toggle('show-nav');
});