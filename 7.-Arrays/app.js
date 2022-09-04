//Arrays en javaScript
//Los arrays pueden almacenar cualquier tipo de dato
let arrays = ["Jose","Francisco","Jared"]; 

console.log(arrays[1]);

//Arrays Asociativas
let pc ={
    marca: "HUAWEI",
    almacenamiento: "500GB",
    ram: "8GB",
    procesador: "Ryzen 7 3400U"
};

//Guardamos el array en variables
let marca = pc["marca"];
let almacenamiento = pc["almacenamiento"];
let ram = pc["ram"];
let procesador = pc["procesador"];

//Lo imprimimos con comilla fuerte
let frace = `
    El nombre de mi pc es <b>${marca}</b> <br>
    El procesador de mi pc es <b>${procesador}</b> <br>
    La RAM de mi pc es <b>${ram}</b> <br>
    El almacenamiento de mi pc es <b>${almacenamiento}</b> <br>`;

console.log(frace);