function getPokemon() {
    var pokemon = document.getElementById('pokemon').value.toLowerCase();
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
      .then(respuesta => respuesta.json())
      .then(info => {
        var card = document.getElementById('pokemonCard');
        card.innerHTML = `
          <div class="card">
            <img src="${info.sprites.front_default}" alt="${info.name}" style="width:100%">
            <img src="${info.sprites.back_default}" alt="${info.name}" style="width:100%">
            <div class="container">
              <h4><b>${info.name}</b></h4>
              <p>Altura: ${info.height}</p>
              <p>Peso: ${info.weight}</p>
              <p>Tipología: ${info.types.map(t => t.type.name)}</p>
              <p>Movimientos: ${info.abilities.map(ability => ability.ability.name).join(', ')}</p>
            </div>
          </div>
        `;
      });
  }

