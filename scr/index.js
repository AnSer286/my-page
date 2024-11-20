import './styles.scss'; 

const toggleButton = document.querySelector(".toggle-drawer");
const drawer = document.querySelector(".navigation-drawer");



const modalDrawer = document.getElementById('modalDrawer');
const closeDrawerButton = document.querySelector('.close-drawer');

toggleButton.addEventListener('click', () => {
    modalDrawer.classList.toggle('open');
});

closeDrawerButton.addEventListener('click', () => {
    modalDrawer.classList.remove('open');
});

document.addEventListener("click", (event) => {
    const isClickInsideDrawer = modalDrawer.contains(event.target) || toggleButton.contains(event.target);

    if (!isClickInsideDrawer) {
        modalDrawer.classList.remove("open");
    }
});
