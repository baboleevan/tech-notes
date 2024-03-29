---
description: 모든 쿼리를 기록하는 로그 파일 또는 테이블
---

# general\_log

MySQL의 general\_log는 데이터베이스에서 실행된 모든 쿼리를 기록하는 로그이다. 이 로그는 MySQL 서버의 모든 사용자에 대한 쿼리를 기록하므로 디버깅, 모니터링, 최적화 등의 용도로 사용된ㄷ다.

general\_log가 활성화되면, MySQL 서버에서 실행된 모든 쿼리가 로그 파일에 저장되고, 로그 파일에는 각 쿼리의 실행 시간, 사용자, 호스트, 실행된 쿼리 텍스트 등이 기록된다.&#x20;

이 로그를 사용하면, 성능 문제나 잘못된 쿼리가 원인이 되는 문제를 식별할 수 있다.

그러나 general\_log가 항상 활성화되어 있는 경우, 많은 양의 로그 데이터가 생성되어 성능 저하를 유발할 수 있다. 따라서, 일반적으로는 일시적으로 활성화하여 문제가 발생하는 경우에만 사용하는 것이 좋다. 로그 파일은 일반적으로 MySQL 서버의 로그 디렉토리에 저장되며, 로그 디렉토리 경로는 MySQL 구성 파일(my.cnf)에서 지정할 수 있습니다.

```sql
SHOW GLOBAL VARIABLES LIKE '%general_log%';
SET GLOBAL general_log = 'off';
```
