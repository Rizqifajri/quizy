import { QuizQuestion } from "@/components/question-quiz";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import animationData from ".././animations/pattern.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SelectCategory } from "@/components/select-category";

export const QuizStartPage = ({amount = 10}) => {
  const [name, setName] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("name");
    if (user) {
      setName(user);
    }
  }, []);

  return (
    <section className=' flex flex-col min-h-[90vh] justify-center '>
      <Lottie
        className='absolute left-0 top-0 w-56'
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
      <div>
        <h1 className='text-2xl text-center font-semibold '>Hi, {name}</h1>
        <h1 className='text-5xl text-center font-light pb-24'>
          Welcome to Quizy
        </h1>
      </div>
      <div className='flex flex-col font-light gap-4 justify-center items-center mx-auto'>
        <h2 className='text-3xl text-center font-light'>Total Quiz : {amount}</h2>
        <h2>Time : 10 Minutes</h2>
        <SelectCategory />
        <Link className="w-full" to='/quizy/questions'>
          <Button className='bg-white text-black border hover:bg-black hover:text-white border-b-4 border-r-4 border-black w-full'>
            Start
          </Button>
        </Link>

        <p>Click Start if youre ready to answer the quiz !</p>
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
