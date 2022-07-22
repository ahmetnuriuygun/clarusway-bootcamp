const Msg = (props) => {
  // props=>{nameMsg="Emily Kurnikov"}
  console.log(props);
  return <h1>Hello, I am {props.nameMsg}</h1>;
};

// const Msg = ({ nameMsg }) => {
//   console.log(nameMsg);
//   return <h1>Hello, I am {nameMsg}</h1>;
// };
export default Msg;
