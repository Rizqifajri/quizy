import React from "react";
import { useQuestions } from "../hooks/useQuestions"; // Import custom hook
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { SkeletonLoading } from "./skeleton-loading";
import { CompleteModal } from "./complete-modal";

export const QuizQuestion = () => {
  const selectedCategory = localStorage.getItem("selectedCategory");
  const {
    questions,
    loading,
    error,
    currentQuestionIndex,
    handleAnswer,
    quizCompleted, // Add quizCompleted to check if the quiz is finished
    score, // Use score from hook
  } = useQuestions("https://opentdb.com/api.php?amount=10", selectedCategory);

  if (loading) {
    return <SkeletonLoading />;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  if (!questions || questions.length === 0) {
    return <h1>No questions available</h1>;
  }

  // Ambil soal saat ini dan opsinya
  const currentQuestion = questions[currentQuestionIndex];
  const allAnswers = [
    ...currentQuestion?.incorrect_answers,
    currentQuestion?.correct_answer,
  ];

  // Mengacak jawaban
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  function decodeHtmlEntities(text) {
    const doc = new DOMParser().parseFromString(text, "text/html");
    return doc.documentElement.textContent;
  }

  const shuffledAnswers = shuffleArray(allAnswers);

  const handleAnswerClick = (answer) => {
    const isCorrect = answer === currentQuestion.correct_answer; // Cek jawaban benar
    handleAnswer(answer); // This already handles the answer inside the hook

    // Jika ini adalah pertanyaan terakhir
    if (currentQuestionIndex === questions.length - 1) {
      quizCompleted(true); // Tampilkan modal
    }
  };

  return (
    <>
      <Card className='flex justify-center items-center h-[80vh] mx-auto border-none bg-transparent shadow-none'>
        <CardContent className='flex flex-col mx-auto'>
          <CardTitle className='text-xl md:text-3xl my-5 '>
            {decodeHtmlEntities(currentQuestion.question)}
          </CardTitle>
          <CardDescription className='space-y-2 flex flex-col gap-2'>
            {shuffledAnswers?.map((answer, index) => (
              <Button
                className='bg-white text-black border border-b-4 border-r-4 border-black hover:border-2 hover:bg-white w-full px-5'
                key={index}
                onClick={() => handleAnswerClick(answer)}
              >
                <ul className='list'>
                  <li>{decodeHtmlEntities(answer)}</li>
                </ul>
              </Button>
            ))}
          </CardDescription>
        </CardContent>
      </Card>
      {quizCompleted && (
        <CompleteModal
          score={score} // Use score from hook
          totalQuestions={questions.length}
          onClose={() => setIsComplete(false)}
        />
      )}
    </>
  );
};
