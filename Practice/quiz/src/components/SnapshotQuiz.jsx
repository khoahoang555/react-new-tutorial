import Card from "./Card";

export default function SnapshotQuiz({questionObj, userAnswerOjb}) {
  return (
    <Card>
      <h1 className={`mb-2 font-medium ${!userAnswerOjb && 'line-through'}`}>{questionObj.question}</h1>
      <ul className="list-disc list-inside text-gray-600">
        {questionObj.answers.map(answer => {
          const isTrueAnswer = questionObj.correctAnswer === answer.no;
          const isFalseAnswer = userAnswerOjb && userAnswerOjb.indexAnswer === answer.no && !isTrueAnswer;
          return (
            <li key={answer.no} className={`pb-1 ${isTrueAnswer && 'text-green-600'} ${isFalseAnswer && 'text-red-600'}`}>
              {answer.content}
              {isTrueAnswer && <i className="ri-check-line ml-2 font-bold"></i>}
              {isFalseAnswer && <i className="ri-close-line ml-2 font-bold"></i>}
            </li>
          )}
        )}
      </ul>
    </Card>
  );
}