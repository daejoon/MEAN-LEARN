# MEAN-LEARN

MEAN(MongoDB, Express, AngularJS, Node.js)을 배우는 프로젝트


## Issue List

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

결국 클러스터링을 사용하면은 디버깅이 안된다. Run(Release)으로 실행 한다.

[원본 링크](https://github.com/joyent/node/issues/5318)

[StackOverflow](http://stackoverflow.com/questions/16840623/how-to-debug-node-js-child-forked-process)

#### Render ejb with express

``` javascript
var express = require('express');
var app = express();


// Register ejs as .html. If we did
// not call this, we would need to
// name our views foo.ejs instead
// of foo.html. The __express method
// is simply a function that engines
// use to hook into the Express view
// system by default, so if we want
// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__express`.

app.engine('.html', require('ejs').__express);

// Optional since express defaults to CWD/views

app.set('views', __dirname + '/views');

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');

// Dummy users
var users = [
  { name: 'tobi', email: 'tobi@learnboost.com' },
  { name: 'loki', email: 'loki@learnboost.com' },
  { name: 'jane', email: 'jane@learnboost.com' }
];

app.get('/', function(req, res){
  res.render('users', {
    users: users,
    title: "EJS example",
    header: "Some users"
  });
});


app.listen(80);
console.log('Express app started on port %d', 80);
```

[원본 링크](http://runnable.com/UTlPPF-f2W1TAAEa/render-ejs-with-express)

#### Jade 1.1.4에서 script 태그 작성시 오류

[Node.js 프로그래밍](http://www.yes24.com/24/goods/6271069?scode=029) 책보고 공부하는데 오류 발생

jade 버전이 올라가면서 문법이 변경됐다.

`script(type='text/javascript')` => `script(type='text/javascript').` 스크립트 끝에 '.'을 추가해야 한다.

[원본 링크](http://jade-lang.com/)

#### 이거는 git branch test 입니다.
