import { AlertMessage } from "@/components/alert-message";
import { CompleteModal } from "@/components/complete-modal";
import { QuizQuestion } from "@/components/question-quiz";
import { Timer } from "@/components/timer";
import { useState } from "react";

export const QuestionPage = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10); 

  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false); 

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Fungsi untuk menangani ketika waktu habis
  const handleTimeUp = () => {
    setIsModalOpen(true); 
    setQuizCompleted(true); 
  };

  // Fungsi untuk menangani ketika kuis selesai (semua pertanyaan dijawab)
  const handleQuizCompletion = () => {
    setIsModalOpen(true); 
    setQuizCompleted(true); 
  };

  return (
    <section className='h-screen'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <h1 className='text-xl md:text-2xl text-center font-light'>
          Answer the questions below!
        </h1>
        <Timer expiryTimestamp={time} onTimeUp={handleTimeUp} quizCompleted={quizCompleted} />
      </div>

      
      <QuizQuestion
        setScore={setScore}
        setTotalAnswered={setTotalAnswered}
        onQuizComplete={handleQuizCompletion} 
      />

      {isModalOpen && (
        <CompleteModal
          score={score}
          totalQuestions={10}
          totalAnswered={totalAnswered}
          onClose={handleModalClose}
        />
      )}
    </section>
  );
};
