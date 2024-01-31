export const getQuestionsRandom = (questions) => {
  const result = [];
  for (let index = 0; index < 10; index++) {
    const indexRandom = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[indexRandom];

    if (result.length === 0) {
      result.push({...randomQuestion});
      continue;
    }

    const addedQuestion = result.some(question => question.id === randomQuestion.id);
    if (!addedQuestion) {
      result.push({...randomQuestion});
    }
  }
}