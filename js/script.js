// Toggle class active untuk "Menu"
const navbarNav = document.querySelector('.navbar-nav');

// Ketika Menu di klik
document.querySelector('#Menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    navbarNav.focus();
    e.preventDefault();
};

// Toggle class active untuk "Search Form"
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

//Klik diluar elemen menu
const Menu =  document.querySelector ('#Menu');
const Search =  document.querySelector ('#search-button');

document.addEventListener('click', function(e) {
    if(!Menu.contains(e.target)&&!navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if(!Search.contains(e.target)&&!searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});

//Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');


itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
     itemDetailModal.style.display = 'flex';
     e.preventDefault();
    };

});

// Klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};


//Modal Box-1
const itemDetailModal1 = document.querySelector('#item-detail-modal-1');
const itemDetailButtons1 = document.querySelectorAll('.item-detail-button-1');


itemDetailButtons1.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal1.style.display = 'flex';
        e.preventDefault();
    };

});

// Klik tombol close modal-1
document.querySelector('.modal-1 .close-icon-1').onclick = (e) => {
    itemDetailModal1.style.display = 'none';
    e.preventDefault();
};

// Klik diluar modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
    if (e.target === itemDetailModal1) {
        itemDetailModal1.style.display = 'none';
    }
};

// Kirim pesan ke Admin
  function sendToWhatsApp() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telepon = document.getElementById("telepon").value;

    const pesan = `Assalamualaikum Admin Asrama Nurul Hidayah
    %0A%0ANama: ${nama}%0AEmail: ${email}%0ANomor HP: ${telepon}`;

    const noAdmin = "6283872261184"; // GANTI dengan nomor admin tanpa +, awali dengan 62

    window.open(`https://wa.me/${noAdmin}?text=${pesan}`, "_blank");
  };
