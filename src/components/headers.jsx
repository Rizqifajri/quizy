import { Link } from "react-router-dom";
import { Navigation } from "./navigation-menu";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <section className='flex justify-between items-center p-5'>
    <h1 className="text-3xl">QUIZY</h1>
      <Navigation />
      <div className="flex gap-2">
        <Link to="/login">
         <Button className='bg-white text-black border  border-b-4 border-r-4 border-purple-500 hover:border-2 hover:bg-white w-24 px-5'>
          Sign in
        </Button>
        </Link>
      </div>
    </section>
  );
};
