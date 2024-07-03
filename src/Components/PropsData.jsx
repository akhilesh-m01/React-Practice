import React from 'react';


// function EmployeeData(props){
//   return(
//     <>
//       <p>
//         <h2>{props.name}</h2>
//         <p>
//           <b>Org: </b>
//           {props.org}
//         </p>
//         <p>
//           <b>Experience: </b>
//           {props.exp}
//         </p>
//         <p>
//           <b>City:</b>
//           {props.city}{" "}
//           {props.zipCode}
//         </p>
//       </p>
//     </>
//   )
// }

// destructuring the props
function EmployeeData({name,org,exp,city,zipCode}){
  return(
    <>
      <p>
        <h2>{name}</h2>
        <p>
          <b>Org: </b>
          {org}
        </p>
        <p>
          <b>Experience: </b>
          {exp}
        </p>
        <p>
          <b>City:</b>
          {city}{" "}
          {zipCode}
        </p>
      </p>
    </>
  )
}

function PropsData(){

  const employees = [
    {
      name:"akhilesh",
      org:"google",
      exp:10,
      zipCode: "22030",
      city: "Bangalore"
    },
    {
      name:"Dhoni",
      org:"ms",
      exp:10,
      zipCode: "30125",
      city: "Ranchi"
    },
    {
      name:"Sky",
      org:"google",
      exp:10,
      zipCode: "5067",
      city: "mumbai"
    }
  ];
  
  return(
      <ul>
        {
          employees.map((employee)=>(
            <li key={Math.random()*employees.length}>
              <EmployeeData name={employee.name} org={employee.org} exp={employee.exp} zipCode={employee.zipCode} city={employee.city}/>
            </li>
          ))
        }
      </ul>
  )
}

export default PropsData