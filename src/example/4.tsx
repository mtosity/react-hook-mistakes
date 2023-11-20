import React from "react";

export const Example4 = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [selectValue, setSelectValue] = React.useState<string>("volvo");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, selectValue });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <select
          name="cars"
          onChange={(e) => {
            setSelectValue(e.target.value);
          }}
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

// export const Example4 = () => {
//   const formRef = React.useRef<HTMLFormElement>(null);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(formRef.current ?? undefined);
//     const data = Object.fromEntries(formData.entries());
//     console.log(data);
//   };

//   return (
//     <form ref={formRef} onSubmit={handleSubmit}>
//       <div>
//         <input id="name" type="text" name="name" placeholder="Name" />
//       </div>
//       <div>
//         <input id="email" type="text" name="email" placeholder="Email" />
//       </div>
//       <div>
//         <select name="cars">
//           <option value="volvo">Volvo</option>
//           <option value="saab">Saab</option>
//           <option value="mercedes">Mercedes</option>
//           <option value="audi">Audi</option>
//         </select>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };
