// import React from "react";

// const Greet = () => {
//   return <h1>ENEMIES</h1>;
// };

// export default Greet;
const Greet = ({ name, email, phoneNumber }) => {
  return (
    <div>
      <h1>ENEMIES Information</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phoneNumber}</p>
    </div>
  );
};
export default Greet;