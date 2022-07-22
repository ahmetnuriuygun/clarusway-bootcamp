

const EditTutorial = ({degistir,degistirItem,setDegistirıtem}) => {
// console.log(degistirItem);
  const{id,title,description}=degistirItem;
  //!torun dededen oğula oradan da buraya gelen degistir metodunu (altta yorumdaki gibi düşünebiliriz), verileri ve verileri değiştirebilme yeteneğini karşıladı. veriler degistirItem={id:id,title:title,desription:description} formatıyla buraya geldiği için destructuring yapmayı tercih ettim. buraya babadan gelen değiştirebilme yeteneği sayesinde inputlara girilen verileri eskisiyle değiştirdim, (altta açıklama var)
  //! sonra save butonuna basınca dededen gelen degistir (put) fonksiyonu sayesinde değişiklik tamamlandı
//  const degistir = async (bilgi) => {

//    await axios.put(`${url}/${bilgi.id}`, bilgi);
//    getBilgiler();
//  };
  
 const save =()=>{
  degistir({id:id, title:title, description:description})
 }
 
return (
  <div className="modal" tabIndex="-1" id="edit-modal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter your title"
              value={title}
              onChange={(e) =>
                setDegistirıtem({ ...degistirItem, title: e.target.value })
              }
              //! değiştirme yeteneğiyle '...degistirItem' veri objemin sadece title ı değişsin, gerisi aynen kalsın
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="desc"
              placeholder="Enter your Description"
              value={description}
              onChange={(e) =>
                setDegistirıtem({
                  ...degistirItem,
                  description: e.target.value,
                })
              }
              //! değiştirme yeteneğiyle '...degistirItem' veri objemin sadece description ı değişsin, gerisi aynen kalsın
              required
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-dismiss="modal"
            onClick={save}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
);
};

export default EditTutorial;
