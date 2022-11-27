# 즉시 호출하는 함수 표현식 (IIFE, Immediately Invoked Function Expression)

**IIFE**란, "Immediately Invoked Function Expression"의 줄임말로, **정의되자마자 즉시 실행되는 함수 표현식**을 말한다.

> **'Self-Executing Anonymous Function'** 이라고도 불리며,\
> 전역 스코프에 불필요한 변수를 추가해서 오염시키는 것을 방지할 수 있을 뿐 아니라 IIFE 내부안으로 다른 변수들이 접근하는 것을 막을 수 있는 방법이다.

## IIFE의 목적 <a href="#iife" id="iife"></a>

IIFE는 **외부에서 접근할 수 없는 자체 Scope를 형성한다**.\
Parser는 JavaScript에서 변수의 Scope가 함수에 의해 정해진다는 것을 알고 있다. 그러므로 IIFE 함수는 **상위 Scope에 접근할 수 있으면서도, 내부 변수를 외부로부터 보호해 Privacy를 유지할 수 있다**.

따라서 IIFE 사용의 가장 큰 목적은 **데이터 프라이버시**와 **코드 모듈화**라고 할 수 있다.

```javascript
// 예시
(function() {
    // IIFE 바디
    console.log("IIFE");
})();

// 화살표 함수로도 사용 가능하다
(() => {
    console.log("IIFE");
})();
```

```javascript
const f = (function() {
    var count = 0; // 외부에서 접근 할 수 없는 내부 변수
    return function() {
        return `I have been called ${++count} time(s).`;
    }
})();

f(); // 'I have been called 1 time(s).'
f(); // 'I have been called 2 time(s).'
f(); // 'I have been called 3 time(s).'
f(); // 'I have been called 4 time(s).'

console.log(count); // ReferenceError: count is not defined

var f2 = (function (x) {
    return x * 2;
})(2);
console.log(f2); // 4
```
