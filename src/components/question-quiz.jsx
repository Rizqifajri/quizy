import React from "react";
import { useQuestions } from "../hooks/useQuestions"; // Import custom hook
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export const QuizQuestion = () => {
  const selectedCategory = localStorage.getItem("selectedCategory");
  const { questions, loading, error, currentQuestionIndex, handleAnswer } =
    useQuestions("https://opentdb.com/api.php?amount=10", selectedCategory);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  // Jika ada error, tampilkan error
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (!questions || questions.length === 0) {
    return <h1>No questions available</h1>;
  }

  // Ambil soal saat dan opsinya
  const currentQuestion = questions[currentQuestionIndex];
  const allAnswers = [
    ...currentQuestion?.incorrect_answers,
    currentQuestion?.correct_answer,
  ];

  // Mengacak jawaban
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const shuffledAnswers = shuffleArray(allAnswers);

  return (
    <Card className='flex justify-center items-center h-[80vh] mx-auto border-none bg-transparent shadow-none'>
      <CardContent className='flex flex-col mx-auto'>
        <CardTitle className='text-xl md:text-3xl my-5 '>{currentQuestion.question}</CardTitle>
        <CardDescription className='space-y-2 flex flex-col'>
          {shuffledAnswers?.map((answer, index) => (
            <Button
              className='bg-white text-black border hover:bg-black hover:text-white border-b-4 border-r-4 border-black '
              key={index}
              onClick={() => handleAnswer(answer)}
            >
              <ul className='list'>
                <li>{answer}</li>
              </ul>
            </Button>
          ))}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
