import './Header.css'

const Header = (props) => {
    return (
        <div>
            <h1 className="name-heading">{props.heading} <i class="fas fa-pizza-slice"></i></h1>
            
            <h2>About me</h2>
        </div>
    )
}

export default Header