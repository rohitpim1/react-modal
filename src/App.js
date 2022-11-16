import React,{useState} from "react";
import "./style.css";
import styled from 'styled-components'
import { AiOutlineClose } from "react-icons/ai";

const Container = styled.div`
position:relative;
max-width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`;
const Button = styled.button`
width:150px;
height:50px;
border:none;
outline:none;
background:purple;
color:#fff;
font-size:1.3rem;
cursor:pointer;
opacity:1;
transition:opacity 1s ease;
&:hover{
  opacity:0.9;
}
`;

const Modal = styled.div`

position:absolute;
top:10px;
left:20px;
width:90%;
height:100px;
background:purple;
border-radius:10px;
text-align:center;
padding-top:20px;
`;
export default function App() {
  const[open,setOpen] = useState(false);
  return (
  <Container >
  <Button onClick={()=>setOpen(true)} open={open}>Open</Button>
  {
    open && <Modal>
      <h4>Rohit Pimpalkar</h4> 
      <span style={{paddingLeft:"300px",cursor:"pointer"}} onClick={()=>setOpen(false)}><AiOutlineClose font-size="20px" color="#ffff"/></span>
     <p>
       Welcome Oboard, Have a Great Day Ahead.
     </p>
    </Modal>
  }
  </Container>
  );
}
