//Crear una funcion para preguntarle a cofla en que materia se quiere inscribir
//Si ya hay 20 alumnos anotados en la materia negarle la inscripcion
//Si hay menos de 20 alumnos inscribir a cofla y anadirlo a la lista de alumnos
var subjects = {
        programming: ['Mr. Gustavo','Pedro','Pepito','Maria'],
        relationalDataBase: ['Mr. Walter White','Pedro','Juan','Pepito','Maria'],
        artifitialInteligent: ['Mr. Walter','Pedro','Juan','Pepito',],
        dataStructure: ['Ms. May','Juan','Pepito','Maria']
}
//TO REMOVE THE TEACHER
subjects['programming'].shift(); //Delete the first element of the list
subjects['relationalDataBase'].shift();
subjects['artifitialInteligent'].shift();
subjects['dataStructure'].shift();


const resgisterStudent = (subjects,subjectSelected,student)=>{
    if(subjectSelected.includes(subjectSelected)){
        if(subjects[subjectSelected].length >= 20){
            alert(`The subject ${subjectSelected} has more than 20 students, you can't join to this class, try another.`);
        } else{
            subjects[subjectSelected].push(student);
            alert(`Congratulations! ${student} you're now in the class of ${subjectSelected}`);
        }
    }else{
        alert("The subject doesn't exist try again")
    }
    
}

const showStudents = (subjects,subjectSelected) =>{
    if(subjects[subjectSelected] !== undefined ){
        return subjects[subjectSelected];
    } else{
        alert("The subject isn't correct")
        return false
    }
}

const availableSubjects = (subjects) =>{
    let subjectsAvailables = [];
    for(subject in subjects){
        subjectsAvailables.push(subject);
    }
    return subjectsAvailables;
}

while(true){
    let student = prompt("Write your name:")
    let subjectsOfTheSchool = availableSubjects(subjects);
    let subjectOption = prompt(` Enter one of the following subjects: ${subjectsOfTheSchool}`)

    resgisterStudent(subjects,subjectOption,student);
    let studentsInClass = showStudents(subjects,subjectOption);
    alert(`The students of the subject of ${subjectOption} are: ${studentsInClass}`)

    let addOneMore = prompt("Would you like to add one more?")
    if(addOneMore == "yes"){
        continue
    }else{
        break
    }
    
}


