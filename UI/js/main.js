document.addEventListener('DOMContentLoaded', function (event) {
    let url = window.location.href;
    let links = document.getElementsByClassName('link');
    for (let link of links) {
        if (url == (link.href)){
            link.className = 'active';
        }
    }

    // Get the modal
    let modal = document.querySelector("#myModal");

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

    document.querySelector(".icon").addEventListener('click', function () {
        myFunction();
    })
});

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    const myFunction = () => {
    var x = document.querySelector("#myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      document.querySelector(".icon i").className.replace(/(?:^|\s)toggle(?!\S)/, '');
    } else {
      x.className = "topnav";
      document.querySelector(".icon i").className.replace(/(?:^|\s)times(?!\S)/, 'toggle');
    }
  }

    const myAlert = (msg) => {
        document.querySelector("#myModal").style.display = "block";
        document.querySelector(".modal-body").textContent = msg;
    }