import { FC } from 'react'
import './Header.scss'

const Header: FC<{ heading: any }> = (props) => {
  return (
    <div>
      <h1 className="name-heading">
        {props.heading} <i className="fab fa-linux"></i>
      </h1>

      <h2>About me</h2>
    </div>
  )
}

export default Header
