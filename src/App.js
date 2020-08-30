import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import data from './Data/Data.json'

const department = [{ name: "Mobile", count: 0 }, { name: "Web", count: 0 }]
const salaryslab = [{ name: "High", count: 0 }, { name: "Low", count: 0 }]
const city = [{ name: "New York", count: 0 }, { name: "Texas", count: 0 },
{ name: "London", count: 0 }, { name: "Liverpool", count: 0 }]
const country = [{ name: "US", count: 0 }, { name: "UK", count: 0 }]

function App() {

  const [selectedOption, setselectedOption] = useState("department")

  const [departmentData, setdepartmentData] = useState(department)
  const [salaryslabData, setsalaryslabData] = useState(salaryslab)
  const [cityData, setcityData] = useState(city)
  const [countryData, setcountryData] = useState(country)

  useEffect(() => {
    filterHandler(selectedOption)
  }, [selectedOption])

  const filterHandler = (option) => {

    switch (option) {
      case 'department':

        setdepartmentData([{ name: "Mobile", count: data.filter(dt => dt.department === "Mobile").length },
        { name: "Web", count: data.filter(dt => dt.department === "Web").length }])
        break

      case 'salaryslab':

        setsalaryslabData([{ name: "High", count: data.filter(dt => dt.salarySlab === "High").length },
        { name: "Low", count: data.filter(dt => dt.salarySlab === "Low").length }])
        break

      case 'city':

        setcityData([{ name: "New York", count: data.filter(dt => dt.city === "New York").length },
        { name: "Texas", count: data.filter(dt => dt.city === "Texas").length },
        { name: "London", count: data.filter(dt => dt.city === "London").length },
        { name: "Liverpool", count: data.filter(dt => dt.city === "Liverpool").length }])
        break

      case 'country':

        setcountryData([{ name: "US", count: data.filter(dt => dt.country === "US").length },
        { name: "UK", count: data.filter(dt => dt.country === "UK").length }])
        break

      default:

        setdepartmentData([{ name: "Mobile", count: data.filter(dt => dt.department === "Mobile").length },
        { name: "Web", count: data.filter(dt => dt.department === "Web").length }])
        break
    }
  }

  return (
    <div >
      <Form
        selectedOption={selectedOption}
        setselectedOption={setselectedOption}
        departmentData={departmentData}
        salaryslabData={salaryslabData}
        cityData={cityData}
        countryData={countryData}
      />
    </div>
  );
}

export default App;
