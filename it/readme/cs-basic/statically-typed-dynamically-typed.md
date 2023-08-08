# 정적타입(Statically typed), 동적타입 (Dynamically typed)

<figure><img src="../../../.gitbook/assets/image (1) (3).png" alt=""><figcaption></figcaption></figure>

## 정적 타입 언어, 동적 타입 언어

프로그래밍 언어의 타입 체계를 말한다. \
간략하게 말하자면 자료형을 결정하는 시점으로 구분된다.

&#x20;**정적타입 언어**란 **컴파일시 변수의 자료형(int, float, double, string 등)을 결정**하는 언어를 말한다.\
(ex: Java, C, C++, C#, Scala, Fortan, Haskell, ML, Pascal, Go, Swift, TypeScript)

즉, 프로그래머가 변수에 들어갈 값의 자료형을 직접 명시해줘야 한다. 자료형이 맞지 않는 값이 들어 있으면 컴파일 에러가 발생한다.

장점 :&#x20;

* 런타임 오류를 줄일 수 있다: 정적 타입 언어는 변수나 상수의 타입을 컴파일 시점에 정해주기 때문에, 런타임에 타입 오류가 발생할 가능성을 줄일 수 있습니다.
* 코드의 유지보수가 용이하다: 정적 타입 언어는 변수나 상수의 타입을 컴파일 시점에 정해주기 때문에, 코드의 타입 정보가 명확하고 정확하기 때문에 코드의 유지보수가 용이합니다.

**동적타입 언어**란 자료형이 동적으로 변하거나, **런타임(실행 하고 있는 동안)시에 변수형이 결정되는 언어로 자료형을 지정해줄 필요가 없다.**\
(ex: JavaScript, PHP, Ruby, Python)

처음 문자열로 선언한 변수를 정수형으로 저장했다가, 객체로도 저장 할 수 있다.\
예를들어 1 + "1" 을 계산하면 타입 추론하여 '11' 을 출력한다.

장점 :&#x20;

* 코드의 작성이 쉬워진다: 동적 타입 언어는 변수나 상수의 타입을 실행 시점에 결정되기 때문에, 코드의 작성이 쉬워집니다.
* 초보자가 사용하기 쉽다: 동적 타입 언어는 변수나 상수의 타입을 실행 시점에 결정되기 때문에, 초보자가 사용하기 쉽습니다.

## 강타입 언어, 약타입 언어

정적 타입 언어/동적 타입 언어와 강타입 언어/약타입 언어는 다른 개념이다.\
강타입/약타입 언어는 프로그래밍 언어의 타입 체계를 말하여, 이는 변수나 상수의 타입이 강제되는 정도를 말한다.\
반면, 정적/동적 타입 언어는 타입 체킹 시점(컴파일/런타임 시점)으로 구분된다.

* **강타입 언어**는 변수나 상수의 타입을 정해줘야 하며, 변수나 상수의 타입이 일치하지 않는 경우 컴파일 오류한다.
* **약타입 언어**는 변수나 상수의 타입을 정해주지 않고, 실행 시점에 변수나 상수의 타입이 결정한다. 심지어 암묵적으로 변환을 해주기도 한다.
* **정적타입 언어**는 변수나 상수의 타입을 컴파일 시점에 정해주며, 이를 통해 컴파일 시점에 타입 오류 잡을 수 있다.

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
