(function() { //truyen 1
    const nhan = document.querySelector('#box #boxshow ');
    const hien = document.getElementById('boxhide');
    nhan.addEventListener('click', function() {
        hien.classList.toggle('hide')
    })
    const nhan1 = document.querySelector('#box #box1show ');
    const hien1 = document.getElementById('box1hide');
    nhan1.addEventListener('click', function() {
        hien1.classList.toggle('hide')
    })

})();