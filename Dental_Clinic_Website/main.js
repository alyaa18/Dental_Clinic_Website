
//   function scrollServicesLeft() {
//     document.getElementById("serviceScroll").scrollLeft -= 300;
//   }

// const { use } = require("react");

//   function scrollServicesRight() {
//     document.getElementById("serviceScroll").scrollLeft += 300;
//   }

function toggleReadMore() {
  const moreText = document.getElementById("more-text");
  const btn = document.getElementById("read-more-btn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('appointmentForm');

  form.addEventListener('submit', function (event)
   {
    event.preventDefault(); 
    const name = form.fullName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const message = form.message.value;

    console.log("Appointment Details:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Date:", date);
    console.log("Message:", message);

    // alert("Your appointment has been recorded! Check the console for details.");

    form.reset(); 
  });
});
document.querySelectorAll('.social').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const site = this.classList.contains('fb') ? 'Facebook' :
                 this.classList.contains('tw') ? 'Twitter' :
                 this.classList.contains('gp') ? 'Google Plus' : 'Social Media';
    alert(`You are being redirected to ${site}`);
  });
});

//PATIENT/DOCTOR

  document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('appointmentForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const user = JSON.parse(sessionStorage.getItem("currentUser"));

    if (!user) {
      alert("You must be signed in to make an appointment.");
      window.location.href = "SignIn.html";
      return;
    }

    if (user.role === "doctor") {
      alert("Only signed-in patients can make appointments. Doctors are not allowed to book.");
      return;
    }

    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const date = form.date.value;
    const message = form.message.value.trim();

    const appointment = {
      patientEmail: user.email,
      fullName,
      email,
      phone,
      date,
      message
    };

    const appointments = JSON.parse(sessionStorage.getItem("appointments") || "[]");
    appointments.push(appointment);
    sessionStorage.setItem("appointments", JSON.stringify(appointments));

    alert("Appointment booked successfully!");
    form.reset();
  });
});

function signOut() {
  sessionStorage.removeItem("currentUser");
  window.location.href = "index.html";
}








