import React, { useState } from "react";
import styles from "../../styles/generalStyles.module.scss";
import ButtonGeneral from "../ButtonGeneral";

const Trivia = () => {
  const questions = [
    {
      questionText:
        "I was born in South America, however, do you remember in which country was?",
      answerOptions: [
        { answerText: "Brazil", isCorrect: false },
        { answerText: "Ecuador", isCorrect: false },
        { answerText: "Argentina", isCorrect: false },
        { answerText: "Perú", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which one was the first language I had to learn once I got Barcelona?",
      answerOptions: [
        { answerText: "German", isCorrect: false },
        { answerText: "Catalan", isCorrect: true },
        { answerText: "Galician", isCorrect: false },
        { answerText: "Portuguese", isCorrect: false },
      ],
    },
    {
      questionText:
        "I had to study and work for 4 years to get a degree, do you remember which career I did?",
      answerOptions: [
        { answerText: "Economics", isCorrect: true },
        { answerText: "Medicine", isCorrect: false },
        { answerText: "Tourism", isCorrect: true },
        { answerText: "Laws", isCorrect: false },
      ],
    },
    {
      questionText: "How did I discover the programming world?",
      answerOptions: [
        { answerText: "working as a Customer Care Manager", isCorrect: true },
        { answerText: "cycling through a mountain", isCorrect: false },
        { answerText: "sleeping like a dog", isCorrect: false },
        { answerText: "watching Grey's Anatomy  ", isCorrect: false },
      ],
    },
    {
      questionText:
        "I had the chance to live in Nothern Ireland. Can you tell me the city?",
      answerOptions: [
        { answerText: "Belfast", isCorrect: false },
        { answerText: "Cork", isCorrect: false },
        { answerText: "Derry", isCorrect: true },
        { answerText: "Kiev", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    console.log(currentQuestion);
  };

  return (
    <div className={styles.quizzGameContainer}>
      {showScore ? (
        <p className={styles.quizzScoreText}>
          🎉🎉 You scored {score} out of {questions.length} 🎉🎉
        </p>
      ) : (
        <>
          <div className={styles.quizzQuestionNumber}>
            Question {currentQuestion + 1}/{questions.length}
          </div>
          <div className={styles.quizzQuestionText}>
            {questions[currentQuestion].questionText}
          </div>
          <div className={styles.quizzAnswerSection}>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <>
                <ButtonGeneral
                  title={answerOption.answerText}
                  className={styles.quizzSelectButton}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                />
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Trivia;
