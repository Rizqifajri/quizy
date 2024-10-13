import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import animationData from "../animations/pattern.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SelectCategory } from "@/components/select-category";

export const QuizStartPage = ({ amount = 10 }) => {
  const [name, setName] = useState("");
  const [hasOngoingQuiz, setHasOngoingQuiz] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("name");
    if (user) {
      setName(user);
    }

    const savedQuizState = localStorage.getItem("quizState");

    // Cek apakah localStorage quizState ada
    if (savedQuizState && !savedQuizState.quizCompleted) {
      setHasOngoingQuiz(true);
    }else{
      localStorage.removeItem("quizState");
      setHasOngoingQuiz(false);
    }
  }, []);

  return (
    <section className='flex flex-col min-h-[90vh] justify-center'>
      <Lottie
        className='absolute left-0 top-0 w-56'
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
      <div>
        <h1 className='text-2xl text-center font-semibold'>Hi, {name}</h1>
        <h1 className='text-5xl text-center font-light pb-24'>Welcome to Quizy</h1>
      </div>
      <div className='flex flex-col font-light gap-4 justify-center items-center mx-auto'>
        <h2 className='text-3xl text-center font-light'>Total Quiz: {amount}</h2>
        <h2>Time: 10 Minutes</h2>
        <SelectCategory />

        {hasOngoingQuiz ? (
          <Link className='w-full' to='/quizy/questions'>
            <Button className='bg-white text-black border border-b-4 border-r-4 border-purple-500 hover:border-2 hover:bg-white w-full px-5'>
              Resume
            </Button>
          </Link>
        ) : (
          <Link className='w-full' to='/quizy/questions'>
            <Button className='bg-white text-black border border-b-4 border-r-4 border-purple-500 hover:border-2 hover:bg-white w-full px-5'>
              Start
            </Button>
          </Link>
        )}

        <p>Click Start or Resume if you're ready to answer the quiz!</p>
      </div>
      <Lottie
        className='absolute w-56 right-0 bottom-0'
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
    </section>
  );
};
