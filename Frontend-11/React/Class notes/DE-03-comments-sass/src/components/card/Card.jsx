import "./Card.scss"

// !jsx içinde if/for loop kullanamazsınız
//!  if yerine ternary , döngü için map kullanabilirsiniz. if,for loop vs jsx dışında kullanabilirsiniz. map te süslü kullanacaksak return istiyor


const Card = ({dataa}) => {
console.log(dataa);

  return (

    <div className="container">

{
 dataa.map((item)=>{

return(
<div className="card" key={item.id}>
<h1>{item.name}</h1>
<h2>{item.job}</h2>

<p>{item.comment}</p>

<img src={item.img} alt="" />

<div className="btn-container">
<button className="btn-container--small">Small</button>
<button className="btn-container--large">Large</button>
</div>


</div>


)


})
 



}
</div>
  )
}

export default Card