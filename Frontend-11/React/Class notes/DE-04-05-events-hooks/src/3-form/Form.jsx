// !JSX ile HTML arasında çok fazla fark olmamakla birlikte bazı önemli farklar da mevcut elbette.
//! HTML'de className olarak tanımlanan nitelik JSX'de classNameName olarak tanımlanmalı.
//! HTML'de tek kelime olmayan tabindex gibi nitelikler JSX'de camelCase yapısına uygun olarak tabIndex şeklinde dönüştürülür.
//! HTML'de onclick, onchange gibi nitelikler yukarıdaki camelCase örneğine göre onClick, onChange şeklinde dönüştürülür.
//! HTML'de label etiketinde belirtilen for attribute ü JSX'de htmlFor olarak tanımlanmalı.
//! HTML'de value niteliği JSX'de defaultValue olarak tanımlanmalı.
//! Ayrıca JSX de  javascript ifadeleri {} içinde çalıştırılabilir. Buna map, && gibi yapılarda dahil.



import {useState} from "react";

const Form = () => {
const [userAd, setUserad]=useState("")
const [password,setPassword]=useState("")
const [country,setCountry]=useState("")


const formAlindi = () => {
  
 alert(`Username: ${userAd}
        Password: ${password}
        Country:  ${country}
 `)
};

  return (
    <div className="container text-center mt-4">
      <h1>****************************</h1>
      <h1 className="text-center">FORMS (EVENTS) </h1>


    
      <form onSubmit={formAlindi}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username: <span className="text-danger fw-bold">{userAd}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={(e) => setUserad(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3 ">
          <label className="form-label" htmlFor="country">
            Country: <span className="text-danger fw-bold">{country}</span>
          </label>
          <select
            className="form-select"
            id="country"
            name="country"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form