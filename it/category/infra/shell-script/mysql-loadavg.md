# MySQL loadavg 모니터링

**/proc/loadavg**\
\*\*\*\*이 파일의 처음 세 필드는 1, 5, 15분 동안 평균 실행 대기열 또는 디스크 I/O에 있는 로드 평균 수치를 가르킨다.

```bash
#!/bin/sh

mysql_loadavg=`sshpass -f /root/db_password.txt ssh 123.123.123.123 cat /proc/loadavg|awk -F \. '{print $1}'`

if [ "$mysql_loadavg" -ge "10" ]; then
    curl "https://example.com/push" --data "mesg=slave1:123.123.123 loadavg:$mysql_loadavg"
fi
```
