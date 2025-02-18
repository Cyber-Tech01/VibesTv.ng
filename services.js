document.getElementById('visit').addEventListener('click', (event) => {
  event.preventDefault();
  let text = document.getElementById('text')
  text.textContent = "You will be redirected to the page soon..."
  text.style.color = "red"
  
  setTimeout(() => {
    window.location.href = "/Whatsapp.html"
  }, 2000)
  
})

document.getElementById('visit2').addEventListener('click', (event) => {
  event.preventDefault();
  let text = document.getElementById('text2')
  text.textContent = "You will be redirected to the page soon..."
  text.style.color = "red"
  
  setTimeout(() => {
    window.location.href = "/ads.html"
  }, 2000)
  
})

document.getElementById('visit3').addEventListener('click', (event) => {
  event.preventDefault();
  let text = document.getElementById('text3')
  text.textContent = "You will be redirected to the page soon..."
  text.style.color = "red"
  
  setTimeout(() => {
    window.location.href = "/graphics.html"
  }, 2000)
  
})