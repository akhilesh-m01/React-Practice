import React from 'react';

// const Lists = () =>{
//   const myFriends = ["Apple", "Banana", "Cat", "Dog"];
//   return(
//     <div>
//       <h2>Lists data display</h2>
//       <ul>
//         {
//           myFriends.map((item)=>(
//             <li key={Math.random()*100}>{item}</li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }

// const Lists = () =>{
//   const Users = [
//     {
//       name:"Akhil",
//       org:"Google",
//       exp:10
//     },
//     {
//       name:"Nehanth",
//       org:"Youtube",
//       exp:10
//     },
//     {
//       name:"Naveen",
//       org:"Meta",
//       exp:15
//     },
//     {
//       name:"Prabhas",
//       org:"Adobe",
//       exp:40
//     },
//     {
//       name:"NTR",
//       org:"Walmart",
//       exp:15
//     },
//   ]

//   return (
//     <React.Fragment>
//       <h2>Lists data display</h2>
//       <ul>
//         {
//           Users.map((user)=>(
//             <li key={Math.random()*5}>{user.name} - {user.org}</li>
//           ))
//         }
//       </ul>
//     </React.Fragment>
//   )
// }

function Tech(props){
  return(
    <>
      <ol>
        {
          props.requirements.map((tech)=>(
            <li>{tech}</li>
          ))
        }
      </ol>
    </>
  )
}


const Lists = () =>{
  const Technologies = ["JS", "TS", "React", "Node", "Express", "MongoDB", "MySQL", "PostgreSQL",]
  return(
    <>
      <Tech requirements={Technologies}/>
    </>
  )
}

export default Lists;