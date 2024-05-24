(function() {
    //chon truyen//truyen 1
    const mo = document.querySelector('.box1 .truyen.t1'); // Selecting only the specific element with class "t1"
    const dong = document.getElementById('truyen t1'); // Selecting the element with the id "truyen t1"

    mo.addEventListener('click', function() {

        dong.style.display = 'block'; // Setting display to 'none' when clicked
        dong1.style.display = 'none';
        dong2.style.display = 'none';
        mo.style.display = 'none';
        mo1.style.display = 'flex';
        mo2.style.display = 'flex';
        mo2.style.transform = 'rotate(-5deg)';

    });


    const nhan = document.querySelector('#box  #boxshow');
    const hien = document.getElementById('boxhide');
    nhan.addEventListener('click', function() {
        hien.classList.toggle('hide');
    });

    const nhan_1 = document.querySelector('#box #box1show');
    const hien_1 = document.getElementById('box1hide');
    nhan_1.addEventListener('click', function() {
        hien_1.classList.toggle('hide');
    });

    //truyen 2
    const mo1 = document.querySelector('.box1 .truyen.t2'); // Selecting only the specific element with class "t1"
    const dong1 = document.getElementById('truyen t2'); // Selecting the element with the id "truyen t1"

    mo1.addEventListener('click', function() {
        mo1.style.display = 'none';
        dong.style.display = 'none';
        dong1.style.display = 'block';
        dong2.style.display = 'none';
        mo.style.display = 'flex';
        mo2.style.display = 'flex';
        mo2.style.transform = 'rotate(-2.5deg)';
    });

    const nhan1 = document.querySelector('#box #boxshow_1');
    const hien1 = document.getElementById('boxhide_1');
    nhan1.addEventListener('click', function() {
        hien1.classList.toggle('hide');
    });

    const nhan1_1 = document.querySelector('#box #box1show_1');
    const hien1_1 = document.getElementById('box1hide_1');
    nhan1_1.addEventListener('click', function() {
        hien1_1.classList.toggle('hide');
    });

    //truyen3
    const mo2 = document.querySelector('.box1 .truyen.t3'); // Selecting only the specific element with class "t1"
    const dong2 = document.getElementById('truyen t3'); // Selecting the element with the id "truyen t1"

    mo2.addEventListener('click', function() {
        dong.style.display = 'none';
        dong1.style.display = 'none';
        dong2.style.display = 'block'; // Setting display to 'none' when clicked
        mo2.style.display = 'none';
        mo.style.display = 'flex';
        mo1.style.display = 'flex';
    });
    const nhan2 = document.querySelector('#box #boxshow_2');
    const hien2 = document.getElementById('boxhide_2');
    nhan2.addEventListener('click', function() {
        hien2.classList.toggle('hide');
    });

})();