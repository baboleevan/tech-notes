# 원격 저장소에 올라간 파일 삭제 하기

```shell
# 원격 저장소 및 로컬 저장소의 파일을 삭제합니다.
$ git rm -r [File Name]

# 원격 저장소에 있는 파일만 삭제합니다.(로컬 저장소의 파일은 보존)
$ git rm --cached -r [File Name]

# 예시
$ git rm --cached -r .idea
$ git commit -m "Delete .idea"
$ git push origin
```
