let lic = document.querySelector(".lic");
let url = document.querySelector(".url");
let method = document.querySelector(".method");
let urlValue = undefined;
let methodValue = undefined;
let currPage = undefined;
let urlParams = undefined;
let data = {};



lic.addEventListener('click', () => {
    console.log("Launch is clicked !!!");
    url.value = urlValue;
    method.value = methodValue;
    // generatePostReq();
    // launchDummyURL();
    // openWebPage();
    dummyPostTypeRequest();
});

function initialize(){
    currPage = window.location.search;
    urlParams = new URLSearchParams(currPage);
    console.log(currPage);
    
    urlParams.forEach((val,k) => {
        console.log(k,val);
        if(k.includes('url')){
            console.log('url value is '+val);
            urlValue = val;
            console.log(urlValue,methodValue);
        }else if(k.includes('method')){
            console.log('method value is '+val);
            methodValue = val;
            console.log(urlValue,methodValue);
        } else {
            data[k] = val;
        }
    })
    console.log(data);
}

// function generatePostReq(){
//     console.log("Starting to generated request ",urlValue,methodValue );
//     fetch(urlValue, {
//     method: 'POST', // change method to post type
//     body: JSON.stringify({  // add a body element
//         userId: 1,
//         title: 'A new todo',
//         completed: false
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     }
//     })
//     .then((response) => response.json())
//     .then((json) => window.location.href = json.url);
//     // .then((json) => console.log(json));

// }


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    initialize();
    // generatePostReq();
});

// function openWebPage(){
//     const url = 'http://127.0.0.1:5500/JavaScript%20fundamentals/LIC%20research/receiverPage.html';
//     const data = {param1: 'value1', param2: 'value2'};
//     fetch(url, {
//         method: 'POST',
//         mode: 'no-cors',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => {
//         if (response.ok) {
//             return response.text();
//         }
//         throw new Error('Network response was not ok.');
//     })
//     .then(html => {
//         document.body.innerHTML = html;
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });

// }


// function launchDummyURL() {
//     let url = 'http://127.0.0.1:5500/JavaScript%20fundamentals/LIC%20research/receiverPage.html?method=ready';
//     console.log('data found ',data);
//     // make a POST type request
//     data = JSON.stringify(data);
//     fetch(url, {
//         method: "POST",
//         mode: 'no-cors',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },

//         //make sure to serialize your JSON body
//         body: JSON.stringify(data)
//     })
//     .then( (response) => { 
//         //do something awesome that makes the world a better place
//         console.log(response);
//         setTimeout(() => {
//             window.location.href = url;    
//         }, 30000);
        
//     });
// }

function dummyPostTypeRequest() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        title: 'MoleculeMan',
        body: 'Solar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
    });
}