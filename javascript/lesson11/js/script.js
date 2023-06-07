function app() {
    const form = document.querySelector('.form')
    const results = document.querySelector('.results')

    const profiles = []

    // form.onsubmit = function (event) {
    //     event.preventDefault();
    //     alert(1);
    //     console.log("sent");
    // };

    const receveFormEvent = (event) => {
        event.preventDefault();
        const firstName = form.querySelector('.first-name');
        const lastName = form.querySelector('.last-name');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        profiles.push(
            {
                "firstName": firstName.value,
                "lastName": lastName.value,
                "weight": weight.value,
                "height": height.value,
            }
        )
        console.log(profiles)

        results.innerHTML = ''
        profiles.forEach(profile => {
            results.innerHTML += `<p>Name: ${profile.firstName} ${profile.lastName}, weight: ${profile.weight}, height: ${profile.height}</p>`;
        });
    }

    form.addEventListener('submit', receveFormEvent);
}
app();