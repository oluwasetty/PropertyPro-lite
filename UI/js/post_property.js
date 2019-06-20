document.addEventListener("DOMContentLoaded", function (event) {
    const select = document.querySelector('#state');
    const city = document.querySelector('#city');
    const pix = document.querySelector('#pix');
    let states = [{"state":"Akwa Ibom","alias":"akwa_ibom","cities":["Eket","Ikot Ekpene","Oron","Uyo"]},{"state":"Bauchi","alias":"bauchi","cities":["Bauchi"]},{"state":"Benue","alias":"benue","cities":["Makurdi"]},{"state":"Borno","alias":"borno","cities":["Bama","Maiduguri"]},{"state":"Bayelsa","alias":"bayelsa","cities":["Yenagoa"]},{"state":"Delta","alias":"delta","cities":["Sapele"]},{"state":"Ebonyi","alias":"ebonyi","cities":["Abakaliki"]},{"state":"Ekiti","alias":"ekiti","cities":["Ado Ekiti"]},{"state":"Enugu","alias":"enugu","cities":["Enugu","Nsukka","Agbani","Awgu","Udi","Oji-River"]},{"state":"Gombe","alias":"gombe","cities":["Gombe"]},{"state":"Jigawa","alias":"jigawa","cities":["Dutse"]},{"state":"Imo","alias":"imo","cities":["Okigwe","Orlu"]},{"state":"Kaduna","alias":"kaduna","cities":["Kaduna","Zaria"]},{"state":"Kebbi","alias":"kebbi","cities":["Birnin Kebbi"]},{"state":"Kogi","alias":"kogi","cities":["Lokoja","Okene"]},{"state":"Lagos","alias":"lagos","cities":["Agege","Ikeja"]},{"state":"Katsina","alias":"katsina","cities":["Funtua","Katsina"]},{"state":"Kwara","alias":"kwara","cities":["Offa","Ilorin"]},{"state":"Nasarawa","alias":"nasarawa","cities":["Lafia"]},{"state":"Niger","alias":"niger","cities":["Bida","Suleja"]},{"state":"Ogun","alias":"ogun","cities":["Ijebu Ode","Shagamu"]},{"state":"Ondo","alias":"ondo","cities":["Owo"]},{"state":"Rivers","alias":"rivers","cities":["Port Harcourt"]},{"state":"Oyo","alias":"oyo","cities":["Oyo"]},{"state":"Osun","alias":"osun","cities":["Iwo","Osogbo"]},{"state":"Taraba","alias":"taraba","cities":["Wukari"]},{"state":"Yobe","alias":"yobe","cities":["Nguru","Potiskum"]},{"state":"Zamfara","alias":"zamfara","cities":["Gusau"]}]
    states.forEach(element => {
        let option = document.createElement('option');
        option.innerText = element.state;
        option.value = element.state;
        option.setAttribute('data-id', element.cities);
        select.appendChild(option);
    });
    select.addEventListener('change', function (event) {
        cities = this.options[this.selectedIndex].getAttribute('data-id').split(',');
        city.innerText = '';
        let option = document.createElement('option');
        option.setAttribute('selected', 'selected');
        option.setAttribute('value', '');
        option.setAttribute('hidden', 'hidden');
        option.innerText = 'Choose city'
        city.appendChild(option);
        for (let i = 0; i < cities.length; i++) {
            option = document.createElement('option');
            option.innerText = cities[i];
            option.value = cities[i];
            city.appendChild(option);
        };
    });
    pix.addEventListener('change', function (event) {
        //Get reference of FileUpload.
        var fileUpload = event.target.files[0];

        //Check whether the file is valid Image.
        var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.png|.gif)$");
        if (regex.test(fileUpload.name.toLowerCase())) {

            //Check whether HTML5 is supported.
            if (typeof (fileUpload.type) != "undefined") {
                // Get Filesize
                var size = parseFloat(fileUpload.size / 1024).toFixed(2);
                if (size > 1024) {
                    myAlert("Image size too large");
                } else {
                    document.querySelector('#imgpreview').src = URL.createObjectURL(event.target.files[0]);
                }
            } else {
                myAlert("This browser does not support HTML5.");
            }
        } else {
            myAlert("Please select a valid Image file.");
        }
    });
});