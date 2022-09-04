let cantidad = prompt("Cuantos alumnos son?")//Preguntamos la cantidad con un prompt
let alumnosTotales = []; //Creamos un array para almacenar a los alumnos

for(i = 0 ;i < cantidad ;i++){
    alumnosTotales[i] = [prompt("Nombre del alumno "+(i+1)),0] //Preguntamos al usuario su nombre
}
console.log(alumnosTotales) //Imprimimos en consola los alumnos

const tomarAsitencia = (nombre,p)=>{ //Funcion para tomar lista
    let presencia = prompt(nombre);
    if(presencia == "P" || presencia == "p"){
        alumnosTotales[p][1]++;
    }                                                                                       
}
//Toma lista 30 veces
for(i=0;i<30;i++){ //Tomamos lista 30 veces
    for(alumno in alumnosTotales){ //Recorremos nuestro array tomando lista 
        tomarAsitencia(alumnosTotales[alumno][0],alumno);
    }
}

//Imprimimos los resultados de cada alumno
let resultado
for(alumno in alumnosTotales){
    resultado = `${alumnosTotales[alumno][0]}:</br>
    _______Presentes: ${alumnosTotales[alumno][1]}:</br>
    _______Ausentes: ${30- parseInt(alumnosTotales[alumno][1])}`;
    if(30-alumnosTotales[alumno][1]>18){
        resultado += `<b style="color:red> REPROBADO POR INASISTENCIA</b> <br></br>"`;
    }else{
        resultado+=`<br></br>`;
    }
}

document.write(resultado);