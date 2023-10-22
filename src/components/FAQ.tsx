import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

type Props = {
  question: string;
  answer: string;
};

const FAQ = (props: Props) => {
  const [isAnswerShowing, setIsAnswerShowing] = React.useState(false);



  return (
    <article className="faq" onClick={() => setIsAnswerShowing(prevState => !prevState)}>
      <div>
        <h4>{props.question}</h4>
        <button className="faq__icon">
          {
            isAnswerShowing ?  <AiOutlineMinus /> : <AiOutlinePlus />
          }
        </button>
      </div>
      {isAnswerShowing && <p>{props.answer}</p>}
    </article>
  );
};

export default FAQ;
