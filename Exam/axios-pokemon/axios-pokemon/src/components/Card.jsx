import PropTypes from "prop-types";


Card.propTypes = {
    key: PropTypes.number,
    index: PropTypes.number,
    name: PropTypes.string,
    editedName: PropTypes.string,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
};
export default function Card(props) {
    
    const onDelete = () => {
        props.onDelete(props.index)
    }

    const onChange = (event) => {
        props.onEdit(event.target.value, props.index)
        // console.log(event.target.value)
    }

    const editedName = props.editedName || props.name
    // console.log(editedName)

    return (
        <div className="card-container" style={{ width: '45%' }}>
            <div 
                style={{
                    display: 'flex',
                    gap: 24,
                    alignItems: 'center',
                    marginBottom: 50,
                    borderRadius: 10,
                    padding: '20px 30px',
                    border: '2px solid #fff'
                }}
            >
                <img
                    src={ `https://img.pokemondb.net/artwork/large/${props.name}.jpg` }
                    alt={props.name}
                    style={{
                        width: 160,
                        height: 160,
                        borderRadius: 10,
                    }}
                />
                <div>
                    <h1>{ editedName }</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                        <input 
                            type="text" 
                            style={{ 
                                padding: '10px 15px', 
                                borderRadius: 10, 
                                border: '1px solid #ccc' 
                            }} 
                            value={ editedName } 
                            onChange={ onChange } 
                        />
                        <button onClick={onDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
