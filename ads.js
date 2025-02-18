document.getElementById('message').addEventListener('click', (event) => {
  event.preventDefault();
  
  
  let whatsappMesg = "Hello VibesTv, I'm interested in placing a free ad."

  let whatsappUlr = `https://wa.me/2349134881254?text= ${encodeURIComponent(whatsappMesg)}`;
  
  window.location.href = whatsappUlr;
})