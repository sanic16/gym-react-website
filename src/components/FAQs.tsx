import SectionHeader from "./SectionHeader"
import { FaQuestion } from 'react-icons/fa'
import { faqs } from "../assets/data"
import FAQ from "./FAQ"

type Props = {}

const FAQs = (props: Props) => {
  return (
    <section className="faqs">
        <div className="container faqs__container">
            <SectionHeader icon={FaQuestion} title="Frequently Asked Questions" />
            <div className="faqs__wrapper">
                {
                    faqs.map(faq => (
                        <FAQ key={faq.id} answer={faq.answer} question={faq.question}/>
                    ))
                }
            </div>
            
        </div>
    </section>
  )
}

export default FAQs