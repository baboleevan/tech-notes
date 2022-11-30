# 특정 파일 제외하고 압축하기

```shell
# osx 숨김 파일 제외하고 압축하기
$ zip -r update1.0.0.0.zip ./ -x "*.DS_Store" -x "__MACOSX"
```
