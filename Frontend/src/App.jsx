import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    message:''
  }); 
  
  const handlechange =(e) => {
    const { name,value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    
    })
  };
  const handlesumbit = async (e) => {
    e.preventDefault();
    try{
      const response =await axios.post('http://Localhost:5000/sumbit',formData);
      console.log(response.data);
      alert('Form submitted successfully');
    }catch(error){
      console.error('error submitting form',error);
      alert('Failed to sumbit form');

    }
    

  };

  return (
    <form onSubmit={handlesumbit}>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handlechange}required/>
      </div>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handlechange}required/>
      </div>
      <div>
        <label>search</label>
        <input type="search" name="search" value={formData.search} onChange={handlechange}required />
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
      
    </form>
  )
}

export default App
