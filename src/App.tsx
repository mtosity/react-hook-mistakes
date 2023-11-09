import { useState } from "react";
import "./App.css";

function App() {
  const [order, setOrder] = useState(["Bread"]);

  return (
    <>
      <div>
        <p>{order.join(", ")}</p>
        <button
          onClick={() => {
            const newOrder = [...order];
            newOrder.push("Egg");

            setOrder(newOrder); // This will not work, because React will not detect the change,
            // since the array is the same reference, even though the content is different
          }}
        >
          Add Egg
        </button>
      </div>
    </>
  );
}

export default App;
