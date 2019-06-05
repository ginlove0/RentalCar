
function addCart() {


    //get id that stored in browser
    const data = localStorage.getItem("id");
    console.log(data);
    if (data) {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", "./cars.xml", true);
      xmlhttp.overrideMimeType('text/xml');
  
      xmlhttp.onreadystatechange = function () {
        var table = '';
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var xmlDoc = xmlhttp.responseXML;
          // console.log(xmlDoc);
          var x = xmlDoc.getElementsByTagName("car");
        
  
          const verhicle = x[data].getElementsByTagName("brand")[0].childNodes[0].nodeValue;
          const price = x[data].getElementsByTagName("price_per_day")[0].childNodes[0].nodeValue;
          const rent_day = `<input type=text />`;
          const action =`<button id="delete"  class="btn btn-outline-primary" type="submit">Delete</button>`;
          table += "<tr><td>" + verhicle + "</td><td>" + price + "</td><td>" + rent_day + "</td><td>" + action +
            "</td></tr>";
          
  
          //save table in localstorage
          localStorage.setItem("table", table);
          let localTable = localStorage.getItem('table');
          console.log(localTable);
          document.getElementById("addCart").innerHTML += localTable; "<br>"
          
  
          
          document.getElementById("tfoot").innerHTML = 
          `
          <div class="row">
            <div class="col lg-12 xm-2">
                <form action="checkout.html">
                    <button id="checkout" class="btn btn-outline-primary float-right my-2 my-sm-0 "
                        type="submit">Process to CheckOut</button>
                </form>

            </div>

        </div>
          `
          
        }
      }
      xmlhttp.send();
      
    }
    
  }


