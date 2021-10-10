import './Header.css'

const Header = (props) => {
    return (
        <div>
            <h1 class="name-heading">{props.heading}</h1>
            
            <h2>About me</h2>
        </div>
    )
}

export default Header