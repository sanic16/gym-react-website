import FAQs from '../../components/FAQs'
import Footer from '../../components/Footer'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Values from '../../components/Values'
import './home.css'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home