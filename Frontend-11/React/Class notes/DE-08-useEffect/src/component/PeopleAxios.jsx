import { useState, useEffect } from "react";
import axios from "axios";
import faker from "faker";

const PeopleAxios = () => {
  const [insanlar, setInsan] = useState([]);

  // state yenilenince ekrana  basılacaklar değişiyor ve sayfa tekrar render ediliyor, tekrar fetch işlemi oluyor, sonsuz döngü. bu yüzden useeffect. [insanlar] yazsak yine dizi (state) her değiştiğinde useeffect yap demek olur, yine sonsuz döngü

  //!! https://jsonplaceholder.typicode.com/
  //!fake json formatında data almak için
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setInsan(res.data))
      .catch((err) => console.log(err));
  }, []);

  //!! https://fakerjs.dev/api/name.html
  // const data2 = {
  //   id: faker.datatype.number(),
  //   name: faker.name.findName(),
  //   phone: faker.phone.phoneNumber(),
  // };

  const postInsan = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        id: faker.datatype.number(),
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
      })
      .then((res) => setInsan([...insanlar, res.data]));
  };
  //!eğer üstteki gibi data2 adıyla fake verileri toplayacaksak ve axios un post adresinden sonra id:...,name:... yazacaksak, axios un içindeki setInsan da res.data.data2 yazmalı setInsan([...insanlar, res.data.data2])
  //!axios json formatına kendi çeviriyor ve post işlemi çok kolay
  console.log(insanlar);

  return (
    <div className="container text-center mt-4">
      <button className="btn btn-success" onClick={postInsan}>
        POST DATA
      </button>
      <h1>USER LIST</h1>
      <div className="row">
        {insanlar.map((user) => {
          const { id, name, phone } = user;
          return (
            <div className="col-6 col-md-4 col-lg-2" key={id}>
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
                alt=""
              />
              <h4 className="text-danger pt-4">{name}</h4>
              <h6>{phone}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PeopleAxios;
