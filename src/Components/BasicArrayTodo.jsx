import { useState } from "react";

const BasicArrayTodo = () =>{

  const [players,setPlayers] = useState(["akhilesh"])
  const [newPlayer,setNewPlayer] = useState("")
  const [oldPlayer,setOldPlayer] = useState("")

  function handleAdd(e){
    e.preventDefault();
    setPlayers([...players,newPlayer])
  }

  function handleUpdate(e){
    e.preventDefault();
    setPlayers(players.map((p)=>p.startsWith(oldPlayer[0])?oldPlayer:p))
  }

  return(
    <>
      <h1>Players</h1>
      <ul>
        {
          players.map((p)=>(
            <div key={Math.random()*10}>
              <span key={Math.random()*100}>{p}</span>
            </div>
          ))
        }
      </ul>
      <form onSubmit={handleAdd}>
        <input place="enter new player" type="text" name="newPlayer" value={newPlayer} onChange={(e)=>setNewPlayer(e.target.value)}/>
        <button type="submit">Add player</button>
      </form>
      <form onSubmit={handleUpdate}>
        <input placeholder="enter name to update" type="text" name="oldPlayer" value={oldPlayer} onChange={(e)=>setOldPlayer(e.target.value)}/>
        <button type="submit">Update player</button>
      </form>
      
    </>
  )
}

export default BasicArrayTodo;