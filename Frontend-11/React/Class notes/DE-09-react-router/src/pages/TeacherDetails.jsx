import {useState,useEffect} from 'react'
import { Button, Container } from 'react-bootstrap';
import { useParams,useNavigate } from 'react-router-dom';

const TeacherDetails = () => {
const navigate=useNavigate();
//!buraadaki go home butonları için useNavigate

const{id}=useParams();

//!teacher dan yollanan id yi useParams ile buraya tanıttık
console.log(id);
const [kisi,setKisi]=useState({})

//! apide id ile tek eleman getirme özelliği de var, dolayısıyla dizinin içinde dolaşmaya gerek yok, id ile (fetch) tek eleman getirdik ve bastırdık
 useEffect(() => {
   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then((res) => res.json())
     .then((data) => setKisi(data));
 }, [id]);

console.log(kisi);


  return (
    <Container className="text-center mt-4">
      <div>
        <h3>{kisi.name}</h3>
        <img
          src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
          alt=""
          width="300px"
        />
        <h4>{kisi.email}</h4>
        <h4>{kisi.phone}</h4>
      </div>
      <div>
        <Button variant="danger" onClick={() => navigate(-1)}>
          Go Back
        </Button>
        <Button onClick={() => navigate("/")}>Go Home </Button>
      </div>
    </Container>
  );
}

export default TeacherDetails