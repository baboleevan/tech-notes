---
description: 대부분의 경우, 리렌더링은 React 어플리케이션의 버그가 아니라 기능이다.
---

# 리렌더링은 언제 일어 날까?

React에서 컴포넌트가 **리렌더링되는 조건**은 크게 다음과 같다.

1. props나 state가 변경될 때
2. 부모 컴포넌트가 리렌더링될 때
3.  Context API \
    Context Provider의 value가 변경되면 해당 Context를 구독하는 모든 컴포넌트가 리렌더링된다. \
    따라서, Context Provider의 value가 불필요하게 자주 변경될 경우 불필요한 리렌더링이 발생할 수 있다.

    하지만, React는 똑똑하게도 Context Provider의 value가 변경되었을 때, 실제로 사용되는 컴포넌트들만 리렌더링한다. 따라서, 모든 컴포넌트가 리렌더링되지는 않는다.

    또한, React.memo나 shouldComponentUpdate와 같은 방법을 사용하여 Context Provider의 value 변경 시 해당 컴포넌트의 리렌더링을 방지할 수도 있다. 이러한 방법들을 사용하면 Context를 사용하는 컴포넌트의 성능을 최적화할 수 있다.
4. forceUpdate() 함수를 호출할 때 (클래스형 컴포넌트를 사용할 경우)



**리렌더링을 최적화하는 방법**

<pre class="language-jsx"><code class="lang-jsx">// 1.React.memo()를 사용하여 컴포넌트를 메모이제이션하기
<strong>const MyComponent = React.memo(props => {
</strong>  return (
    &#x3C;div>
      &#x3C;h1>{props.title}&#x3C;/h1>
      &#x3C;p>{props.description}&#x3C;/p>
    &#x3C;/div>
  );
});

// 2. useCallback()과 useMemo()를 사용하여 함수와 값 메모이제이션하기
// useCallback()은 함수를 메모이제이션하고 useMemo()는 값(value)을 메모이제이션한다.
// 이러한 함수와 값들은 이전 값과 비교하여 변경되었는지를 확인하고 변경되지 않았다면 리렌더링을 방지한다.
<strong>const MyComponent = ({ items }) => {
</strong>  const handleClick = useCallback((id) => {
    console.log(`Clicked item ${id}`);
  }, []);

  const totalItems = useMemo(() => items.reduce((acc, item) => acc + item.count, 0), [items]);

  return (
    &#x3C;div>
      &#x3C;ul>
        {items.map(item => (
          &#x3C;li key={item.id}>
            {item.name} - &#x3C;button onClick={() => handleClick(item.id)}>Click me&#x3C;/button>
          &#x3C;/li>
        ))}
      &#x3C;/ul>
      &#x3C;p>Total items: {totalItems}&#x3C;/p>
    &#x3C;/div>
  );
}

// 3. 상태를 불변 객체로 관리하기
// 상태가 변경되었는지를 빠르게 판단할 수 있도록 React에서 상태(state)는 불변 객체(immutable object)로 관리하는 것이 좋다.
const MyComponent = () => {
  const [state, setState] = useState({ count: 0 });

  const handleClick = () => {
    setState(prevState => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  return (
    &#x3C;div>
      &#x3C;p>Count: {state.count}&#x3C;/p>
      &#x3C;button onClick={handleClick}>Click me&#x3C;/button>
    &#x3C;/div>
  );
}
</code></pre>

**함수형 컴포넌트에서 fourceUpdate를 구현하는 예시**

```jsx
// useReducer는 상태와 업데이트 함수를 반환하며, 
// 업데이트 함수를 호출하면 해당 상태를 변경하고, 리렌더링을 강제할 수 있다.
// 하지만 이 방법은 일반적으로 권장되는 방법은 아니며, 사용에 주의가 필요하다.
function useForceUpdate() {
  const [, dispatch] = useReducer((state) => state + 1, 0);
  return dispatch;
}
export default useForceUpdate;

const forceUpdate = useForceUpdate();

function handleClick() {
  // 리렌더링 유도
  forceUpdate();
}
```
