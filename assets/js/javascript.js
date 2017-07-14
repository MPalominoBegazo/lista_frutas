
var productos = [];
var records = document.getElementById('lista');

function Producto(compra) {
  this.compra = compra.toLowerCase();
  this.producttID = (productos.length + 1);
 
};

Producto.prototype.toHTML = function () {
  var html = '';
  html += this.compra.toUpperCase() + '<br>';
  html += '<br>';
  return html;
}

function mergeHTML (){
  var html = '';
  for (i=0; i<productos.length; i++){   
    html += productos[i].toHTML();  
  }
  return html;
}

function printHTML (html){
  records.innerHTML = '';
  records.innerHTML = html;  //variable mal escrita htm
}

var addCompra = document.getElementById('nuevacompra');


addCompra.onclick = function() {
  var compra = document.getElementById('frutas').value;
  //var compra = prompt('Ingrese su nueva compra');
  //var cantidad = prompt('Ingrese la cantidad');
  var product  = new Producto (compra);
  productos.push(product);
  printHTML(product.toHTML());
  printHTML(mergeHTML());
};



