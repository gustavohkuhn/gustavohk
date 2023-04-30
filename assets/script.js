// sidebar toggle variables
const menuToggler = document.querySelector('.menu-toggler');
const sideBar = document.querySelector('.side-bar');

// page navigation variables
const navItemLinks = document.querySelectorAll('.nav li a');
const pages = document.querySelectorAll('.page');

// variables for filtering
const filterBtn = document.querySelectorAll('.filter-item');
const itemCategory = document.querySelectorAll('.item-category');

// toggling sidebar in mobile
menuToggler.addEventListener('click', function () {
    sideBar.classList.toggle('active');
});

// page navigation functionality
for (let i = 0; i < navItemLinks.length; i++) {
    // added onclick event in nav links
    navItemLinks[i].addEventListener('click', function () {
        const itemLinkText = this.textContent.toLowerCase();

        for (let i = 0; i < pages.length; i++) {
            if (pages[i].classList.contains(itemLinkText)) {
                pages[i].classList.add('active');
                navItemLinks[i].classList.add('active');
            } else {
                pages[i].classList.remove('active');
                navItemLinks[i].classList.remove('active');
            }
        }
    });
}

// added eventListener in filter buttons
for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener('click', function () {

        for (let i = 0; i < filterBtn.length; i++) {
            filterBtn[i].classList.remove('active');
        }
        this.classList.add('active');

        for (let i = 0; i < itemCategory.length; i++) {
            const itemCategoryText = itemCategory[i].textContent;
            console.log(itemCategoryText);
            switch (this.textContent) {
                case itemCategoryText:
                    itemCategory[i].parentElement.classList.add('active');
                    break;
                case 'All':
                    itemCategory[i].parentElement.classList.add('active');
                    break;
                default:
                    itemCategory[i].parentElement.classList.remove('active');
            }
        }
    });
}