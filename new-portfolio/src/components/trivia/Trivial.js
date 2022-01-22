import React, { useState } from 'react';
import "./Trivial.css"

const Trivia = () => {
    const questions = [
		{
			questionText: 'I was Born in Perú, which is a country located in…?',
			answerOptions: [
				{ answerText: 'South America', isCorrect: true },
				{ answerText: 'Europe', isCorrect: false },
				{ answerText: 'Middle East', isCorrect: false },
				{ answerText: 'Asia', isCorrect: false },
			],
		},
		{
			questionText: 'I moved to Spain when I was 10 years old, I had to study Catalan at school. Which is a language from..?',
			answerOptions: [
				{ answerText: 'Andalucia', isCorrect: false },
				{ answerText: 'Aragón', isCorrect: false },
				{ answerText: 'Catalonia', isCorrect: true },
				{ answerText: 'Lisboa', isCorrect: false },
			],
		},
		{
			questionText: 'I went to University when I was 20 years old and I finished after 4 years. How old was I when I finished?',
			answerOptions: [
				{ answerText: '24', isCorrect: true },
				{ answerText: '34', isCorrect: false },
				{ answerText: '23', isCorrect: false },
				{ answerText: '25', isCorrect: false },
			],
		},
		{
			questionText: 'I had the chance to work in a Travel agency, Hotel, Hostel, Car rental company…which career do you think I took?',
			answerOptions: [
				{ answerText: 'Economics', isCorrect: false },
				{ answerText: 'Medicine', isCorrect: false },
				{ answerText: 'Tourism', isCorrect:true },
				{ answerText: 'Laws', isCorrect: false },
			],
		},
        {
			questionText: 'I had the chance to live in different countries for some time. Once I had the pleasure to live in Londonderry, Nothern Ireland. Can you tell me the actual currency?',
			answerOptions: [
				{ answerText: 'Pounds', isCorrect: false },
				{ answerText: 'Yens', isCorrect: false },
				{ answerText: 'Euros', isCorrect: false },
				{ answerText: 'Pounds & Euros', isCorrect: true },
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
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);

};

export default Trivia;