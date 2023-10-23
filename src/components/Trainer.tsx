import Card from "./ui/Card"

type Props = {
    image: string,
    name: string,
    job: string,
    socials: {
        icon: string,
        link: string
    }[]
}

const Trainer = (props: Props) => {
  return (
    <Card className="trainer">
        <div className="trainer__img">
            <img src={props.image} alt={props.name} />
        </div>
        <h3>
            {props.name}
        </h3>
        <p>
            {props.job}
        </p>
        <div className="trainer__socials">
            {
                props.socials.map(social => (
                    <a href={social.link} key={social.link} target="_blank" rel="noopener noreferrer">
                        {<social.icon />}
                    </a>
                ))
            }
        </div>
    </Card>
  )
}

export default Trainer