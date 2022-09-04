/*La facultad de cofla esta por comenzar y ya las 12 materias de la carrera tienen asignado un profeasor y todos los alumnos que se anotaron en 
dichas clases, peero necesitamos ver esto mas ordenadamente */


//Get the information about which students are studing in some subject.
const getInformation = (subject) =>{
    subjects = {
        programming: ['Mr. Gustavo','Pedro','Pepito','Cofla','Maria'],
        relationalDataBase: ['Mr. Walter White','Pedro','Juan','Pepito','Maria'],
        artifitialInteligent: ['Mr. Walter','Pedro','Juan','Pepito','Cofla'],
        dataStructure: ['Ms. May','Juan','Pepito','Cofla','Maria']
    }
    if(subjects[subject] !== undefined){
        return [subjects[subject],subject,subjects]; //Array inside of array (subjects has the subjects)/(subject is the subject)/(subject is the subject selected);
    } else{
        return subjects;
    }
}

//Showing the information in order
const showInformation = (subject)=>{
    let information = getInformation(subject);

    if(information!==false){
        let teacher = getInformation(subject)[0][0];
        let students = getInformation(subject)[0];
        students.shift(); //Delete the first element of an array;

        console.log(`Information about the subject: ${information[1]}\n Students: ${students}\n Teacher: ${teacher} \n`)
    }
}
 
//Get the quantity of clases one student are coursing
const quantityOfClases = (student) =>{
    let information = getInformation();
    let totalQuatntity = 0;
    let classesOfStudent = [];
    for(info in information){
        if(information[info].includes(student)){
            totalQuatntity ++;
            classesOfStudent.push(' '+info); //Add to the list the names of the arrays
        }
    }
    return `${student} is in ${totalQuatntity} classes\n classes: ${classesOfStudent}`
}


showInformation('programming');
showInformation('relationalDataBase');
showInformation('artifitialInteligent');
showInformation('dataStructure');

let result = quantityOfClases('Cofla');
console.log(result);
