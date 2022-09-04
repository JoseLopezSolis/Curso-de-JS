//[ASISTENCIA][PROMEDIO][TRABAJOS PRACTICOS][nombre[materia]]
const materias = { //GLOBAL
    fisica: [91,7,3,"Fisica"],
    matematicas: [96,6,4,"matematicas"],
    programacion: [50,9,5,"programacion"],
    estadistica: [100,10,5,"estadistica"],
    baseDeDatos: [90,9,3,"base de datos"],
}

const asistencia = ()=>{
    for(materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2]; 

        if(asistencias >= 90){
            console.log(materias[materia][3]);
            console.log('%cAh aprobado la materia',"color:green");
        } else{
            console.log(materias[materia][3]);
            console.log('%cAh reprobado la materia',"color:red");
        }

        if(promedio >= 7){
            console.log("%cAsistencias en orden","color:green");
        }else{
            console.log("%cPromedio en desorden","color:red")
        }

        if(trabajos>3){
            console.log("%c Trabajos en orden","color:green");
        }else{
            console.log("%c Los trabajos no estan en orden","color:red")
        }
    }
}

asistencia();