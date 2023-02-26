alert("prueba scrollear")

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

  
  document.querySelectorAll("button").onclick = function() {
    window.print();
  }


  var inputs = document.getElementsByTagName("input");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].indeterminate = true;
}



const paragraph = document.getElementById("para");
const output = document.getElementById("output");

if (paragraph.matches(":scope")) {
  output.textContent = "Yep, the element is its own scope as expected!";
}



  
 