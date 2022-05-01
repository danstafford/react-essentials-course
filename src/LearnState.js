import React, {useState, useEffect} from "react";

function LearnState() {
  // State manages local variables

  // Array destructuring here. 
  // First item is "happy" (state variable)
  // Second item in array is setEmotion (updates state)
  
  const [emotion, setEmotion] = useState("happy");
  // console.log(emotion);

  const [secondaryEmotion, setSecondaryEmotion] = useState("tired");


  // Effect doesn't have to do with the render of the component,
  // it is just a side-effect.
  // It takes a second array called dependency array.
  // An empty array ensures the effect is called only once.
  // But you can use this array to keep track of values.
  useEffect(() => {
    console.log(`It's ${emotion} around here!`)
  }, [emotion])

  useEffect(() => {
    console.log(`It is also ${secondaryEmotion} around here!`)
  }, [secondaryEmotion])

  return (
    <>
      <h1>Learn State</h1>
      <h2>I am {emotion} and also {secondaryEmotion}.</h2>
      <button onClick={() => setEmotion("frustrated")}>Frustrated Changer</button>
      <button onClick={() => setEmotion("enthusiastic")}>Enthusiastic Changer</button>
      <button onClick={() => setSecondaryEmotion("crabby")}>Crabby Changer</button>
    </>
  )
}

export default LearnState
