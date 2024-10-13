import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
import { TextReveal } from "./animations/TextReveal";

const reviews = [
  {
    name: "Alya",
    username: "@alya",
    body: "Kategori kuisnya sangat menarik! Saya suka bagaimana ini menantang pengetahuan saya dengan cara yang menyenangkan.",
    img: "https://avatar.vercel.sh/alya",
  },
  {
    name: "Budi",
    username: "@budi",
    body: "Sederhana dan intuitif! Saya sangat menikmati mengikuti kuis. Sempurna untuk belajar dengan cepat.",
    img: "https://avatar.vercel.sh/budi",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "Saya dapat menguji pengetahuan saya dengan cepat, dan umpan baliknya langsung. Kerja bagus!",
    img: "https://avatar.vercel.sh/charlie",
  },
  {
    name: "Diana",
    username: "@diana",
    body: "Cara yang hebat untuk belajar sambil bersenang-senang! Saya suka berbagai kategori kuis.",
    img: "https://avatar.vercel.sh/diana",
  },
  {
    name: "Eva",
    username: "@eva",
    body: "Desainnya bersih dan mudah digunakan. Saya bisa mengikuti kuis kapan saja dan di mana saja.",
    img: "https://avatar.vercel.sh/eva",
  },
  {
    name: "Fajar",
    username: "@fajar",
    body: "Aplikasi kuis ini luar biasa! Ini sangat membantu saya melacak peningkatan pengetahuan saya.",
    img: "https://avatar.vercel.sh/fajar",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);


const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
    className={cn(
      "relative w-64 cursor-pointer overflow-hidden rounded-xl border-b-8 border-r-8 border-t border-l !border-yellow-400 p-4", 
      // light styles
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      // dark styles
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function CardReviewers() {
  return (
    <div className="relative flex h-[500px]  w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
      <TextReveal text="Quizy Reviewers" className="text-4xl font-bold text-black my-5" />
      <TextReveal text="our users love it so much !" className="text-4xl font-bold text-black" />
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
