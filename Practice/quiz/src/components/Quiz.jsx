import ProgressBar from "./ProgressBar";
import Answer from "./Answer";
import Card from "./Card";
import {useEffect, useRef, useState} from "react";


export default function Quiz({questionObj, onChangeQuestion, onExpiredTime}) {
  const [timer, setTimer] = useState(100);

  useEffect(() => {
    // console.log('Initial interval');
    if (timer === 0) {
      setTimer(100);
      onExpiredTime();
    }

    const interval = setInterval(() => {
      setTimer(prevState => prevState - 1);
    }, 20);

    return () => {
      // console.log('CLEAR INTERVAL')
      clearInterval(interval);
    }
  }, [timer]);

  function handleChangeQuestion(answerNo) {
    setTimer(100);
    onChangeQuestion(answerNo);
  }

  return (
      <>
        <ProgressBar time={timer}/>
        <Card>
          <h1 className="mb-2 font-bold">{questionObj.question}</h1>
          {questionObj.answers.map(answer => (
              <Answer
                  key={answer.no}
                  content={answer.content}
                  onClick={() => handleChangeQuestion(answer.no)}
              />
          ))}
        </Card>
      </>
  )
}