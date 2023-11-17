import { useState } from "react";

export const Example1 = () => {
  const [order, setOrder] = useState(["Bread"]);

  return (
    <>
      <div>
        <p>{order.join(", ")}</p>
        <button
          onClick={() => {
            order.push("Egg");
            console.log(order);
            setOrder(order); // This will not work, because React will not detect the change,
            // since the array is the same reference, even though the content is different
          }}
        >
          Add Egg
        </button>
      </div>
    </>
  );
};
