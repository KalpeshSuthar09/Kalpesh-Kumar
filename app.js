var typed = new Typed('.text', {
  strings:["Front-end Developer", "Web Developer"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});

var sidemenu = document.getElementById("sidemenu");

function openMenu() {
  sidemenu.style.right = "0";
}

function closeMenu() {
  sidemenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbw0HzTCvhxTuqc26wXzTFhvmEQu0brCGDH0OQrm3njg9BTjm8dZU4KaSqZppuPaDOtWgg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You";
        setTimeout(function () {
          msg.innerHTML = ""
        },1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
