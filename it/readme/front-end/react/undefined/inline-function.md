# Inline function 사용해도 될까?

React에서 인라인 함수를 사용하는 것은 안티 패턴은 아니지만, 성능 문제가 발생할 가능성있다.

인라인 함수는 매번 렌더링이 발생할 때마다 새로운 함수를 생성하기 때문에, 메모리 낭비와 성능 저하를 초래할 수 있으며, 특히, 자식 컴포넌트에서 인라인 함수를 props로 전달하면, 자식 컴포넌트가 불필요하게 리렌더링될 가능성도 있다.

이러한 문제를 해결하기 위해서는 인라인 함수 대신에 함수를 따로 선언하고, props로 전달하는 것이 성능상 이점이 있다. 또는 React의 useCallback 훅을 사용하여 함수를 캐싱하는 것이 좋다.

```jsx
// 간단하게 버튼 클릭시 실행되는 이벤트 핸들러에서는 성능 문제가 크게 발생하지 않는다.
// 하지만, 인라인 함수를 많이 사용하면 메모리 사용량이 늘어날 뿐 아니라, PureCompoent 또는 React.memo를 사용해도 리렌더링이 발생한다.
// 이는 메서드 전달이 항상 "참조에 의한 전달"이기 때문에 새 함수를 만들고 모든 렌더링 주기에 참조를 변경하기 때문이다.
function MyComponent() {
  return <button onClick={() => console.log('Button clicked')}>Click me</button>;
}

// 안티패턴 예시
// 반복문 내부에서 사용할 경우, 컴포넌트가 반복문을 통해 리스트 아이템을 렌더링하고, 각 아이템을 클릭할 때마다 함수를 실행한다. 
// 이 경우에는 인라인 함수를 사용하면 각 아이템마다 새로운 함수가 생성되기 때문에 성능 문제가 발생할 수 있다.
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

// 안티패턴 예시
// 자식 컴포넌트에 props로 함수를 전달하는 경우,
// 부모 컴포넌트에서 인라인 함수를 props로 전달하는 것은 안티 패턴 중 하나이다. 
// 이는 매번 렌더링이 될 때마다 새로운 함수가 생성되어 성능 저하를 일으키기 때문이다. 
// 따라서, 인라인 함수 대신에 부모 컴포넌트에서 함수를 생성하여 props로 전달하는 것이 좋다.
function MyComponent(props) {
  return (
    <div>
      <button onClick={() => props.onClick()}>Click me</button>
    </div>
  );
}

// 추천방식 
// useCallback을 통해 메모이제이션 처리
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

// 추천방식
// 부모 컴포넌트에서 함수를 생성하여 props로 전달
function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
```

* [https://medium.com/technogise/journey-of-improving-react-app-performance-by-10x-9195d4b483d4](https://medium.com/technogise/journey-of-improving-react-app-performance-by-10x-9195d4b483d4)
