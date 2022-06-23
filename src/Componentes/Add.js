import React, {useState} from "react";

const Add = () => {

    const [add, setAdd] = useState({name:null , id: null});
const handleChange = (e) =>{
    setAdd(e.target.id);
}
const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(add);
    
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input type="text"  id="name" onChange={handleChange}/>

        <button>submit</button>
      </form>
    </div>
  );
};

export default Add;
