document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  
  let name = document.getElementById('name').value
  let message = document.getElementById('message').value
  
  let whatsappMes = `Hello VibesTv 👋, my name is ${name},${message}`
  
  let whatsappURL = `https://wa.me/2349134881254?text= ${encodeURIComponent(whatsappMes)};
  `
  window.location.href = whatsappURL;
})