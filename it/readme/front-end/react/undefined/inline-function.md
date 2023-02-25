# Inline function 사용해도 될까?

React에서 인라인 함수를 사용하는 것은 안티 패턴은 아니지만, 성능 문제가 발생할 가능성있다.

인라인 함수는 매번 렌더링이 발생할 때마다 새로운 함수를 생성하기 때문에, 메모리 낭비와 성능 저하를 초래할 수 있으며, 특히, 자식 컴포넌트에서 인라인 함수를 props로 전달하면, 자식 컴포넌트가 불필요하게 리렌더링될 가능성도 있다.

이러한 문제를 해결하기 위해서는 인라인 함수 대신에 함수를 따로 선언하고, props로 전달하는 것이 성능상 이점이 있다. 또는 React의 useCallback 훅을 사용하여 함수를 캐싱하고, 필요할 때만 다시 생성하는 방법도 사용.

하지만, 성능이 크게 문제되지 않는 경우에는 인라인 함수를 사용해도 무방하다.&#x20;



```jsx
// 1. 버튼 클릭시 실행되는 이벤트 핸들러에서는 성능 문제가 크게 발생하지 않는다.
function handleClick() {
  console.log('Button clicked');
}

function MyComponent() {
  return <button onClick={handleClick}>Click me</button>;
}

// 2. 반복문 내부에서 사용할 경우, 컴포넌트가 반복문을 통해 리스트 아이템을 렌더링하고, 각 아이템을 클릭할 때마다 함수를 실행한다. 이 경우에는 인라인 함수를 사용하면 각 아이템마다 새로운 함수가 생성되기 때문에 성능 문제가 발생할 수 있다.
function MyList(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id} onClick={() => props.onItemClick(item.id)}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}

// 2.1 2번 예시를 useCallback을 통해 메모이제이션 처리
function MyList(props) {
  const handleClick = useCallback((itemId) => {
    props.onItemClick(itemId);
  }, [props.onItemClick]);

  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id} onClick={() => handleClick(item.id)}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}
```
