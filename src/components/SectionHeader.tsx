
type Props = {
    icon: string,
    title: string,
    className?: string
}

const SectionHeader = (props: Props) => {
  return (
    <div className={`section__head ${props.className}`}>
        <span>
            {<props.icon />}
        </span>
        <h2>
            {props.title}
        </h2>
    </div>
  )
}

export default SectionHeader