const tabla = document.getElementById("tabla");

// Crear celdas con números del 00 al 99
for (let i = 0; i < 100; i++) {
  const celda = document.createElement("div");
  celda.classList.add("celda");
  celda.id = `num-${i}`;
  celda.innerHTML = `${i.toString().padStart(2, '0')}<span>$3000</span>`;
  tabla.appendChild(celda);
}

// Sorteo del número ganador
function sortearNumero() {
  const ganador = Math.floor(Math.random() * 100);
  document.querySelectorAll(".celda").forEach(celda => celda.classList.remove("ganador"));
  document.getElementById(`num-${ganador}`).classList.add("ganador");
  alert(`¡El número ganador es el ${ganador.toString().padStart(2, '0')}!`);
}