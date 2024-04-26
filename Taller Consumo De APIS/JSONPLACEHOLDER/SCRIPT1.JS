// PUNTO 1 JSON PLACEHOLDER
fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
  .then(respuesta => respuesta.json())
  .then(json => {
    let carrusel = document.getElementById('carrusel');
    json.forEach(photo => {

      let img = document.createElement('img');
      img.src = photo.thumbnailUrl;
      img.alt = photo.title;

      carrusel.appendChild(img);
    });
 
    let index = 0;
    setInterval(() => {
      index = (index + 1) % json.length;
      carrusel.style.transform = `translateX(${-index * 200}px)`;
    }, 2000);
  });
