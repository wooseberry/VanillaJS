const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = "toDos";

let toDos = [];



function deleteTodo(envet){
    //
    const btn = event.target;
    //버튼의 부모노드가 li다
    const li= btn.parentNode;
    //
    toDoList.removeChild(li);
    //forEach함수가 돈 id랑  li의 id가 같지 않다
    //두개가 어떻게 다른지 모르겠다....
    //toDo is the value of each of the items inside of 'toDos'
    const cleanTodos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanTodos; 
    saveToDos();
    //filter는 array의 모든 아이템을 통해 함수를 실행 그리고
    //true인 아이템들만 가지고 새로운 array를 만들고
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //이렇게 해주는 이유는 local storage 에는 자바스크립트의
    //data를 저장할 수가 없어.오직 string만 저장할 수있어
    //JSON.stringify는 object를 string으로 바꿔줌

}

function paintToDo(text){
    //li를생성
    const li = document.createElement("li");
    //button을 생성
    const delBtn = document.createElement("button");
    //버튼에 이모지추가
    delBtn.innerText = "❌";
    //버튼에 이벤트 걸기
    delBtn.addEventListener("click" , deleteTodo);
    // span 추가
    const span = document.createElement("span");
    //
    const newId = toDos.length  + 1;
    // span 부분에 text 추가
    span.innerText = text
    //span을 li에 넣기
    li.appendChild(span);
    //button을 li에 넣기
    li.appendChild(delBtn);
    //
    li.id = newId;
    //li를 toDoList에 넣기
    toDoList.appendChild(li); 
    //onject 만들기
    const toDoObj = {
        text: text,
        id: newId
    };
    //toDos배열에 toDoObj오브젝트 넣기
    toDos.push(toDoObj);
    //저장함수실행
    saveToDos();
    //push후에 호출해야함 이거하기전에 호출하면 savaToDos를 불러도 저잘할게 없어 
}

function handleSubmit(event){
    //이벤트 설정지우기
    event.preventDefault();
    //currentValue에 inpuValue넣기
    const currentValue = toDoInput.value;
    //페인트 함수 실행(currentValue값 받아서)
    paintToDo(currentValue);
    //다시 inputValue 비우기
    toDoInput.value = "";
}



function loadToDos(){
    //
    const loadedToDos = localStorage.getItem(TODOS_LS);
    //loadedToDos가 널이 아니면(값이 있으면)
    if(loadedToDos !== null ){
    //텍스트를 오브젝트로(왜 오브젝트로 바꿔야하는가)
        const parsedToDos = JSON.parse(loadedToDos);
    //parse되서 object가 된 값을 (foreach는 배열객체의 메소드) parsedToDos객체의 
    //요소들이 함수에 순서대로 각각 호출 됩니다.
    //각각 함수에 걸쳐서 하나씩 로드된다
        parsedToDos.forEach(function(toDo){
             paintToDo(toDo.text);
        })
    }
}

function init() {
    loadToDos(); 
    toDoForm.addEventListener("submit", handleSubmit)
}

init();
