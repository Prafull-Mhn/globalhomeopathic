document.getElementById('appointmentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('messageText').value;
    const city = document.getElementById('city').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    fetch('https://appointment-skc5.onrender.com/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            message: message,
            city: city,
             date: date,
             time: time,
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
        document.getElementById('appointmentForm').reset();
    })
    .catch(error => {
        document.getElementById('message').innerText = 'Failed to send the email. Please try again.';
    });
});

// Popup logic
var popup = document.getElementById("myPopup");
var openBtn = document.getElementById("openPopupBtn");
var openBtn2 = document.getElementById("openPopupBtn2");
var service = document.getElementById("takeSerivices");
var closeBtn = document.querySelector(".close");

openBtn.onclick = function () {
    popup.style.display = "block";
}

service.onclick = function () {
    popup.style.display = "block";
}
openBtn2.onclick = function () {
    popup.style.display = "block";
}

window.onload = function () {
    popup.style.display = "block";
    autoSlide();
}

closeBtn.onclick = function () {
    popup.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}


