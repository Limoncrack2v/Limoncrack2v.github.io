let p=new Promise(function(resuleto, rechazo){
    let test=10;
    if(test==10){
        resuleto("Freedom is a constant struggle.");
    }else{
        rechazo("Being oppressed means the absence of choices");
    }
});

p.then(function(mensaje){
    console.log("Resuleto: ", mensaje);
}).catch(function(error){
    console.log("Rechazado:", error);
});
console.log(p);


