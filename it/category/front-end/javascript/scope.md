---
description: 스코프란? 식별자 접근 규칙에 따른 유효 범위.
---

# 스코프 (Scope)

## 1. 스코프란?

* 스코프(_scope_)는 **변수에 접근할 수 있는 범위**를 말한다.
* 범위는 중괄호(블록) 또는 함수에 의해 나뉜다.
* 자바스크립트는 새로운 함수가 생성 될 때마다 새로운 스코프가 발생한다.

## 1-1. 스코프의 주요 규칙

1. 안쪽 스코프에서 바깥쪽 스코프로 접근할 수 있지만 반대는 불가능하다.
2. 스코프는 중첩이 가능하다.
3. 전역/지역 스코프\
   \- 가장 바깥족의 스코프를 전역 스코프라고 부른다.\
   \- 전역이 아닌 다른 스코프는 모두 지역 스코프이다.
4. 지역 변수는 전역 변수보다 우선 순위가 높다.\
   \- 전역 스코프에서 선언한 변수는 전역 변수\
   \- 지역 스크포에서 선언한 변수는 지역 변수\
   \- 지역 변수는 전역변수보다 더 높은 우선 순위를 가진다.

> `전역 스코프`(_global_)는 어디에서든 해당 변수에 접근 가능
>
> `지역 스코프`(_local_)는 한정적인 범위에서 해당 변수에 접근이 가능&#x20;

## 2. 함수 스코프 (Function scope)

* 함수가 선언되면 하나의 스코프가 발생하는데 이걸 함수 스코프라고 한다.
* 함수 스코프는 **함수에서 선언한 변수는 해당 함수 내에서만 접근이 가능**하다.

```javascript
# 함수 스코프 예시
function fn1() {
  var aa = '12';  // 함수 스코프, 지역 변수 (local)
}
console.log(aa);  // Uncaught ReferenceError: aa is not defined

# 전연 스코프 예시
var abc = '123';  // 전역 스코프, 전역 변수 (global)
function fn2() {
  console.log(abc);
}
fn2(); // 123
```

> `var`키워드는 함수 내에서만 지역 변수로 유지된다.

## 3. 블록 스코프 (Block scope)

* 블록 스코프는 **블록(`{}`)내부에서 선언된 변수는 해당 블록에서만 접근 가능**한 걸 말한다.

```javascript
// var 예시
if (2 > 1) {
    var aa = 1;
}
console.log(aa); // 1

// let, const 예시
if (2 > 1) {
    let bb = 1;
}
console.log(bb); // Uncaught ReferenceError: aa is not defined
```

> ES6 이전 전통적인 JavaScript에는 함수 스코프와 전역 스코프 두 가지만 존재했다.&#x20;
>
>
>
> `var`로 선언한 변수는 함수 내부 또는 외부에서 선언되었는지에 따라 함수 스코프 또는 전역 스코프를 가진다.&#x20;
>
> 이때, 중괄호로 표시된 블록이 스코프를 생성하지 않는다는 점에서 혼란을 일으킬 수 있다.
>
>
>
> C나 Java와 같이 블록이 스코프를 생성하는 언어의 경우 let, const 예시처럼 에러가 발생한다.\
> 그러나 **블록은 var로 선언한 변수에 대해 스코프를 생성하지 않기 때문에 var 명령문은 전역 변수로 생성한다.**\
> \
> 요약하자면, ES6부터 블록은 스코프로 취급되기 시작했지만, 이는 `let`과 `const`로 변수를 선언했을 때만 유효하다.

|    scope   | const | let | var |
| :--------: | :---: | :-: | :-: |
|   global   |   N   |  N  |  Y  |
|  function  |   Y   |  Y  |  Y  |
|    block   |   Y   |  Y  |  N  |
| reassigned |   N   |  Y  |  Y  |

## 4. 렉시컬 스코프 (Lexical scope : 어휘적 범위)

* 함수를 어디서 **선언** 하였는지에 따라 상위 스코프를 결정한다.
* JavaScript를 비롯한 대부분의 프로그래밍 언어는 렉시컬 스코프 (정적 스코프 = Static scope)이다.

```javascript
  function init() {
      var name = "Mozilla"; // name은 init에 의해 생성된 지역 변수이다.
      function displayName() { // displayName() 은 내부 함수이며, 클로저다.
        alert(name); // 부모 함수에서 선언된 변수를 사용한다.
      }
      displayName();
    }
    init();
```

## 5. 동적 스코프 (Dynamic scope)

* 함수를 어디서 호출 하였는지에 따라 상위 스코프를 결정한다.

```javascript
function foo() {
  console.log(x);
}

function bar() {
  x = 15;
  foo();
}

var x = 10;
foo(); // 10
bar(); // 15
```
