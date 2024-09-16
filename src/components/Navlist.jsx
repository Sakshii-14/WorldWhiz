import React from "react";
import "../styles/button.css";


function Navlist({ onenter, onleave }) {
  return (
    <div className=" w-auto flex flex-col lg:gap-[10rem] md:gap-[6rem] sm:gap-[4rem] gap-[2rem] justify-between h-auto">
      <a href='https://country-rank-cxtx51vv6-sakshi-kesharwanis-projects.vercel.app' target="_blank" rel="noopener noreferrer">
      <button
        className="button h-auto w-full lg:text-[2rem] md:text-[1.5rem] sm:text-[1.8rem] text-[1.5rem] "
        onMouseEnter={(e) => onenter("rank")}
        onMouseLeave={() => onleave()}
        name="rank"
      >
        <p className="title">Country Info</p>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Open%20Book.webp"
          alt="Open Book"
        />
        <p className="description lg:text-[2rem] md:text-[1.5rem] sm:text-[1.8rem] text-[1.5rem]">
          Know Your <br /> World
        </p>
      </button>
      </a>
   
     <a href='https://country-quiz-lxm6nqmz4-sakshi-kesharwanis-projects.vercel.app' target="_blank" rel="noopener noreferrer" >
      <button
        className="button2 h-auto w-full  lg:text-[2rem] md:text-[1.5rem] sm:text-[1.8rem] text-[1.5rem]   "
        onMouseEnter={(e) => onenter("quiz")}
        onMouseLeave={() => onleave()}
        name="quiz"
      >
        <p className="title">Quiz</p>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/Question%20Mark.webp"
          alt="Question Mark"
        />
        <p className="description lg:text-[2rem] md:text-[1.5rem] sm:text-[1.8rem] text-[1.5rem]">
          Let's Play
        </p>
      </button>
     </a>

     <a href='https://translate-l6firpjsl-sakshi-kesharwanis-projects.vercel.app' target="_blank" rel="noopener noreferrer">
      <button
        className="button3 h-auto w-full lg:text-[2rem] md:text-[1.5rem] sm:text-[1.8rem] text-[1.5rem] "
        onMouseEnter={(e) => onenter("translate")}
        onMouseLeave={() => onleave()}
        name="translate"
      >
        <p className="title">Translate</p>

        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Writing%20Hand.webp"
          alt="Writing Hand"
        />
        <p className="description lg:text-[2rem] md:text-[1.5rem] sm:text-[1.8rem] text-[1.5rem]">
          Translate Text
        </p>
      </button>
      </a>
    </div>
  );
}

export default Navlist;
