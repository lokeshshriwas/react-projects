import { useState } from "react";

function App() {
  let [color, setColor] = useState("black");
  

  return (
    <>
      <div className="w-full h-screen flex justify-center ">
        <div
          className="w-full h-screen"
          style={{ backgroundColor: color }}
        ></div>
        <div className="fixed bottom-10 h-12 w-auto flex justify-center items-center bg-white py-6 rounded-full">
            <button className="px-4 py-2 mx-2  bg-red-600 text-white rounded-full" onClick={()=>{setColor("red")}}>
              Red
            </button >
            <button className="px-4 py-2 mx-2  bg-green-600 text-white rounded-full"  onClick={()=>{setColor("green")}}>
              green
            </button>
            <button className="px-4 py-2 mx-2  bg-stone-600 text-white rounded-full" onClick={()=>{setColor("gray")}}>
              gray
            </button>
            <button className="px-4 py-2 mx-2 bg-yellow-600 text-white rounded-full" onClick={()=>{setColor("yellow")}}>
              yellow
            </button>
            <button className="px-4 py-2 mx-2 bg-sky-600 text-white rounded-full" onClick={()=>{setColor("blue")}}>
              blue
            </button>
            <button className="px-4 py-2 mx-2 bg-orange-600 text-white rounded-full" onClick={()=>{setColor("orange")}}>
              orange
            </button>
            <button className="px-4 py-2 mx-2 bg-red-800 text-white rounded-full" onClick={()=>{setColor("brown")}}>
              brown
            </button>
            
           
            
        </div>
      </div>
    </>
  );
}

export default App;
