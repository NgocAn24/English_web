(function() {
    //chon truyen//truyen 1
    const mo = document.querySelector('.box1 .truyen.t1');
    const dong = document.getElementById('truyen t1');

    mo.addEventListener('click', function() {

        dong.style.display = 'block';
        dong1.style.display = 'none';
        dong2.style.display = 'none';
        mo.style.display = 'none';
        mo1.style.display = 'flex';
        mo2.style.display = 'flex';
        mo2.style.transform = 'rotate(-5deg)';

    });

    //truyen 2
    const mo1 = document.querySelector('.box1 .truyen.t2');
    const dong1 = document.getElementById('truyen t2');

    mo1.addEventListener('click', function() {
        mo1.style.display = 'none';
        dong.style.display = 'none';
        dong1.style.display = 'block';
        dong2.style.display = 'none';
        mo.style.display = 'flex';
        mo2.style.display = 'flex';
        mo2.style.transform = 'rotate(-2.5deg)';
    });
    //truyen3
    const mo2 = document.querySelector('.box1 .truyen.t3');
    const dong2 = document.getElementById('truyen t3');

    mo2.addEventListener('click', function() {
        dong.style.display = 'none';
        dong1.style.display = 'none';
        dong2.style.display = 'block';
        mo2.style.display = 'none';
        mo.style.display = 'flex';
        mo1.style.display = 'flex';
    });

    const shows = document.querySelectorAll('#boxshow');
    const hides = document.querySelectorAll('#boxhide');

    shows.forEach((show, index) => {
        show.addEventListener('click', function() {
            hides[index].classList.toggle('hide');
        });
    });

})();