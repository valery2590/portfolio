import React, { useState } from "react";
import styles from "../../styles/generalStyles.module.scss";
import ButtonGeneral from "../ButtonGeneral";
import translated from "../translations";

const Trivia = () => {
  const questions = [
    {
      questionText: translated(
        "I was born in South America, however, do you remember in which country was?"
      ),
      answerOptions: [
        { answerText: translated("Brazil"), isCorrect: false },
        { answerText: "Ecuador", isCorrect: false },
        { answerText: "Argentina", isCorrect: false },
        { answerText: translated("Perú"), isCorrect: true },
      ],
    },
    {
      questionText: translated(
        "Which one is the language that I am not able to speak?"
      ),
      answerOptions: [
        { answerText: translated("German"), isCorrect: true },
        { answerText: translated("Italian"), isCorrect: false },
        { answerText: translated("English"), isCorrect: false },
        { answerText: translated("Spanish"), isCorrect: false },
      ],
    },
    {
      questionText: translated(
        "I had to study and work for 4 years to get a degree, do you remember which career I did?"
      ),
      answerOptions: [
        { answerText: translated("Economics"), isCorrect: false },
        { answerText: translated("Medicine"), isCorrect: false },
        { answerText: translated("Tourism"), isCorrect: true },
        { answerText: translated("Laws"), isCorrect: false },
      ],
    },
    {
      questionText: translated("How did I discover the programming world?"),
      answerOptions: [
        {
          answerText: translated("creating tools for a company"),
          isCorrect: true,
        },
        {
          answerText: translated("cycling through a mountain"),
          isCorrect: false,
        },
        { answerText: translated("sleeping like a dog"), isCorrect: false },
        { answerText: translated("watching Grey's Anatomy"), isCorrect: false },
      ],
    },
    {
      questionText: translated(
        "Do you remember which job position I have now?"
      ),
      answerOptions: [
        { answerText: translated("Math teacher"), isCorrect: false },
        { answerText: translated("Hotel receptionist"), isCorrect: false },
        { answerText: translated("Football player"), isCorrect: false },
        { answerText: translated("Solutions Developer"), isCorrect: true },
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
    //console.log(currentQuestion);
  };

  return (
    <div className={styles.quizzGameContainer}>
      {showScore ? (
        <p className={styles.quizzScoreText}>
          🎉🎉 {translated("Your score is")} {score} {translated("of")}{" "}
          {questions.length} 🎉🎉
        </p>
      ) : (
        <>
          <div className={styles.quizzQuestionNumber}>
            {translated("Question")} {currentQuestion + 1}/{questions.length}
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
