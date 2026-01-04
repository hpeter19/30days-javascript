function Button(){

    const handleClick = () => console.log("ouch") 

    return(
        <button onClick={handleClick}>Click Me</button>
    );
}
export default Button