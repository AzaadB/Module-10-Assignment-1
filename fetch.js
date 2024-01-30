//Lesson 4- Getting Data from the server//
document.getElementById("getData").addEventListener('click', getData);
document.getElementById("getList").addEventListener('click', getList);
document.getElementById("Submit").addEventListener('click', submitForm);
//Event handlers(lines 2-4)//
function getData() {
    //Using the fetch function//
    fetch('https://mysite.itvarsity.org/api/fetch/get-data/')
        .then(function (response) {
            return response.text();
        }).then(function (data) {
            document.getElementById("message").innerHTML = data;
        })
}
//Creating the getData function(line 6)//
function getList() {
    fetch('https://mysite.itvarsity.org/api/fetch/get-list/')
        .then(function (response) {
            return response.json();
            //Recieving a json array from the server(line 19)
        }).then(function (data) {
            var output = "<h1>Posts</h1>"
            //Itterating through the json content with a for loop//
            for (a = 0; a < data.length; a++) {
                output +=
                    `<br/>
                <ul>
                <li><h2>${data[a][0]}</h2></li>
                <br/>
                <li><h2>${data[a][1]}</h2></li>
                <br/>
                <li><h2>${data[a][2]}</h2></li>
                </ul>
                `
            }
            document.getElementById("posts").innerHTML = output;
        })
}

function submitForm(e) {
    // e.preventDefault(); prevents the form from reloading the page//
    e.preventDefault();
    //creating a form data object//
    form = new FormData(document.querySelector("#myForm"));
    //The following fetch is going to be sending data//
    fetch('https://mysite.itvarsity.org/api/fetch/send-data/', {
        //Inside the block we have the method of the fetch, headers and what the hearders are accepting//
        method: "POST",
        headers: { "Accept": "application/json, */*" },
        body: form
        //Lastly we pass in the body which is the form data object//
    }).then(function (response) {
        return response.text();
    }).then(function(data){
        document.getElementById("greeting").innerHTML = data;
    })
}
