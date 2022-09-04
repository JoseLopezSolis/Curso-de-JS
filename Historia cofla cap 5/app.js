//Termino el primer semestre y cofla no sabe aprobara o no las materias, para lograrlo necesitara:
//Contar con al menos el 90% de asistencia.
//El promedio por materia debe de ser almenos 7/10
//Debe tener al menos del 75% de los trabajos practicos entregados

//-Solicitar los datos y decirle si aprueba o no
//-Mostrar todo esto en colores representaticos en consola 

//Subjects at the school
let subjects ={
    programming: [],
    dataStructures: [],
    artifitialInteligent: [],
    math:[],
}

const getStudentData = (subjects) =>{
    //This is the total works that they do in class (the number is the number of excersices)
    const programmingWorksInClass = 10; 
    const dataStructuresWorksInClass = 20;
    const artifitialInteligentWorksInClass = 12;
    const mathWorksInClass = 22;

    //Initialize variables to store userData
    let programmingWorks;
    let dataStructuresWorks;
    let artifitialInteligentWorks;
    let mathWorks;

    //Go throught the array
    for(subject in subjects){
        if(subjects[subject] == subjects['programming']){
            while(true){ //Will input the number of work that the user do
                programmingWorks = 1;// prompt("Enter your total programming works:")
                if(programmingWorks < 0 || programmingWorks > programmingWorksInClass){
                    alert("Enter the values again the maximous works are:"+programmingWorksInClass)
                    continue;
                }
                subjects[subject].push(programmingWorks);
                //console.log(subjects[subject]);
                break;
            }
        }
        if(subjects[subject] == subjects['dataStructures']){
            while(true){
                dataStructuresWorks =  1;//prompt("Enter your total data structures works:")
                if(dataStructuresWorks < 0 || dataStructuresWorks > dataStructuresWorksInClass){
                    alert("Enter the values again the maximous works are:"+dataStructuresWorksInClass)
                    continue;
                }
                subjects[subject].push(dataStructuresWorks);
                //console.log(subjects[subject]);
                break;
            }
        }
        if(subjects[subject] == subjects['artifitialInteligent']){
            while(true){
                artifitialInteligentWorks = 1;//prompt("Enter your total data artifitial intelligent works:")
                if(artifitialInteligentWorks < 0 || artifitialInteligentWorks > artifitialInteligentWorksInClass){
                    alert("Enter the values again the maximous works are:"+artifitialInteligentWorksInClass)
                    continue;
                }
                subjects[subject].push(artifitialInteligentWorks);
                //console.log(subjects[subject]);
                break;
            }
        }
        if(subjects[subject] == subjects['math']){
            while(true){
                mathWorks =  1;//prompt("Enter your total data artifitial intelligent works:")
                if(mathWorks < 0 || mathWorks > mathWorksInClass){
                    alert("Enter the values again the maximous works are:"+mathWorksInClass)
                    continue;
                }
                subjects[subject].push(mathWorks);
                //console.log(subjects[subject]);
                break;
            }
        }
    }
    return subjects;
}

//Will store the total attendt of the user
const getAttent = () =>{
    let totalAttentStudent = 100;//prompt("Enter yout total attend:"); //Will be in all subjects
    totalAttentStudent = Number(totalAttentStudent); //Casting to number
    return totalAttentStudent;
}

//Will vailid the result if she/he pass the subject
const validResult = (studentData) =>{
    const totalAttent = 100; //Total de asistencias
    
    //Works in class -- If He has all he aprove with 75%
    const programmingWorks = 10;
    const dataStructuresWorks = 20;
    const artifitialInteligentWorks = 12;
    const mathWorks = 22;

    //Total points to pass the semester
    const totalPointsToPass = programmingWorks+dataStructuresWorks+artifitialInteligentWorks+mathWorks;

    let sumSubjectValues = [];
    for(data in studentData){
        sumSubjectValues.push(studentData[data]);
    }
    console.log(sumSubjectValues);
    
}

let student1 = getStudentData(subjects);

validResult(student1);
//validResult(studentDataExample