# 참조 할당과 깊은 복사, 얕은 복사

## 참조 할당

객체를 참조하는 주소값을 할당하는 것으로 복제 되는 것이 아니다.

```javascript
const student1 = {  
  name: {
    first: 'gildong',
    last: 'hong'
  },
  subject: [
    {
      mathematics: 90,
      science: 100,
      english: 88
    }
  ]
};

const student2 = student1; // 참조 할당
student2.mathematics = 100;

console.log(student1.mathematics); // 100
console.log(student1.mathematics); // 100
```

## 얕은 복사 (Shallow Copy)

객체를 복사할때 객체 내부의 기본형 데이터는 복사가 가능하지만, 객체 내부의 다른 참조형 데이터는 복사가 아닌 할당된다.

```javascript
const arr1 = [
    {count: 10},
    {count: 20}
];
const arr2 = [..arr1]; // Spread Operator 을 이용한 Shallow Copy
const arr3 = Object.assign(arr1); // Object.assign 함수를 이용한 Shallow Copy
```

## 깊은 복사 (Deep Copy)

```javascript
const arr1 = [
    {count: 10},
    {count: 20}
];
const arr2 = JSON.parse(JSON.stringify(arr1)); 
```

```javascript
const arr1 = [1, 2];
const arr2 = [...arr1];
arr1.push(3, 4, 5);
console.log(arr1, arr2); 
// arr1 = [1, 2, 3, 4, 5]
// arr2 = [1, 2]
```

**Object, Array를 복사하면 얕은 복사가 되지만 Number, String, Boolean, null 은 깊은 복사 된다.**

