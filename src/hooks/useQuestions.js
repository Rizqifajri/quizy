import { useState, useEffect } from "react";

export const useQuestions = (url) => {
  const [questions, setQuestions] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedState = localStorage.getItem("quizState");
    if (savedState) {
      const { questions, currentQuestionIndex, score, totalAnswered, quizCompleted } = JSON.parse(savedState);
      setQuestions(questions);
      setCurrentQuestionIndex(currentQuestionIndex);
      setScore(score);
      setTotalAnswered(totalAnswered);
      setQuizCompleted(quizCompleted);
      setLoading(false);
    } else {
      fetchQuestions();
    }
  }, [url]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setQuestions(data.results);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const saveQuizState = () => {
    if (questions) {
      const quizState = {
        questions,
        currentQuestionIndex,
        score,
        totalAnswered,
        quizCompleted,
      };
      localStorage.setItem("quizState", JSON.stringify(quizState));
    }
  };

  const handleAnswer = (selectedAnswer) => {
    if (!questions) return;

    const correctAnswer = questions[currentQuestionIndex].correct_answer;

    if (selectedAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    const newTotalAnswered = totalAnswered + 1;
    setTotalAnswered(newTotalAnswered);

    let newIndex = currentQuestionIndex;
    if (currentQuestionIndex < questions.length - 1) {
      newIndex = currentQuestionIndex + 1;
    } else {
      // Jika ini pertanyaan terakhir, setel quizCompleted menjadi true
      setQuizCompleted(true);
      newIndex = currentQuestionIndex; // Tidak perlu menambah indeks lagi
    }

    setCurrentQuestionIndex(newIndex);
    
    // Simpan status setelah menentukan jika quizCompleted sudah true
    saveQuizState();

    // Jika kuis sudah selesai, hapus state kuis dari localStorage
    if (newIndex === questions.length - 1) {
      // Tunda penghapusan agar state kuis tersimpan dulu
      setTimeout(() => {
        localStorage.removeItem("quizState");
      }, 1000); // Beri waktu untuk menyimpan terlebih dahulu
    }
  };

  return {
    questions,
    loading,
    error,
    currentQuestionIndex,
    score,
    quizCompleted,
    totalAnswered,
    handleAnswer,
  };
};
