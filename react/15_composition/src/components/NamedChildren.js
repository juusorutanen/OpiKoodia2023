const NamedChildren = (props) => {
    
    const cardStyle = {
        backgroundColor:"lightblue",
        height:200,
        width:150,
        margin:10,
        texAlign:"center"
    }

    return (
        <div style={cardStyle}>
            <>
            {props.header}
            {props.media ? <>{props.media}</>:<></>}
            {props.content}
            </>
        </div>
    )
    
}

export default NamedChildren;