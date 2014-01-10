MEAN-LEARN
==========

MEAN(MongoDB, Express, AngularJS, Node.js)을 배우는 프로젝트

### IntelliJ에서 Node 사용시 [ReferenceError: Process is not defined] 발생시 대처방법

현재 노드 버전은 v0.10.24, Express는 3.4.7 입니다.

처음 모듈을 만들고 Node Express App을 실행하면 Console 창에 [ReferenceError: Process is not defined]가 발생합니다.

node_modules 하위의 tools/node.js 파일들을 모두 찾아 'vm.createContext'을 찾아서 다음과 같이 변경합니다.
``` javascript
var UglifyJS = vm.createContext({
      sys           : sys,
      console       : console,
      process       : process,
      Buffer        : Buffer,
      MOZ_SourceMap : require("source-map")
});
```
[링크](https://github.com/Chevex/UglifyJS2/commit/7348facbe994aa1909a276b4be54f13c7f01e079)

