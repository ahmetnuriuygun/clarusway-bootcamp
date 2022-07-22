import styled from "styled-components";

const ButtonSSS = styled.button`
  background-color: ${({enes})=> (enes? "white" :"purple")};
  color:${({enes})=>(enes? "purple":"white")};

cursor:pointer;
padding:1rem 1.5rem;
border:2px solid green;
border-radius: 5px;
font-family: "tahoma";
&:hover{

 transform:scale(0.95)
}

 `;

 export const DomatesButon = styled(ButtonSSS)`
   color: ${({ nurbaki }) => (nurbaki ? "yellow" : "green")};
   background-color: ${({ nurbaki }) => (nurbaki ? "green" : "yellow")};
   border: 3px solid red;
 `;

export default ButtonSSS;
