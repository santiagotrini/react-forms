import { useState } from 'react';

const SuperForm = props => {
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    team: '',
    item1: '',
    item2: '',
    item3: '',
    colors: [],
    items: [],
    correctAnswer: ''
  });  
  const [temp, setTemp] = useState('');
    
  const handleSubmit = e => {
    e.preventDefault();
    formData.items = [
      { text: formData.item1, correct: false }, 
      { text: formData.item2, correct: false }, 
      { text: formData.item3, correct: false }
    ];
    delete formData.item1;
    delete formData.item2;
    delete formData.item3;
    console.log('Sending data to server...', formData);
  };  

  const handleRadio = e => {
    console.log(e.target.previousSibling.name);
    const name = e.target.previousSibling.name;
  }

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [name]: value});
  };
  const addColor = e => {
    setFormData({...formData, colors: [...formData.colors, temp]});
    setTemp('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input 
          type="text" 
          name="username" 
          onChange={handleChange} 
          value={formData.username} 
        />
        <br />
        <label>Password: </label>
        <input 
          type="password" 
          name="password" 
          onChange={handleChange} 
          value={formData.password} 
        />
        <br />
        <label>Colors: </label>
        <input 
          type="text" 
          name="colors" 
          onChange={e => setTemp(e.target.value)} 
          value={temp} 
        />
        <button onClick={addColor}>Add</button>
        <br />
        <ul>
          {formData.colors.map(color => (<li>{color}</li>))}
        </ul>
        <br />
        <select value={formData.team} onChange={handleChange} name="team">
          <option>Newells</option>
          <option>Racing</option>
          <option>All Boys</option>
        </select>
        <br />
        <hr />
        <label>Item 1: </label>
        <input 
          type="text" 
          name="item1" 
          onChange={handleChange} 
          value={formData.item1} 
        />
        <input onChange={handleRadio} name="correct" type="radio" />
        <br />
        <label>Item 2: </label>
        <input 
          type="text" 
          name="item2" 
          onChange={handleChange} 
          value={formData.item2} 
        />
        <input onChange={handleRadio} name="correct" type="radio" />
        <br />
        <label>Item 3: </label>
        <input 
          type="text" 
          name="item3" 
          onChange={handleChange} 
          value={formData.item3} 
        />
        <input onChange={handleRadio} name="correct" type="radio" />
        <br />
        <input type="submit" value="Send" />
      </form>
      <h3>Form Data</h3>
      <pre>{JSON.stringify(formData)}</pre>
      <h3>Temp</h3>
      <pre>{JSON.stringify(temp)}</pre>   
    </div>
    
  );
};

export default SuperForm;
