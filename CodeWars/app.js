//FIRST EXERCISE 
/*function solution(num){
    let counting = 0;
    for(let i = 0; i<num;i++){
        if(i%3==0 || i %5==0){
            counting += i;
        }
      }
      return counting;
}
let answer = solution(10);
console.log(answer);*/


//SECOND EXERCISE
function getCount(str) {
    let array = []
    array.push(str);
    let count = 0

    for (var i = 0; i < array.length; ++i) {
        for (var j = 0; j < array[i].length; ++j) {
            var letter = array[i][j];
            switch (letter) {
                case 'a':
                    count ++;
                    break;
                case 'e':
                    count ++;
                    break;
                case 'i':
                    count ++;
                    break;
                case 'o':
                    count ++;
                    break;
                case 'u':
                    count ++;
                    break;
                default: 
                    break;
            }
        }
    }
    return count;
  }

  var answer = getCount('hola mundo');

  console.log(answer);



