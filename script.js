console.log("Dimitri & Kora MICHI MIAU")


const jsonFile = 'db.json';
let eventos;

fetch(jsonFile)
.then(response => response.json())
.then(data => {
    
  eventosContainer = document.getElementById('eventos-container');
    data.eventos.forEach(evento => {
      const card = document.createElement('div');
      card.classList.add('card');

      eventos = data.eventos

      card.innerHTML = `
      <img src="${evento.image}" alt="${evento.title}">
        <h3>${evento.title}</h3>
        <p>${evento.description}</p>
        <p>${evento.price}</p>
      `;

      eventosContainer.appendChild(card);
      console.log(evento);
    });

    console.log(data);
})
.catch(error => console.error('Error fetching JSON:', error));


//siguiente codigo es el buscador//

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function() {
  const searchterm = this.value.toLowerCase();

  console.log(searchterm);

  const eventosFiltrados = eventos.filter(evento => {
    return evento.title.toLowerCase().includes(searchterm);
  });

  eventosContainer.innerHTML = '';

  eventosFiltrados.forEach(evento => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML =`
    <img src="${evento.image}" alt="${evento.title}">
    <h3>${evento.title}</h3>
    <p>${evento.description}</p>
    <p>${evento.price}</p>
`;

eventosContainer.appendChild(card);
  });
});

//botones categorías//
//senderismo-button//

const senderismoButton =
document.getElementById("senderismo-button");

senderismoButton.addEventListener("click", function() {
  
  alert("Button clicked!");
});


//museos-button//

const museosButton =
document.getElementById("museos-button");

museosButton.addEventListener("click", function() {
  
  alert("Button clicked!");
});

//fnacionales-button//

const fnacionalesButton =
document.getElementById("fnacionales-button");

fnacionalesButton.addEventListener("click", function() {
  
  alert("Button clicked!");
});

//playas-button//

const playasButton =
document.getElementById("playas-button");

playasButton.addEventListener("click", function() {
  
  alert("Button clicked!");
});


//boton funcional sobre panamá agregando onclick="scrollToSobrePanama() a mi boton//

function scrollToSobrePanama() {
  var sobrePanamaSection = document.getElementById('parrafo-container');
  sobrePanamaSection.scrollIntoView({ behavior: 'smooth' });
}