import React from 'react';

const User = (props) => {
  const { img, name, age, isMarried, hobbies, children } = props;

  return (
    <section>
      <img src={img} alt={name} width={200} />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Is married: {isMarried}</h3>
      <h4>Hobbies: {hobbies} </h4>
      <div>{children}</div>
    </section>
  );
};

// children is a special property that holds the contents between the opening and closing tags of a component. It's a way to pass nested elements (or other components) as props to a component, enabling a component to render its children dynamically.

const PropsChildren = () =>{
  return(
    <>
      <User
        img="https://avatars.githubusercontent.com/u/85052811?v=4"
        name="HuXn WebDev"
        age={10}
        isMarried={false}
        hobbies={["Coding", "Reading", "Sleeping"]}
      >
        {/*  p and ul are passed as children to the user */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </User>
    </>
  )
}

export default PropsChildren;