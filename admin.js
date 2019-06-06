function getXMLDoc(xml) {
  // localStorage.setItem("id", id)
  var xmlDoc = xml.responseXML;
  var listProduct = xmlDoc.getElementsByTagName("car");
  var all_data = [];

  for (i = 0; i < listProduct.length; i++) {
    // get data from xml doc
    if (listProduct[i]) {
      const id = listProduct[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
      const category = listProduct[i].getElementsByTagName("category")[0].childNodes[0].nodeValue;
      const ava = listProduct[i].getElementsByTagName("availability")[0].childNodes[0].nodeValue;
      const brand = listProduct[i].getElementsByTagName("brand")[0].childNodes[0].nodeValue;
      const model = listProduct[i].getElementsByTagName("model")[0].childNodes[0].nodeValue;
      const modelYear = listProduct[i].getElementsByTagName("model_year")[0].childNodes[0].nodeValue;
      const mil = listProduct[i].getElementsByTagName("mileage")[0].childNodes[0].nodeValue;
      const fuel_type = listProduct[i].getElementsByTagName("fuel_type")[0].childNodes[0].nodeValue;
      const seats = listProduct[i].getElementsByTagName("seats")[0].childNodes[0].nodeValue;
      const price_per_day = listProduct[i].getElementsByTagName("price_per_day")[0].childNodes[0].nodeValue;
      const description = listProduct[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
      const img = listProduct[i].getElementsByTagName("img")[0].childNodes[0].nodeValue;

      // console.log(id);
      // localStorage.setItem("id", id)
      // convert to array
      const temp_Data = [
        {id},
        { category },
        // temp_category = product.getElementsByTagName("category")[0].childNodes[0].nodeValue,
        { ava },
        // temp_ava = product.getElementsByTagName("availability")[0].childNodes[0].nodeValue,
        { brand },
        // temp_brand = product.getElementsByTagName("brand")[0].childNodes[0].nodeValue,
        // temp_model = product.getElementsByTagName("model")[0].childNodes[0].nodeValue,
        { model },
        { modelYear },
        // temp_modelYear = product.getElementsByTagName("model_year")[0].childNodes[0].nodeValue,
        { mil },
        // temp_mil = product.getElementsByTagName("mileage")[0].childNodes[0].nodeValue,
        { fuel_type },
        // temp_fuel_type = product.getElementsByTagName("fuel_type")[0].childNodes[0].nodeValue,
        { seats },
        // temp_seats = product.getElementsByTagName("seats")[0].childNodes[0].nodeValue,
        { price_per_day },
        // temp_price_per_day = product.getElementsByTagName("price_per_day")[0].childNodes[0].nodeValue,
        { description },
        // temp_description = product.getElementsByTagName("description")[0].childNodes[0].nodeValue,
        { img }
        // temp_img = product.getElementsByTagName("img")[0].childNodes[0].nodeValue
      ]
      var a = all_data.push(temp_Data);
      console.log(a);
      localStorage.setItem("data",a);

      // if(product.getElementsByTagName("availability")[0].childNodes[0].nodeValue === "True"){
      //         alert("Add to cart successful");
      //     }else{
      //         alert("Sorry, car is not available right now");
      //     }
    }
  }

  return all_data;
}


function loadXMLDoc() {

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "./cars.xml", true);

  xmlhttp.responseType = 'document';

  // Force the response to be parsed as XML
  xmlhttp.overrideMimeType('text/xml')

  xmlhttp.onreadystatechange = function () {

    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

      const load_car = getXMLDoc(this);
      // sessionStorage.setItem(`${element.find((e) => e.temp_model).temp_model}`, JSON.stringify(element))
      // var get_all = localStorage.getItem("data");
      load_car.forEach(function (element) {
        localStorage.setItem(`${element.find((e) => e.model).model}`, JSON.stringify(element))
        

        // var get_category = localStorage.getItem("data").temp_category
        // var get_available = localStorage.getItem("data").temp_ava
        // var get_brand = localStorage.getItem("data").temp_brand
        // var get_model = localStorage.getItem("data").temp_model
        // var get_model_year = localStorage.getItem("data").temp_modelYear
        // var get_mil = localStorage.getItem("data").temp_mil
        // var get_fuel_type = localStorage.getItem("data").temp_fuel_type
        // var get_seats = localStorage.getItem("data").temp_seats
        // var get_price = localStorage.getItem("data").temp_price_per_day
        // var get_des = localStorage.getItem("data").temp_description
        // var get_img = localStorage.getItem("data").temp_img
        document.getElementById('car_detail').innerHTML +=
          `
        <div onsubmit="addCart(); return true" class="card col-lg-4 col-xs-12 thumbnail">
          <img  class="card-img-top" src="./images/${element.find((e) => e.img).img}" alt="Card image cap">
          <div  class="card-body">
          <h5 class="card-title">${element.find((e) => e.brand).brand} - ${element.find((e) => e.model).model} - ${element.find((e) => e.modelYear).modelYear}</h5>
          <p  class="card-text">
            <b>Mileage:</b> ${element.find((e) => e.mil).mil} <br>
            <b>Fuel Type:</b> ${element.find((e) => e.fuel_type).fuel_type} <br>
            <b>Seats:</b> ${element.find((e) => e.seats).seats} <br>
            <b>Price per day:</b>${element.find((e) => e.price_per_day).price_per_day} <br>
            <b>Description:</b> ${element.find((e) => e.description).description} <br>
          <button onclick="addCart(${element.find((e) => e.id).id})"  href="#" class="btn btn-primary mt-3">Add to cart</button>
          </div>
        </div>
        
        `
      })
      
    }
    

  };
  xmlhttp.send();
}











// function getXMLDoc(xml, id) {
//   //store id for reuse it accross the js function
//   localStorage.setItem("id", id)
//   var xmlDoc = xml.responseXML;
//   var table = '';
//   // var table = "<tr><th>Product ID</th><th>Product Name</th><th>Unit Price</th><th>Unit Quantity</th><th>In Stock</th></tr>";
//   var x = xmlDoc.getElementsByTagName("car");
//   const ava = x[id].getElementsByTagName("availability")[0].childNodes[0].nodeValue;
//   const mil = x[id].getElementsByTagName("mileage")[0].childNodes[0].nodeValue;
//   const fuel_type = x[id].getElementsByTagName("fuel_type")[0].childNodes[0].nodeValue;
//   const seats = x[id].getElementsByTagName("seats")[0].childNodes[0].nodeValue;
//   const price_per_day = x[id].getElementsByTagName("price_per_day")[0].childNodes[0].nodeValue;
//   const description = x[id].getElementsByTagName("description")[0].childNodes[0].nodeValue;
//   table += "<p><b>" + mil +"</b></p><p><b>" + fuel_type +"</b></p><p><b>" + seats+"</b></p><p><b>" + price_per_day +
//     "</b></p><p><b>" + description + "</b></p>";


//   //create tempData and save it in localStorage


//   if(x[id].getElementsByTagName("availability")[0].childNodes[0].nodeValue === "True"){
//       alert("Add to cart successful");
//   }else{
//       alert("Sorry, car is not available right now");
//   }

//   return table;
// } 


// function loadXMLDoc(id, callback) {
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.open("GET", "./cars.xml", true);

//     xmlhttp.responseType = 'document';

//     // Force the response to be parsed as XML
//     xmlhttp.overrideMimeType('text/xml')

//     xmlhttp.onreadystatechange = function () {

//       if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


//         const data = getXMLDoc(xmlhttp, id);
//         console.log(data);
//         document.getElementById("detail").innerHTML = data;

//         //get the maximum stock from data



//         // document.getElementById("quantityItem").innerHTML = `
//         // <form onsubmit="callPHPCart(); return false">
//         // Quantity:<input type="number" required type="number" min="1" max="${maxStock}" id="quantityNo" />
//         // <button id="btnAdd" >add</button>
//         // </form>
//         // `

//       }
//     }

//     //localStorage.removeItem("id");
//     xmlhttp.send();


//   }


