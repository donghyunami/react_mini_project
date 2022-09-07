## 더미데이터 사용

data/db.json(더미 데이터)를 사용하기 위해서는 전역으로 json-server를 설치해줘야한다.

```bash
 $ npm install -g json-server
```

<br>

## 사용하기

터미널에 아래와 같이 입력해주면 더미 데이터를 가상 서버로 열어볼 수 있다.

```bash
  $ json-server -p 3006 -w data/db.json
```

<br>

### 💡 package.json에 npm scripts에 등록하면, npm 명령어를 통해서 열 수 있다.

```json
  "scripts": {
    "start": "react-scripts start",
    "server": "json-server -p 3006 -w data/db.json"
  },
```
