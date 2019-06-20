document.addEventListener("DOMContentLoaded", function (event) {
    const api = 'http://locationsng-api.herokuapp.com/api/v1/cities';
    const select = document.querySelector('#state');
    const city = document.querySelector('#city');
    const pix = document.querySelector('#pix');
    fetch(api)
        .then(response => response.json())
        .then(states => {
            states.forEach(element => {
                let option = document.createElement('option');
                option.innerText = element.state;
                option.value = element.state;
                option.setAttribute('data-id', element.cities);
                select.appendChild(option);
            });
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