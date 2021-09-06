const Container = (props) => {
    console.log(props)

    if(props.user !== 'admin') {
        return <p>no es admin</p>
    }

    return (
        <div>
            <p style={{ color: 'white'}}>Esto es un boton</p>
            {/* { props.children } */}
            { props.children[0]}
            { props.children[1]}
            { props.children[2]}
        </div>
    )
}

export default Container