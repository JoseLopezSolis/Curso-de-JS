 
 //35 minuts per day to housework
 //103 minuts for work
 //103 minuts to study
 //5 rest time

 let trabajo = "240 minutos";
 let estudio = "100 minutos";
 let tp = "100 minutos";
 let homework = "30 minutos de cosas de la casa";
 let descanso = "10 minutos de descanzo";

for(i=0;i<=10;i++){
    if(i==0){
        console.group('semana 1');
    }
    console.groupCollapsed('dia'+(i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();    
    if(i==7){
        console.group('semana 2');
    }
}