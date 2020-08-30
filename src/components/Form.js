import React from 'react'
import TableData from './TableData'

const Form = (props) => {

    const statusHandler = (e) => {
        props.setselectedOption(e.target.value)
    }

    return (
        <div className="container">
            <div className="form">
                <div className="select">
                    <select
                        onChange={statusHandler}
                        name="Group By"
                        className="group-by">
                        <option value="department">Department</option>
                        <option value="salaryslab">Salary Slab</option>
                        <option value="city">City</option>
                        <option value="country">Country</option>
                    </select>
                </div>
            </div >
            <div className="table">
                <div className="grid-item">No</div>
                <div className="grid-item">Group</div>
                <div className="grid-item">Count of Users</div>
                <div className="grid-item">Percentage</div>
            </div>

            {props.selectedOption === 'department' ?
                props.departmentData.map((dep, index) => (<TableData key={index} index={index} name={dep.name} count={dep.count} />)) : null}

            {props.selectedOption === 'salaryslab' ?
                props.salaryslabData.map((dep, index) => (<TableData key={index} index={index} name={dep.name} count={dep.count} />)) : null}

            {props.selectedOption === 'city' ?
                props.cityData.map((dep, index) => (<TableData key={index} index={index} name={dep.name} count={dep.count} />)) : null}

            {props.selectedOption === 'country' ?
                props.countryData.map((dep, index) => (<TableData key={index} index={index} name={dep.name} count={dep.count} />)) : null}

        </div>

    )
}

export default Form