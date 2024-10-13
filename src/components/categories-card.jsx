import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "./ui/bento-grid";
import Lottie from "lottie-react";
import animationData from ".././animations/pattern.json";

const features = [
  {
    Icon: FileTextIcon,
    name: "General Knowledge",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img src="/genknow.jpg" className="absolute object-cover opacity-80" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Computer Science",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img src="/compsci.jpg" className="absolute object-cover opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Entertainment",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img  className="absolute opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Mathematics",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Geography",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img src="/compsci.jpg" className="absolute opacity-60"/>,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function CardCategories() {
  return (
    <section className='flex flex-col min-h-screen items-center justify-center gap-5 relative'>
      <Lottie
        className='absolute top-0 left-0 w-56'
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
      <Lottie
        className='absolute bottom-0 right-0 w-56'
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
      <div className="absolute top-0 right-0 w-full">
        <h1 className='text-5xl text-right font-light'>We have a lot of quiz categories</h1>
        <h1 className='text-5xl text-right font-semibold'>Test your knowledge !</h1>
      </div>
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
    </section>
  );
}
