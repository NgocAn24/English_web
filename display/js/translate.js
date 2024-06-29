(function() {


    const countries = {
        "en": "English",
        "vi": "Vietnamese"
    }

    const nhap = document.querySelector('.nhap');
    let dich = document.querySelector('.dich');
    change = document.querySelector('.change'),
        selectTag = document.querySelectorAll('select'),
        nut = document.querySelector("#btn_dich");

    selectTag.forEach((tag, id) => {
        for (let country_code in countries) {
            let selected = id == 0 ? country_code == "en" ? "selected" : "" : country_code == "vi" ? "selected" : "";
            let option = `<option ${selected} value ="${country_code}">${countries[country_code]}</option>`;
            tag.insertAdjacentHTML("beforeend", option);
        }
    });


    change.addEventListener("click", () => {
        let tempText = nhap.value,
            tempLang = selectTag[0].value;
        nhap.value = dich.value;
        dich.value = tempText;
        selectTag[0].value = selectTag[1].value;
        selectTag[1].value = tempLang;
    });


    nhap.addEventListener('keyup', () => {
        if (!nhap.value) {
            dich.value = "";
        }
    });


    nut.addEventListener("click", () => {
        let text = nhap.value.trim(),
            nhapvanban = selectTag[0].value,
            dichvanban = selectTag[1].value;
        if (!text) return;
        dich.setAttribute("placeholder", "Đang dịch...");

        let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${nhapvanban}|${dichvanban}`;
        fetch(apiUrl).then(res => res.json()).then(data => {
                if (data.responseData.translatedText) {
                    dich.value = data.responseData.translatedText;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                dich.value = "Dịch thất bại.";
            });
    });

})();