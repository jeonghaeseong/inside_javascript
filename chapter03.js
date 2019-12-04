// 자바스크립트 데이터 타입과 연산자
// 01. 기본타입 : 숫자(Number), 문자열(String), 불린값(Boolean), undefined, null

console.log("01. 기본타입");

var intNum = 10;
var floatNum = 0.1;

console.log("숫자(Number) : ", typeof intNum, typeof floatNum);

var singleQuoteStr = "single quote string";
var doubleQuoteStr = "double quote string";

console.log("문자열(String) : ", typeof singleQuoteStr, typeof doubleQuoteStr);

var boolVar = true;

console.log("불린값(Boolean : ", typeof boolVar);

var emptyVar;

console.log("undefined : ", typeof emptyVar);

// 자바스크립트의 null 값은 의도적으로 값이 비어있음을 표현
// null의 typeof 는 Object라는것을 조심
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/null
var nullVar = null;

console.log("null : ", typeof nullVar);

// 02. 참조타임 : 객체(Object) > 배열(Array), 함수(Function), 정규표현식
