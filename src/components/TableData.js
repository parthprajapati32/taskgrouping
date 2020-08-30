import React from 'react'

function TableData(props) {
    return (
        <div className="table" >
            <div className="grid-item"> {props.index + 1} </div>
            <div className="grid-item"> {props.name} </div>
            <div className="grid-item"> {props.count} </div>
            <div className="grid-item"> {props.count * 100 / 4}% </div>
        </div>
    )
}

export default TableData
