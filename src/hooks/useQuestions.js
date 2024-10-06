import { useState, useEffect } from "react";

export const useQuestions = (url, category) => {
  const [questions, setQuestions] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
  const [score, setScore] = useState(0); 

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const categoryParam = category ? `&category=${category}` : "";
        const response = await fetch(`${url}${categoryParam}`);
        const data = await response.json();
        setQuestions(data.results);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [url, category]);

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestionIndex].correct_answer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

  
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz completed! Your score: ${score + 1}/${questions.length}`);
    }
  };

  return {
    questions,
    loading,
    error,
    currentQuestionIndex,
    score,
    handleAnswer,
  };
};
