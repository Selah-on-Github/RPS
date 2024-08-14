import './App.css';
import {useState} from "react";
import Box from "./component/Box";
import rock from './img/rock.png';
import scissors from './img/scissors.png';
import paper from './img/paper.png';


// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3 4의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패결과에 따라 테두리 색이 바뀐다. (이기면-초록, 지면-빨강, 비기면-검은색)

const choice = {
  rock : {
    name : "Rock",
    img : rock
  },
  scissors: {
    name : "Scissors",
    img : scissors
  },
  paper : {
    name : "Paper",
    img : paper
  }
};

function App() {
  const [userSelect,setUserSelect] = useState(null);
  const [computerSelect,setComputerSelect]=useState(null);
  const [result,setResult]=useState("")

  const play = (userChoice) => {
    // 유저가 선택한 값
    setUserSelect(choice[userChoice]);

    // 컴퓨터가 선택한 랜덤값
    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    //누가 이겼는지 판단해주는 셋팅해주는 함수
    setResult(judgement(choice[userChoice], computerChoice));

  };

  const judgement = (user,computer) => {
    // console.log("user",user, "computer", computer);
    //삼항연산식 (String값을 리턴)
    if(user.name === computer.name) {
      return "tie";
    } else if(user.name === "Rock")
        return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
        return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper") return computer === "Rock" ? "win" : "lose";
  };

  const randomChoice=()=>{
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
    // console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    // console.log("random value", randomItem);
    let final = itemArray[randomItem];
    // console.log("final",final);
    return choice[final];  
  };


  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result} />  
        <Box title="Computer" item={computerSelect} result={result} />  
      </div>

      <div className="main">
        <button onClick={() => play("scissors")}>
          가위
        </button>
        <button onClick={() => play("rock")}>
          바위
        </button>
        <button onClick={() => play("paper")}>
          보
        </button>
      </div>
    </div>
  );
}

export default App;
