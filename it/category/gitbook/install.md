# 설치 방법

```bash
# 설치
$ npm install gitbook-cli -g
# 생성
$ gitbook init
# 서버 실행
$ gitbook serve 
# 플러그인 설치
$ gitbook install
```

<figure><img src="../../../.gitbook/assets/image (3).png" alt=""><figcaption><p>graceful-fs error</p></figcaption></figure>

```bash
# 설치중 에러 발생시 아래와 같이 4.2.0 버전으로 매뉴얼 설치한다.
cd /opt/homebrew/lib/node_modules/gitbook-cli/node_modules/npm/node_modules && npm install graceful-fs@4.2.0--save
```

book.json 파일 생성

```json
{
  "plugins": [
    "disqus",
    "theme-api",
    "hide-published-with",
    "multipart",
    "collapsible-chapters"
  ],
  "pluginsConfig": {
    "disqus": {
      "shortName": "baboleevan"
    },
    "theme-api": {
      "theme": "dark"
    }
  }
}
```

```bash
# E-book을 만들어주는 소프트웨어
$ brew install --cask calibre

$ gitbook pdf
$ gitbook epub
$ gitbook mobi

```
