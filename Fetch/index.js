console.log("run");

// function getData() {
//     fetch('https://jsonplaceholder.typicode.com/posts')//path parameter
//         .then((response) => response.json())  //responce convert to Json 
//         .then((json) => console.log(json))  //ganata json array k vidiyata catch kragnne methanin

//         .catch((err) => console.log(err))  //API k fail nam methaning allagnne
//         .finally(() => console.log("run finally"))//api call krana ekak 
// }
function postData() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err))

}
function updateData() {

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'doo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err))
}

function updateDataPatch(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'hoo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err)=> console.log(err))
}
function deleteData(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });

}
//////////////////////////////////////////////////

function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json()) 
        .then((json) => {
            let data=""
            for(let i=0;i<json.length;i++){
                console.log(json[i]);
                data+=`<div class="card m-2" style="width: 18rem;">

                <div class="card-body ">
                    <h5 class="card-title">ID:${json[i].id}</h5>
                    <p class="card-text">${json[i].title}</p>
                    <p class="card-text">${json[i].body}</p>
    
                </div>
            </div>
    `
            }
           
            document.getElementById('display').innerHTML=data
        }) 

        .catch((err) => console.log(err))  
       
}
