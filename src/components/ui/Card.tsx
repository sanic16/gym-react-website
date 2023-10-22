import React from 'react'

type Props = {
    className?: string,
    children: React.ReactNode
}

const Card = (props: Props) => {
  return (
    <article className={`card ${props.className}`}>
        {props.children}
    </article>
  )
}

export default Card