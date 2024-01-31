export const getQuestionsRandom = (questions) => {
  const result = [];
  const questionsLength = questions.length;
  const maxSizeQuestions = questionsLength < 10 ? questionsLength : 10;

  while(result.length !== maxSizeQuestions) {
    const indexRandom = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[indexRandom];

    if (result.length === 0) {
      result.push({...randomQuestion});
    }

    const addedQuestion = result.some(question => question.id === randomQuestion.id);
    if (!addedQuestion) {
      result.push({...randomQuestion});
    }
  }
  return result;
}