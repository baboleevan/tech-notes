# useEffect가 여러개일 경우 어떤 순서로 처리될까?

React 컴포넌트 내부에서 여러 개의 useEffect 훅이 호출될 경우,\
이들의 실행 순서는 useEffect가 등록된 순서로 실행된다.

첫번째 useEffect가 마운트 이후에 호출된 경우, 두번째 useEffect는 첫번째가 완료된 이후에 호출된다.\
단, useEffect에서 상태(state)를 변경하고, 다른 useEffect가 디펜던시에 등록되어 있다면 그 상태가 변경된 후에 실행된다.

만약, 복수의 useEffect가 동일한 디펜던시를 바라본다면 순서가 보장 되지 않는다.\
따라서 의존성이 동일하다면 하나의 useEffect에서 처리하는 것이 좋다.
