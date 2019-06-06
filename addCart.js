function addCart(id) {


  //get id that stored in browser
  data = JSON.parse(localStorage.getItem(id));
  console.log(data);
  console.log(id);
  
  if (id){
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.open("GET", "./cars.xml", true);
    xmlhttp.responseType = 'document';

    // Force the response to be parsed as XML
    xmlhttp.overrideMimeType('text/xml')

    xmlhttp.onreadystatechange = function () {
      var table = '';
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var xmlDoc = xmlhttp.responseXML;
        // console.log(xmlDoc);
        var x = xmlDoc.getElementsByTagName("car");


        //get avalable data from xml
        const check = x[id-1].getElementsByTagName("availability")[0].childNodes[0].nodeValue;
        // console.log(check)
        const img = x[id-1].getElementsByTagName("img")[0].childNodes[0].nodeValue;
        const verhicle = x[id-1].getElementsByTagName("brand")[0].childNodes[0].nodeValue;
        const price = x[id-1].getElementsByTagName("price_per_day")[0].childNodes[0].nodeValue;
        const rent_day = `<input type=text />`;
        const action = `<button id="delete"  class="btn btn-outline-primary" type="submit">Delete</button>`;
        table += "<tr><td>" + img + "</td><td>" + verhicle + "</td><td>" + price + "</td><td>" + rent_day + "</td><td>" + action +
          "</td></tr>";
        console.log(verhicle)


        //save table in localstorage
        localStorage.setItem("table", table);
        let localTable = localStorage.getItem('table');
        console.log(localTable);

        // check available
        if(check == "True"){
          alert("Add item success");
          document.getElementById("item_in_cart").innerHTML += localTable; "<br>"
        }else{
          alert("Item no longer available");
        }
        



        document.getElementById("btn_checkout").innerHTML =
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
        return table;
      }
    }
    xmlhttp.send();

  }

}


