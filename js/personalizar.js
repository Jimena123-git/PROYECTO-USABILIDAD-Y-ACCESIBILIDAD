//Paso 1: Cards de vino
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.vino-card');
  
  cards.forEach(card => {
    card.addEventListener('click', function() {
      cards.forEach(card => card.classList.remove('selected'));
      this.classList.add('selected'); //classList es una propiedad que devuelve un objeto que representa las clases CSS de un elemento en forma de una lista.
      });
  });
});

//Paso 6: vista previa y ajustes 
document.addEventListener('DOMContentLoaded', function() {
  const listaIngredientes = document.getElementById('lista-ingredientes');
  const vinoCards = document.querySelectorAll('.vino-card');
  const frutasCheckboxes = document.querySelectorAll('.from-checkbox');
  const especiasCheckboxes = document.querySelectorAll('.spice-checkbox');
  const licoresRadios = document.querySelectorAll('input[name="licorAdicional"]');
  const edulcorantesRadios = document.querySelectorAll('input[name="edulcorante"]');
  
  let vinosSeleccionados = [];
  let frutasSeleccionadas = [];
  let especiasSeleccionadas = [];
  let licorSeleccionado = null; // uso null para almacenar un solo valor
  let edulcoranteSeleccionado = null;

  function actualizarVistaPrevia() {
    listaIngredientes.innerHTML = ''; 
    
    if (vinosSeleccionados.length > 0) {
      const vinosItem = document.createElement('li');
      vinosItem.textContent = 'Vinos: ' + vinosSeleccionados.join('-');
      listaIngredientes.appendChild(vinosItem);
    }

    if (frutasSeleccionadas.length > 0) {
      const frutasItem = document.createElement('li');
      frutasItem.textContent = 'Frutas: ' + frutasSeleccionadas.join('-');
      listaIngredientes.appendChild(frutasItem);
    }

    if (especiasSeleccionadas.length > 0) {
      const especiasItem = document.createElement('li');
      especiasItem.textContent = 'Especias: ' + especiasSeleccionadas.join('-');
      listaIngredientes.appendChild(especiasItem);
    }

    if (licorSeleccionado) {
      const licorItem = document.createElement('li');
      licorItem.textContent = 'Licor: ' + licorSeleccionado;
      listaIngredientes.appendChild(licorItem);
    }

    if (edulcoranteSeleccionado) {
      const edulcoranteItem = document.createElement('li');
      edulcoranteItem.textContent = 'Edulcorante: ' + edulcoranteSeleccionado;
      listaIngredientes.appendChild(edulcoranteItem);
    }
  }

  // Funciones para actualizar las selecciones
  vinoCards.forEach(card => {
    card.addEventListener('click', function() {
      vinoCards.forEach(card => card.classList.remove('seleccionado'));
      this.classList.add('seleccionado');
      vinosSeleccionados = [this.getAttribute('data-vino')];
      console.log('Vinos seleccionados:', vinosSeleccionados);
      actualizarVistaPrevia();
    });
  });
  
  frutasCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        if (frutasSeleccionadas.length < 3) {
          frutasSeleccionadas.push(this.value);
        } else {
          this.checked = false;
          alert('Solo puedes seleccionar hasta 3 frutas.');
        }
      } else {
        frutasSeleccionadas = frutasSeleccionadas.filter(fruta => fruta !== this.value);
      }
      console.log('Frutas seleccionadas:', frutasSeleccionadas);
      actualizarVistaPrevia();
    });
  });
  
  especiasCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        if (especiasSeleccionadas.length < 3) {
          especiasSeleccionadas.push(this.value);
        } else {
          this.checked = false;
          document.getElementById('alert').style.display = 'block';
        }
      } else {
        especiasSeleccionadas = especiasSeleccionadas.filter(especie => especie !== this.value);
        document.getElementById('alert').style.display = 'none';
      }
      console.log('Especias seleccionadas:', especiasSeleccionadas);
      actualizarVistaPrevia();
    });
  });
  
  licoresRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.checked) {
        licorSeleccionado = this.value; 
      }
      console.log('Licor seleccionado:', licorSeleccionado);
      actualizarVistaPrevia();
    });
  });
  
  edulcorantesRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.checked) {
        edulcoranteSeleccionado = this.value;
      }
      console.log('Edulcorante seleccionado:', edulcoranteSeleccionado);
      actualizarVistaPrevia();
    });
  });
});

//BOTON DE REVISAR PEDIDO
document.getElementById('revisarMezcla').addEventListener('click', function() {
  document.getElementById('seleccion-vino').scrollIntoView({
      behavior: 'smooth' // desplazamiento suave
  });
});


//BOTON DE COMPRAR
document.addEventListener('DOMContentLoaded', function() {
  const comprarBtn = document.getElementById('comprar-btn');
  comprarBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    alert('¡Gracias por tu compra!');
  });
});













