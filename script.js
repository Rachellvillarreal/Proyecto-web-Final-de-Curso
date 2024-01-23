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
