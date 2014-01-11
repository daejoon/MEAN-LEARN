# MEAN-LEARN

MEAN(MongoDB, Express, AngularJS, Node.js)을 배우는 프로젝트


## 이슈 정리

#### IntelliJ에서 Node 사용시 [ReferenceError: Process is not defined] 발생시 대처방법

현재 노드 버전은 v0.10.24, Express는 3.4.7 이다.

처음 모듈을 만들고 Node Express App을 실행하면 Console 창에 [ReferenceError: Process is not defined]가 발생한다.

node_modules 하위의 tools/node.js 파일들을 모두 찾아 'vm.createContext'을 찾아서 다음과 같이 변경한다.
``` javascript
var UglifyJS = vm.createContext({
      sys           : sys,
      console       : console,
      process       : process,
      Buffer        : Buffer,
      MOZ_SourceMap : require("source-map")
});
```
[원본 링크](https://github.com/Chevex/UglifyJS2/commit/7348facbe994aa1909a276b4be54f13c7f01e079)

#### IntelliJ에서 Node http를 Cluster 사용시 연결이 안되는 문제.

결국 클러스터링을 사용하면은 디버깅이 안된다. Run으로 실행 한다.

[원본 링크](https://github.com/node-inspector/node-inspector/issues/130)

[StackOverflow](http://stackoverflow.com/questions/16840623/how-to-debug-node-js-child-forked-process)

