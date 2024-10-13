import { UserLoginOrSignup } from "@/components/user-login";
import Lottie from 'lottie-react';
import animationData from '.././animations/animation.json'; 

export const Login = () => {
  return (
    <section className="flex min-h-screen items-center justify-center gap-5 ">
      <Lottie className="hidden md:flex w-[80vh]" animationData={animationData} loop={true} autoplay={true} />
      <UserLoginOrSignup />
    </section>
  );
};
