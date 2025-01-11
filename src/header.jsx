function Header(props) {


    return (
        <header className="header">
            <h1>{props.heading}</h1>
        </header>


    )

    defaultprops = {
        heading: 'Grocery List'
    }
}

export default Header;  