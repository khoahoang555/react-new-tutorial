import {useState} from "react";

import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

import QUESTIONS from "./questions.js";
import {getQuestionsRandom} from "./helper.js";

const INITIAL_QUESTION_STATE = {
  activeQuestionIndex: 0,
  userAnswers: [],
  isExpiredTime: false
};

function App() {
  const [questionState, setQuestionState] = useState({
    ...INITIAL_QUESTION_STATE,
    randomQuestions: [...getQuestionsRandom(QUESTIONS)]
  });

  const isShowResult = questionState.activeQuestionIndex === questionState.randomQuestions.length || questionState.isExpiredTime;

  function handleChangeQuestion(indexAnswer) {
    setQuestionState((prevState) => {
      return {
        ...prevState,
        userAnswers: [...prevState.userAnswers, {
          indexAnswer: indexAnswer
        }],
        activeQuestionIndex: prevState.activeQuestionIndex + 1
      }
    });
  }

  function handleExpiredTime() {
    setQuestionState((prevState) => {
      return {
        ...prevState,
        isExpiredTime: true
      }
    });
  }

  function handleResetQuiz() {
    setQuestionState((prevState) => {
      return {
        ...prevState,
        ...INITIAL_QUESTION_STATE,
        randomQuestions: [...getQuestionsRandom(QUESTIONS)]
      };
    })
  }

  return (
      <div className="container mx-auto w-3/5">
        <Header/>
        {!isShowResult && <Quiz
            questionObj={questionState.randomQuestions[questionState.activeQuestionIndex]}
            onChangeQuestion={handleChangeQuestion}
            onExpiredTime={handleExpiredTime}
        />}
        {isShowResult && <Result
            questions={questionState.randomQuestions}
            userAnswers={questionState.userAnswers}
            onResetQuiz={handleResetQuiz}
        />}
      </div>
  );
}

export default App
