import { QuizQuestion } from "@/components/question-quiz";
import { Timer } from "@/components/timer";

export const QuestionPage = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  return (
    <seciton className='h-screen'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <h1 className='text-xl md:text-2xl text-center  font-light'>Answer the questions below!</h1>
        <Timer expiryTimestamp={time} onTimeUp={() => alert("waktu habis")} />
      </div>

      <QuizQuestion />
    </seciton>
  );
};
