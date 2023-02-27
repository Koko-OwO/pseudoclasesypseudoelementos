alert("Prueba tocando una de las pestañas <3")

window.addEventList.toggle('scroll', funtion()
    .classList.toggle('active', window.scrollY >0)
)

// Esperar a que la página termine de cargarse
document.addEventListener('DOMContentLoaded', function (){
    // Adjunte el detector de eventos `change` al checkbox
    document.getElementById('#billing-checkbox').onchange = toggleBilling;}, false);
  
  function toggleBilling() {
    // Seleccione los campos de texto de facturación
    var billingItems = document.querySelectorAll('#billing input[type="text"]');
  
    // Alternar los campos de texto de facturación
    for (var i = 0; i < billingItems.length; i++) {
      billingItems[i].disabled = !billingItems[i].disabled;
    }
  }

  
  document.querySelector(".socorro").onclick = function () {
    window.print();
  }
  var inputs = document.getElementsByTagName("input");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].indeterminate = true;
}

