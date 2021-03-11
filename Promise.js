let p= new Promise((resolve,reject)=>{
let a=1+2;
if(a==3){
    resolve("Success")
}else
    reject("Failed")
})

p.then((message)=>{console.log(message)}).catch((meesage)=>{console.log(meesage)});