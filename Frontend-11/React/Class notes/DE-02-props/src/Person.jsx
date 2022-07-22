
import Msg from './Msg';

const Person = (props) => {
 console.log(props);
const{name, img, tel}=props;

  return (
    <div>
    <h2>{name}</h2>
   <Msg nameMsg={name}
    telMsg={tel}
   />


     <img src={img} alt="" />
     <p>{tel}</p>
    </div>
  )
}

export default Person