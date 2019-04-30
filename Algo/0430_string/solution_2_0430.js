// 문자열 s와 자연수 n을 입력받아, 만약 s의 길이가 n보다 작으면 s의 왼쪽에 공백으로 추가해서 길이가
// n이 되게 만든 후 반환하고, 아니면 s를 그대로 반환하는 함수를 작성해보세요.

function leftPad(s, n){
    if(s.length < n){
        var blank = (n - s.length);
        for(var i=0;i<blank;i++){
            s = " " + s;
        }
    }
    return s;
}