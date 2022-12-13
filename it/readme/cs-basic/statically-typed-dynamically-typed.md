# 정적타입(Statically typed), 동적타입 (Dynamically typed)

<figure><img src="../../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

## 정적 타입 언어, 동적 타입 언어

자료형을 결정하는 시점으로 구분된다.

&#x20;**정적타입 언어**란 **컴파일시 변수의 자료형(int, float, double, string 등)을 결정**하는 언어를 말한다.\
(ex: Java, C, C++, C#, Scala, Fortan, Haskell, ML, Pascal, Go, Swift, TypeScript)

즉, 프로그래머가 변수에 들어갈 값의 자료형을 직접 명시해줘야 한다. 자료형이 맞지 않는 값이 들어 있으면 컴파일 에러가 발생한다.\
컴파일시 자료형을 결정하기 때문에 속도가 빠르고, 타입 에러로 인한 문제점을 초기에 발견 할 수 있으므로 타입 안정성이 올라간다.

**동적타입 언어**란 자료형이 동적으로 변하거나, **런타임(실행 하고 있는 동안)시에 변수형이 결정되는 언어로 자료형을 지정해줄 필요가 없다.**\
(ex: JavaScript, PHP, Ruby, Python)

처음 문자열로 선언한 변수를 정수형으로 저장했다가, 객체로도 저장 할 수 있다.\
예를들어 1 + "1" 을 계산하면 타입 추론하여 '11' 을 출력한다.\
자료형을 덜 신경써도 되므로 간단한 프로그램을 만들때는 개발 속도 면에서 유리한 장점이 있다.

## 강타입 언어, 약타입 언어

정적 타입 언어/동적 타입 언어와 강타입 언어/약타입 언어는 완전히 다른 개념이다.\
강타입과 약타입은 형변환(Type Casting 또는 Type Conversion)을 기준으로 구분된다.

* **강타입 언어**는 다른 형끼리의 변환이 금지되어있고, 만약 변환을 하고싶다면 명시적으로 타입을 선언해줘야한다.\
  (자료형이 맞지 않을 시 에러 발생)
* **약타입 언어**는 다른 형끼리의 변환이 가능하며, 심지어 암묵적으로 변환을 해주기도 한다.

> Python은 동적 타입의 강타입 언어이다. (Python 3.6버전부터 정적 타입도 지원한다.)
>
> \
> TypeScript는 정적 타입의 강타입 언어이다. 또한 ES5, ES6를 모두 포함하는 자바스크립트의 상위집합(Superset)이기 때문에, 기존의 자바스크립트 문법을 그대로 사용할 수 있다.

```java
# Java
String userName = "Hong gil dong";
System.out.println(userName); // Hong gil dong
userName = 1; // error: incompatible types: int cannot be converted to String
System.out.println(userName);
```

```javascript
# JavaScript
var userName = "Hong gil dong";
console.log(userName); // Hong gil dong
userName = 1;
console.log(userName); // 1
```

```php
# PHP
$userName = 'Hong gil dong';
echo $userName; // Hong gil dong
$userName = 1;
echo $userName; // 1

# PHP 에서 강제 타입 변환
$page = (int) $_GET['page']; // page 파라미터의 형을 int형으로 타입 캐스트

```

```swift
# Swift
let a: Int = 10
let b: Float = 1.23
let sum = a + b // Binary operator '+' cannot be applied to operands of type 'Int' and 'Float'    
```
