function Header({ text, randomnumber, receiveHeaderClick }) {
    function handleClick(event) {
        console.log("in the click handler");
        receiveHeaderClick("Some text");
    }

    function handleDelete(event) {

    }

    function handleToggleComplete(event) {

    }

    return (
        <h1 onClick={handleClick} data-randomnum={randomnumber}>{text}</h1>
    )
}

export default Header;