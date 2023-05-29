const HelloWorld = (props) => {
    let name = "Wooorld"
    if(props.name) {
        name = props.name
    }
    return (
        <h2>Hello {name}</h2>
    )
}

export default HelloWorld;