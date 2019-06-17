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
});