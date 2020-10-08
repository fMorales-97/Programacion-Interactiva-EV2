window.personas = [];
var switchPago = document.querySelector(".js-switch");
var init = new Switchery(switchPago, {
  color : "#0d6efd",
  size  : "small"
});

window.cargarPersona = ()=> {

  let cards      = document.getElementById("cards");
  cards.innerHTML = "";
  window.personas.forEach((p)=> {

    let card           = document.createElement("div");
    let cardHeader     = document.createElement("div");
    let cardBody       = document.createElement("div");
    let cardFooter     = document.createElement("div");
    let cardNombre     = document.createElement("h5");
    let cardPlan       = document.createElement("p");
    let cardPago       = document.createElement("div");
    let cardEstadoPago = document.createElement("p");
    card.classList.add("card", "col-lg-4", "p-0");
    cardHeader.classList.add("card-header", "bg-primary");
    cardBody.classList.add("card-body");
    cardFooter.classList.add("card-footer");
    cardNombre.classList.add("card-title", "text-white");
    cardPlan.classList.add("card-text");
    cardNombre.innerText = p.nombre;
    cardPlan.innerText   = "Total a pagar: $" + p.plan;
    if(p.pago === true) {

      let img = document.createElement("img");
      img.src = "img/efectivo.png";
      cardPago.appendChild(img);
    } else {

      let img = document.createElement("img");
      img.src = "img/tarjeta.png";
      cardPago.appendChild(img);
    };
    if(p.estadoPago === true) {
      cardEstadoPago.innerText = "Pagado";
      cardEstadoPago.classList.add("card-text");
      cardFooter.appendChild(cardEstadoPago);
    } else {
      cardEstadoPago.innerText = "Adeudado";
      cardEstadoPago.classList.add("card-text", "text-danger");
      cardFooter.appendChild(cardEstadoPago);
    }
    cardHeader.appendChild(cardNombre);
    cardBody.appendChild(cardPlan);
    cardBody.appendChild(cardPago);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    cards.appendChild(card);
  });
};

window.guardarPersona = (persona)=> {
  window.personas.push(persona);
  window.cargarPersona();
};

const boton = document.getElementById("boton");
boton.addEventListener("click", function() {

  let erroresDiv = document.querySelector(".errores");
  erroresDiv.innerHTML = "";
  let nombre     = document.getElementById("nombre").value.trim();
  let plan       = document.getElementById("plan").value;
  let pago       = document.getElementById("checkbox1").checked;
  let estadoPago = document.getElementById("estado-pago").checked;
  if(nombre === "") {
    
    let errorUl = document.createElement("ul");
    errorUl.classList.add("alert", "alert-danger");
    let errorLi = document.createElement("li");
    errorLi.innerText = "Debe ingresar su nombre";
    errorUl.appendChild(errorLi);
    erroresDiv.appendChild(errorUl);
  } else {
    
    let persona        = {};
    persona.nombre     = nombre;
    persona.plan       = plan;
    persona.pago       = pago;
    persona.estadoPago = estadoPago;

    window.guardarPersona(persona);
  }
});