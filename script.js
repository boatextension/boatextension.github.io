$(document).ready(function () {
  
  // smooth scroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 20
      }, 600);
    }
  });

  // download counter
  $('#download').on('click', function () {
    console.log("download clicked — firing gtag");
    gtag('event', 'download_click', {
      'event_category': 'engagement',
      'event_label': 'BOAT Extension CRX'
    });
  });

  // how to install display
  $('#how-to-install').on('click', function (e) {
    e.preventDefault();
    $('.download-how-to-install').slideToggle(300);
  });

  // form submit
  $("#form-get-updates").on("submit", async function (e) {
    e.preventDefault();
    const email = $(".email-input").val().trim().toLowerCase();
    if (!email) return alert("Please enter your email.");

    const db = window.db;
    const collectionRef = window.collection;
    const addDoc = window.addDoc;
    const query = window.query;
    const where = window.where;
    const getDocs = window.getDocs;

    try {
      // check if exists
      const q = query(collectionRef(db, "subscribers"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        alert("This email is already subscribed.");
        return;
      }

      // add new
      await addDoc(collectionRef(db, "subscribers"), {
        email: email,
        timestamp: new Date()
      });

      alert("Thank you! You're subscribed!");
      $("#form-get-updates")[0].reset();
    }
    catch (error) {
      console.error("Error saving email:", error);
      alert("Something went wrong. Check if your email is written correctly or try again later.");
    }
  });
});