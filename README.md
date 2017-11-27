## week 4:

- day 1 :
1. 전반적인 잔소리
    1) 변수명
    	* 캐멀케이스 : startName
    	* 스네이크케이스 : start_name
    	* 헝가리언케이스 : strStartName -> is_admin?

    2) 코딩 스타일

     ```java
     // BSD : 퍼포먼스는 더 좋다
     if(조건문)
     {

     }

     for(var a = 0; a < 10; a++)
     {

     }
     ```

     ```java
     // K&R
     if(조건문) {

     }

     for(var a = 0; a < 10; a++) {

     }
     ```

     ```java
     // GND : 거의 사용하지 않는다
     if(조건문)
     {

     }
     ```

    3) 인덴트 지킬 것 : 중요하다!!

2. HTML

    0) rails g scaffold posts title content

    1) HTML

    - 무상태성 
      - 세션으로 무상태성 해결
      - 세션은 쿠키로 이루어져있다
    - head : title, meta,,,
    - body : div, p, h1....

    2) css 

    - HTML을 꾸며준다
    - 부트스트랩
    ```ruby
    # Gemfile
    gem 'bootstrap-sass'
    ```

    ```ruby
    # app/assets/stylesheets/application.css -> application.scss
    @import 'bootstrap';
    ```

    ```ruby
    # app/views/posts/index.html.erb
    <p id="notice"><%= notice %></p>

    <h1>Listing Posts</h1>

    <table class="table">
      <thead>
        <tr>
          <th colspan="3"></th>
        </tr>
      </thead>

      <tbody>
        <% @posts.each do |post| %>
          <tr>
            <td><%= link_to 'Show', post %></td>
            <td><%= link_to 'Edit', edit_post_path(post) %></td>
            <td><%= link_to 'Destroy', post, method: :delete, data: { confirm: 'Are you sure?' } %></td>
          </tr>
        <% end %>
      </tbody>
    </table>

    <br>

    <%= link_to 'New Post', new_post_path %>
    ```

    3) javascript

     * HTML을 역동적으로 만든다
     * 객체지향이지만 프로토타입 기반(자세한 내용은 react 할 것이 아니면 알 필요 없음)
     * 자바와 문법이 비슷
     * 제이쿼리의 상위 개념, 제이쿼리는 자바스크립트의 하위 라이브러리
    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
        <p></p>
        <h1></h1>
        <!-- 태그 안에 속성이 존재 -->
        <img src="www.likelion.net" class="test" data-cirm="">

        <style>
          /* .test : css 셀렉터 */
          .test {
            color: pink;
            font-size: 10em;
          }

        </style>

        <script type="text/javascript">
          document.getElementByClassName('test');
        </script>
        
      </body>
    </html>
    ```

    ```javascript
    <script type="text/javascript">
      // 타입을 정해주지 않아도 자동으로 타입을 매칭
      var el = 10;
      var el2 = 11;
      // let, const .. var만 사용

      for(var a = 1; a < 10; a++) {
        // 개발자도구의 console에서 확인 가능
        // console이라는 객체에 log라는 메소드를 사용한다.
        console.log("HI");
        // dir : 내용을 보여준다
        console.dir(a);
      }

      console.dir(console)
    </script>
    ```

    4) HTML과 javascript의 상호작용

    * 수도코드

      * 컴퓨터는 단계단계 하나하나 명시해야 한다.

      ```
      Q. 오늘 출석한 사람 중에서 가장 키가 큰 사람은?
      (bubble sort)

      1. 배열을 만든다
      - 배열에 모든 사람의 키를 입력한다.
      2. 첫번째 사람의 키를 알아낸다.
      - 이 사람이 가장 큰 사람이라고 가정한다.
      3. 두번째 .. 세번째 사람 .. 돌면서 가장 큰 사람과의 키를 비교한다.
      4. 가장 큰 사람보다 더 큰 사람이 나타나면
      - 그 사람이 가장 큰 사람이라고 가정한다.
      5. 모든 사람의 키를 비교하고 나면 가장 큰 사람의 키를 알 수 있다.
      ```

      ```
      Q. 홈페이지에 가입할 때 중복체크하는 과정

      1. 아이디를 폼에 입력한다.
      2. 중복확인 (이벤트 리스너)버튼을 ***클릭한다. -> 이벤트
      3. 폼이 빈칸인지 확인한다. -> 메소드
      - 빈 칸일 경우 안내메세지 출력
      4. 폼이 빈칸이 아니면 DB에 쿼리를 날린다.
      5. row가 존재하는지 확인한다.
      - 결과값이 1 : 아이디가 존재한다.
      - 결과값이 0 : 아이디가 존재하지 않는다.
      6. 결과값을 출력한다.
      ```

    * event 
    * console : 개발자도구 > console
    * window
      * 브라우저를 지칭
      * javascript의 최상위 객체
    * locaion : 현재 위치, 주소값
    * document : 앞으로 자주 다루게 될 것
      * HTML 문서
    * ()가 붙으면 메소드, 안붙으면 속성
      * 메소드는 객체를 행동하게 하는 것
      * 속성은 객체가 가지고 있는 값

      ```
      location.href; // 현재 위치의 주소 값을 출력
      // location 객체의 href의 값을 가진 속성

      location.href("http://google.com"); // ??
      location.replace("http://google.com"); // 페이지가 변한다. history를 다 지워버린다.
      // location 객체의 replace 행동

      window.history;
      window.history.back // redirect_to :back;

      // 행동은 f가 붙어있다.
      console.memory;
      console.log;

      // naver에서 개발자도구 > console
      var logo = document.getElementsByClassName('naver_logo');
      console.log(logo);

      var logo2 = $('.naver_logo');
      console.log(logo2);
      ```

3. HTML과 javascript의 상호작용

    1)  javascript 참고 : https://www.w3schools.com/js/

    * 필요한 것만 찾아서 사용

    2 ) javascript 사용 법

    ```html
    # html에 직접 작성
    <script>
      console.log("내가 왔다!!!!")
    </script>
    ```

    ```html
    # import 해주는 법
    # 기본 루트는 public 폴더
    <script src="/come.js"></script>
    ```

    ```javascript
    // app/assets/javascripts/posts.js
    // coffescript는 사용 안함
    // pipeline

    console.log("내가 두번째 왔다!!!!")
    ```

    3) 50분 마다 잠시 쉬는 시간을 가지는 안내메세지 출력

    ```
    Q. 50분마다 잠시 쉬는 시간을 가지는 안내메세지를 출력
    + 17시는 마지막 시간으므로 "수고하셨습니다." 메세지 출력
    + 그 이전에는 "열공합니다." 메세지 출력

    1. 현재 시간을 가져온다.
    2. 현재 시간 중에서 "시"에 해당하는 부분을 가져온다.
    3. "시"에 해당하는 부분이 17이상일 경우 "잘가"
    아닐 경우 "열공" 메세지 출력
    4. 1, 2, 3에 해당하는 과정을 50분에 한번씩 나오게한다.

    - javascript Date.now() : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/now
    - javascript timmer : https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing1
    - javascript setInterver : https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_setinterval
    ```

    ```javascript
    // app/assets/javascripts/posts.js
    // 현재 시간을 받아와서 17시보다 적을 경우 "열공" 메세지 출력
    var time = new Date();
    console.log(time);
    console.dir(time);

    var hour = time.getHours();
    console.log(hour);

    if(hour >= 17) {
        alert("잘가")
    } else {
        alert("열공")
    }
    ```

    ```javascript
    // app/assets/javascripts/posts.js
    // 현재 시간을 받아와서 17시보다 적을 경우 "열공" 메세지 출력
    // + 1시간 마다 출력하도록
    setInterval(function(){
        var time = new Date();
        console.log(time);
        console.dir(time);
        
        var hour = time.getHours();
        console.log(hour);
        
        if(hour >= 17) {
            alert("잘가")
        } else {
            alert("열공")
        }
    }, 1000*60*60);
    ```
    4) Post의 모든 타이틀 들을 내가 원하는 이름으로 바꾸기

    ```
    Q. 모든 타이틀 들을 내가 원하는 이름으로 바꾸기
    (버튼을 눌렀을 때)

    1. 버튼을 누른다
    2. 타이틀에 해당하는 html element들을 가져온다.(변수에 담는다)
    3. 각각을 순환하며 내용을 바꾼다.
    ```

    - function 선언 방법

      ```javascript
      function 함수이름(파라미터) {
          
      }

      var 함수이름 = function(파라미터) {
          
      }
      ```

      ```html
      <!-- app/views/posts/show -->
      <!-- 두 function의 차이 -->
      <script>
        alertHi(); // 선언하지 않아도 미리 알고 있다
        alertHello(); //선언되지 않았을 때 실행하면 선언되지 않았다고 에러
        
        function alertHi() {
          alert("Hi");
        }
        
        var alertHello = function() {
          alert("Hello!")
        }
        
        alertHello(); // 에러 안뜸
      </script>
      ```

      ```javascript
      function alertRest() {
          var time = new Date();
          console.log(time);
          console.dir(time);
          
          var hour = time.getHours();
          console.log(hour);
          
          if(hour >= 17) {
              alert("잘가")
          } else {
              alert("열공")
          }
      };

      setInterval(alertRest, 1000*5);
      alertRest(); // 실행을 하기 위해 ()
      ```

    - setTitle

      - https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_dom

    - 자바스크립트로 HTML내용물 가지고 오기 

      - document.getElementById(id명);
      - document.getElementsByClassName(class);
      - document.getElementsByTagName(Tag명);
      - document.querySelectorAll(css Selector);

      ```html
      <!-- app\views\posts\index 에 버튼 추가 -->

      <button>setTitle</button>

      <script src="/title.js"></script>
      ```

      ```javascript
      // public\title.js
      function setTitle() {
          var titles = document.getElementsByClassName('title');
          console.log(titles);
          
          for(var i = 0; i < titles.length; i++) {
              titles[i].innerHTML = "잠와..";
          }
      }

      // getElementsByTagName : 여러 개의 배열
      var btn = document.getElementsByTagName('button')[0];
      console.log(btn);

      btn.onclick = function() {
        alert("Done"); 
        setTitle();
      }
      ```

      ```javascript
      //naver.com > 개발자 도구 > console
      var el = document.getElementsByClassName('tnb_link');

      for(var i = 0; i < el.length; i++) {
          el[i].innerHTML = "메롱"
      }

      var el = document.querySelector('a.tnb_link');
      var el = document.querySelectorAll('a.tnb_link');
      ```

    5) 버튼을 눌렀을 때, table 태그에 class를 추가/삭제한다.

    ```
    Q. 버튼을 눌렀을 때, table 태그에 class를 추가/삭제한다.

    1. 버튼을 누른다.
    1-1. 버튼 요소 가져온다
    1-2. 버튼 요소에 eventlistener(click)를 달아준다.
    1-3. 버튼을 눌렀을 때 실행시킬 메소드를 작성한다.
    2. table 태그 요소를 가지고 온다.
    3. table 태그에 내가 원하는 class(table-hover)가 있는지 확인한다.
    3-1. class가 있으면 제거한다.
    3-2. class기 없으면 추가한다.
    ```

    ```html
    <!-- app\views\posts\index 에 추가 -->

    <button id="setClass">setClass</button>
    <script src="/class.js"></script>
    ```

    ```javascript
    // public\class.js
    // https://www.w3schools.com/jsref/prop_element_classlist.asp

    function toggleClass() {
        var tb = document.getElementsByClassName("table")[0];
        // console.log(tb.classList);
        // console.dir(tb.classList);
        // if(tb.classList.contains('table-hover')) {
        //     tb.classList.remove('table-hover');
        // } else {
        //     tb.classList.add('table-hover');
        // }
        
        tb.classList.toggle('table-hover');
    }

    toggleClass();

    var btn = document.getElementById('setClass');
    console.log(btn);

    btn.onclick = function() {
        console.log("button!!!!!")
        
        toggleClass();
    }
    ```

    6) table의 크키를 내가 원하는 만큼으로 설정하기

    ```
    Q. table의 크키를 내가 원하는 만큼으로 설정하기

    1. 버튼을 누른다.
    1-1. 버튼 요소 가져온다
    1-2. 버튼 요소에 eventlistener(click)를 달아준다.
    1-3. 버튼을 눌렀을 때 실행시킬 메소드를 작성한다.
    2. table 태그 요소를 가지고 온다.
    2-1. prompt 창을 띄운다.
    2-2. prompt 창에 내가 원하는 사이즈를 입력한다.
    2-3. table의 style 속성 중 width 속성을 바꾼다. 
    ```

    ```html
    <!-- app\views\posts\index 에 추가 -->

    <button id="setAttribute">setAttribute</button>
    <script src="/attribute.js"></script>
    ```

    ```javascript
    // public\attribute.js
    function setWidth() {
        var tb = document.getElementById('myTable');
        
        var size = prompt("원하는 사이즈를 입력해 주세요");
        
        tb.setAttribute('style', 'width:' + size + '%;');

    }

    var btn = document.getElementById('setAttribute');
    console.log(btn);

    btn.onclick = function() {
        console.log("button!!!!!")
        
        setWidth();
    }
    ```

    7) jquery

    * HTML이 로드되면 이 함수를 실행해라

      ```javascript
      $(document).on('ready', function() {
          
      });

      $(document).ready(function() {
          
      });
      $(function() {
          
      });
      ```


    * sss

      ```
      Q. post_title의 내용물이 바뀌면 alert를 통해 내용물을 확인한다.

      1. post_title 요소값을 가지고 온다.
      1-1. 요소의 onChangeListener를 달아준다.
      1-2. 요소의 바뀐 값을 추출한다.
      1-3. 값을 변수에 저장한다.
      2. 변수에 저장된 값을 alert한다.
      ```

      ```html
      <!-- app/views/posts/_form.html.erb -->
      <%= form_for(@post) do |f| %>
        <% if @post.errors.any? %>
          <div id="error_explanation">
            <h2><%= pluralize(@post.errors.count, "error") %> prohibited this post from being saved:</h2>

            <ul>
            <% @post.errors.full_messages.each do |message| %>
              <li><%= message %></li>
            <% end %>
            </ul>
          </div>
        <% end %>

        <div class="field">
          <%= f.label :title %><br>
          <%= f.text_field :title, class: 'form-control' %>
        </div>
        <div class="field">
          <%= f.label :content %><br>
          <%= f.text_area :content, class: 'form-control' %>
        </div>
        <div class="actions">
          <%= f.submit"작성", class: 'btn-btn-sucess'%>
        </div>
      <% end %>

      <script src="/form_controll.js"></script>
      ```

      ```javascript
      // public/form_controll.js
      $(function() {
         // alert("done");
         
         $('#post_title').val("제이쿼리 노잼");
         
         $('#post_title').on('change', function() {
            // console.log("올"); 
            var text = $('#post_title').val();
            alert(text);
         });
      });
      ```

    * https://www.codecademy.com

4. Ajax

    1) Ajax?

    ```javascript
    // jquery
    $.ajax({
      
    })
    ```

    * https://ko.wikipedia.org/wiki/Ajax
    * 비동기식 : 굳이 기다리지 않고 callback을 받는다. 
    * table 한 줄에 추가 , 숫자 하나 변화 > 뭐하러 서버까지 가는가
      * 내가 필요한거만 고치고 말겠다.

    ​