import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import Ripple from "./ui/ripple";
import { TextReveal } from "./animations/TextReveal";



export const Hero = () => {
  return (
    <section className='h-[90vh] flex flex-col justify-center items-center'>
      <Ripple className='hidden md:flex w-[500px] mx-auto -z-50'> </Ripple>
      <div className=' text-center'>
        <TextReveal
          text='Challenge yourself, master the material faster!'
          className='text-5xl font-bold text-black'
        />

        <p className='text-gray-600 mt-4'>
          Learning is fun and interactive with{" "}
          <span className='font-semibold'>Quizy</span>.
        </p>
        <div className='mt-8'>
          <Link to='/login'>
            <Button className='bg-white text-black border  border-b-4 border-r-4 border-purple-500 hover:border-2 hover:bg-white w-24 px-5'>
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
