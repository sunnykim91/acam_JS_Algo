// 문자열을 입력받아, 문자열 안에 들어있는 모든 모음(a, e, i, o, u)의 갯수를 반환하는 함수를 작성하세요.

function countAeiou(str) {
    var ctn = 0;
    for (var i = 0; i < str.length; i++) {
        slStr = str.slice(i, i + 1)
        if (slStr == "a" || slStr == "e" || slStr == "i" || slStr == "o" || slStr == "u") {
            ctn++;
        }
    }
    return ctn;
}