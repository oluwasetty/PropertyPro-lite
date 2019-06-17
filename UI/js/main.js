document.addEventListener('DOMContentLoaded', function (event) {

    // Get the modal
    let modal = document.querySelector("#myModal");

    // Get the button that opens the modal
    let btn = document.querySelector(".myBtn");

    // Get the <span> element that closes the modal
    let span = document.querySelector(".close");

    // When the user clicks on <span> (x), close the modal
    span.addEventListener('click', function () {
        modal.style.display = "none";
    })

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    const myAlert = (msg) => {
        modal.style.display = "block";
        document.querySelector(".modal-body").textContent = msg;
    }
});