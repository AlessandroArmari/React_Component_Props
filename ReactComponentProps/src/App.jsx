//We are creating a Component
//wich behaves as a <div> or <span>...
//...it creates a <h1> with stuff inside, indeed

//It's important not to forget the {} for the paramaters

/*
const Component = ({ firstParam, secondParam }) => {
  return (
    <>
      <div>I am a "custom_made" component</div>
      <div>
        wich also has 2 parameters: "{firstParam}" and "{secondParam}"
      </div>
    </>
  );
};

function App() {
  return (
    //REMIND: the return() in App() takes just one single element (in this case: <> </>)
    <>
      <h1>Hello! (I don't belong to the component)</h1>
      <br />
      <br />
      <Component firstParam={44} secondParam={55} />

      <br />
      <br />

      <Component firstParam={"Parameter Changed"} secondParam={"Again"} />
    </>
  );
}

export default App;

*/

const Post = ({ parameter }) => {
  return (
    <>
      <h2>I'm a fixed text inside the Component called "Post"</h2>
      <span>{parameter}</span>
    </>
  );
};

function App() {
  const array = ["I", "am", "part", "of", "an", "Array"];
  return (
    <>
      <h3>
        {array.map((element, index) => {
          return (
            <>
              <Post parameter={element} />
            </>
          );
        })}
        ;
      </h3>
    </>
  );
}

export default App;
