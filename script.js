console.log("Dimitri & Kora MICHI MIAU")
const jsonFile = 'db.json';

fetch(jsonFile)
.then(response => response.json())
.then(data => {
    
  eventosContainer = document.getElementById('eventos-container');
    data.eventos.forEach(evento => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
      <img src="${evento.image}" alt="${evento.title}">
        <h3>${evento.title}</h3>
        <p>${evento.description}</p>
        <p>${evento.category}</p>
      `;

      eventosContainer.appendChild(card);
      console.log(evento);
    });

    console.log(data);
})
.catch(error => console.error('Error fetching JSON:', error));
