
const Item = ({ item }) => {
    
    if(!item) {
        return <h1>Loading</h1>
    }

    return (
        <div style={{width: '200px'}}>
            <img style={{ width: '200px'}} src={item?.img} alt={item?.name}/>
            <h3>{item?.name}</h3>
            <p>precio: <strong>{item?.price}</strong></p>
        </div>
    )
}

export default Item