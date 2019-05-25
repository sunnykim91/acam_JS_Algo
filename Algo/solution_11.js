// 11번
// 문자열을 입력받아, 
//문자열 안에 들어있는 단어 중 가장 긴 단어를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)

function longWord(str){

  result = [];
  arr = [];

  var words = str.split(" ");
  
  for(var i=0;i<words.length;i++){
    arr += words[i];
    console.log(arr.length);
  }
  console.log(arr);
  
  return result;
}

  // result = [];
  // arr=[];
  // var compareNum = 0;

  // for(var i=0;i<str.length;i++){
  //   if(str[i] == " "){
  //     if (compareNum <= arr.length){
  //       compareNum = arr.length;
  //       result = [];
  //       result += arr;
  //     }
  //     arr=[];
  //   }
  //   else{
  //     arr += str[i];
  //   }
  // }

 
console.log(longWord("a abc ab abcd e"));