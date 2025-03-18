document.getElementById('appointmentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('messageText').value;
    const city = document.getElementById('city').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const selectedDate = new Date(date);
    const selectedTime = time.split(':'); // Split time into hours and minutes
    const selectedHour = parseInt(selectedTime[0], 10);
    const selectedMinute = parseInt(selectedTime[1], 10);

    // Set the selected time on the selectedDate
    selectedDate.setHours(selectedHour, selectedMinute, 0, 0);

 // Get the current date and time
 const now = new Date();

 // Check if the selected date and time are in the past
 if (selectedDate <= now) {
     alert("Appointments cannot be booked for past date or time. Please select a future date and time.");
     return;
 }

    // Check if the selected date is Sunday
    if (selectedDate.getDay() === 0) {
        alert("Appointments cannot be booked on Sunday. Please select another date.");
        return;
    }

    // Check if the selected time is within the allowed time slots
    const isMorningSlot = selectedHour >= 10 && selectedHour < 13;
    const isEveningSlot = selectedHour >= 18 && selectedHour < 21;

    if (!isMorningSlot && !isEveningSlot) {
        alert("Appointments can only be booked between 10 AM to 1 PM or 6 PM to 9 PM. Please select a valid time.");
        return;
    }


    fetch('https://paisapay-dev.algoskytech.com/api/Common/sendEmail', {
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

closeBtn.onclick = function () {
    popup.style.display = "none";
}


window.onload = function () {
    popup.style.display = "block";
    autoSlide();
}

window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
