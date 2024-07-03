import { useState } from "react";

const EventsCustom = () =>{

  const [data,setData] = useState("")

  function clickMeHandler(){
    console.log("clicked me");
  }

  function mouseOverHandler(){
    console.log("mouse hovered me");
  }

  function changeHandler(event){
    setData(event.target.value)
    console.log(data)
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log("clicked submit")
    console.log(data);
  }

  return(
    <>
      <button onClick={clickMeHandler}>Click me</button>

      <p onMouseOver={mouseOverHandler}>
        Mouse hover me
      </p>
      <form onSubmit={handleSubmit}>
        <input type="text"
          onChange={changeHandler}
          name="myInput"
          value={data}
          placeholder="enter name"/>
        <button
          type="submit">Submit</button>
      </form>
    </>
  )
}

export default EventsCustom;