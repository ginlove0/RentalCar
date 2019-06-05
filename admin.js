function loadXMLDoc(id, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./cars.xml", true);
  
    xmlhttp.responseType = 'document';
  
    // Force the response to be parsed as XML
    xmlhttp.overrideMimeType('text/xml')
  
    xmlhttp.onreadystatechange = function () {
  
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        
  
        const data = getXMLDoc(xmlhttp, id);
        console.log(data);
        // document.getElementById("detail").innerHTML = data;
      
        //get the maximum stock from data
        
  
      
        // document.getElementById("quantityItem").innerHTML = `
        // <form onsubmit="callPHPCart(); return false">
        // Quantity:<input type="number" required type="number" min="1" max="${maxStock}" id="quantityNo" />
        // <button id="btnAdd" >add</button>
        // </form>
        // `
        
      }
    }
    
    //localStorage.removeItem("id");
    xmlhttp.send();
  
  
  }


  function getXMLDoc(xml, id) {
    //store id for reuse it accross the js function
    localStorage.setItem("id", id)
    var xmlDoc = xml.responseXML;
    var table = '';
    // var table = "<tr><th>Product ID</th><th>Product Name</th><th>Unit Price</th><th>Unit Quantity</th><th>In Stock</th></tr>";
    var x = xmlDoc.getElementsByTagName("car");
    const ava = x[id].getElementsByTagName("availability")[0].childNodes[0].nodeValue;
    const mil = x[id].getElementsByTagName("mileage")[0].childNodes[0].nodeValue;
    const fuel_type = x[id].getElementsByTagName("fuel_type")[0].childNodes[0].nodeValue;
    const seats = x[id].getElementsByTagName("seats")[0].childNodes[0].nodeValue;
    const price_per_day = x[id].getElementsByTagName("price_per_day")[0].childNodes[0].nodeValue;
    const description = x[id].getElementsByTagName("description")[0].childNodes[0].nodeValue;
    table += "<p><b>" + mil +"</b></p><p><b>" + fuel_type +"</b></p><p><b>" + seats+"</b></p><p><b>" + price_per_day +
      "</b></p><p><b>" + description + "</b></p>";
  
  
    //create tempData and save it in localStorage
    
    
    if(x[id].getElementsByTagName("availability")[0].childNodes[0].nodeValue === "True"){
        alert("Add to cart successful");
    }else{
        alert("Sorry, car is not available right now");
    }
    
    return table;
}  