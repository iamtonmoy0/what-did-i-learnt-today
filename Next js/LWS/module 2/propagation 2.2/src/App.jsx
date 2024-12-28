function Button({onSmash,children}){
  return(
    <button onClick={(e)=>{
      // e.stopPropagation();
      onSmash();}}>
      {children}
    </button>)
}


function App() {
  
  return (
    <>
     <div onClick={()=>{console.log("hello i am clicked")}}>
       <Button onSmash={()=>{console.log("iam hello from hello")}}>Hello</Button>
       <Button onSmash={()=>{console.log("iam world from word")}}>World</Button>

     </div>
    </>
  )
}

export default App
