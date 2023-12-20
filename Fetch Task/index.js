

      var userArray = [];
    function postData() {
    
        var first_name = document.getElementById("fnm").value;
        var last_name = document.getElementById("lnm").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("add").value;
   

        if (first_name, last_name, age, address == "") {
           alert("Plese Enter Value");
         } else {
       
       
            var userData = {
                "firstname": first_name,
                "lastname": last_name,
                "userage": age,
                "address": address,

            };
            userArray.push(userData);
            viewDetail();
            clearData();
         }
     }
     
     function viewDetail(){
            var data="";
            for (var i = 0; i < userArray.length; i++) {
                data += ` <div class="card" style="width: 18rem;">
            <div class="card-body">
                 <p class="card-text ">First Name :${userArray[i].firstname}</p>
                <p class="card-text">Last Name :${userArray[i].lastname}</p>
                <p class="card-text">Age :${userArray[i].userage}</p>
                <p class="card-text">Address :${userArray[i].address}</p>
                <button onclick="deleteData(${i})" type="button" id="btndelete" class="btn  btn-danger">Delete</button>
            </div>
            </div>
    
            `;
           
        }
        document.getElementById('display').innerHTML = data;

        console.log(data);
    }
        
       

     function  clearData(){

            fnm.value = "";
            lnm.value = "";
            age.value = "";
            add.value = "";
     }

     function deleteData(i) {
            userArray.splice(i, 1);
            viewDetail();
     }
   


