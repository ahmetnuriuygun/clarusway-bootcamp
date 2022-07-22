
import { Container,Button } from 'react-bootstrap';
import { useParams,useNavigate } from 'react-router-dom';
import data from "../data";

const CardDetails = () => {
 const navigate=useNavigate();
 //!go back ve go home button ları için
const {name} =useParams();
// name: CSS

  
    /* datanın içinde gezin, datada sıradaki name, benim useParams la buraya aldığım name aynı olduğunda, o elemanın bilgilerini bastır */
  
  return (
   
    <Container className="text-center mt-4">
      {data.map(
        (i) =>
          i.name === name && (
         
            <div>
              <h2>{i.name}</h2>
              <img src={i.img} width="300px" alt="" />
              <h3>{i.text}</h3>

              <div>
                <Button variant="danger" onClick={() => navigate(-1)}>
                  Go Back
                </Button>
                <Button onClick={() => navigate("/")}>Go Home </Button>
              </div>
            </div>
          )
      )}
    </Container>
  );
}

export default CardDetails