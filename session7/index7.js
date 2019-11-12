
// function generateList(text, callback){//CALLBACK
//     let array = text.split
//     let sum = callback(array)
//     console.log(sum)
// }

// function calcSum(array){
//     let ni,ber = 0 
//     for ( let i = 0; i < callback.length; i+=1 ){
//         number += Number(array[i])
//     } return number
// }
// function loop (array, callback) {
//     for(let i = 0; i<array.length; i+=1){
//         callback(array[i])
//     }
// }
// function callback(item){
//     console.log(item)
// } 
// loop([1,2,3,4], print)

//--------------------
// function hocbai(action){
//     console.log("hocbai");
//     return action()
// }

// function dingu(){
//     console.log("dingu");
// }
// settimeout(hocbai(dingu), 200);
//---------------;

function dicho(trafficjam){
    return new Promise(function(resolve, reject){
        console.log("dang di cho");
        if(trafficjam == true){
            reject("stop going")
        }else{
            resolve("ipad");
        }
    })
}



// let result = dicho(true).then(function(item){
//     console.log(item);
// }).catch(function(reason){
//     console.log(reason);
// })
//----------------------

//GET DATA
fetch("http://5dc6a9cb317717001434f796.mockapi.io/api/members?fbclid=IwAR1uiOBHNo6cfMyfi9rBKTIiXzQKo2VQHULmvGwLXi40ng1Je0o_o-0FS2s")
.then(function (response){
    response.json().then(function(data){
        console.log("Promise",data)
    })
});

async function getData(){//common-used, same as promise
    try{    
    const response = await fetch("http://5dc6a9cb317717001434f796.mockapi.io/api/members?fbclid=IwAR1uiOBHNo6cfMyfi9rBKTIiXzQKo2VQHULmvGwLXi40ng1Je0o_o-0FS2s")
    const data = await response.json()
    console.log("await", data)
    }
    catch(err){
        console.log(err)
    }
}
console.log(getData())


//POST DATA
async function postData(data){
    const url = "http://5dc6a9cb317717001434f796.mockapi.io/api/members?fbclid=IwAR1uiOBHNo6cfMyfi9rBKTIiXzQKo2VQHULmvGwLXi40ng1Je0o_o-0FS2s"
    await fetch(url,{
        method:"POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    });
}
const data = {
    name: "Jun",
    gender: 2,
    role: "student"
}

//PUT
async function updateData(id, data){
    const url = `http://5dc6a9cb317717001434f796.mockapi.io/api/members/${id}`;
    await fetch(url,{
        method:"PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    });
}

//DELETE
async function deleteData(id, data){
    const url = `http://5dc6a9cb317717001434f796.mockapi.io/api/members/${id}`;
    await fetch(url,{
        method:"DELETE",
   }
)}

async function main (){
    const data = {
        name: "Jun",
        gender: 2,
        role: "student"
    };
    const newData = await postData(data);
    await updateData(newData.id, data);
    await deleteData(newData.id);
    await getData();
    console.log("done");
}
main();