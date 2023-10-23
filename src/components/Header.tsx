import React from 'react'

type Props = {
    title: string,
    image: string,
    children: React.ReactNode
}

function Header(props: Props) {
  return (
    <header className='header'>
        <div className="header__container">
            <div className="header__container-bg">
                <img src={props.image} alt="Header Background Image" />
            </div>
            <div className='header__content'>
                <h2>{props.title}</h2>
                <p>{props.children}</p>
            </div>
        </div>
    </header>
  )
}

export default Header