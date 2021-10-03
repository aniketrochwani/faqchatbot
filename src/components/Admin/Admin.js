import React,{useState} from 'react';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [add, setAdd] = useState({ques: "", ans: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === "admin@gmail.com" && password === "12345"){
      setIsLoggedIn(true);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdd(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    console.log(add);
  }

  return <>{
  isLoggedIn ? 
  <div class="form">
    <div class="title">Add Question</div>
    <div class="input-container ic1">
      <input id="question" class="input" type="text" placeholder=" " name="ques" value={add.ques} onChange={handleChange} />
      <div class="cut"></div>
      <label htmlFor="question" class="placeholder">Question</label>
    </div>
    <div class="input-container ic2">
      <input  class="input" type="text" placeholder=" " value={add.ans} name="ans"onChange={handleChange} />
      <div class="cut"></div>
      <label class="placeholder">Answer </label>
    </div>
    <button type="text" class="submit" onClick = {handleSubmitQuestion} >submit</button>
  </div>
  :  
  <div class="form">
    <div class="title">Welcome</div>
    <div class="subtitle">Please Log in </div>
    <div class="input-container ic1">
      <input class="input" type="text" placeholder=" " value={email} onChange={e => setEmail(e.target.value)} />
      <div class="cut"></div>
      <label class="placeholder">Email</label>
    </div>
    <div class="input-container ic2">
      <input type = "password" class="input" placeholder=" " value={password} onChange={e=>setPassword(e.target.value)} />
      <div class="cut"></div>
      <label class="placeholder">Password</label>
    </div>
    <button type="text" class="submit" onClick = {handleSubmit} >submit</button>
  </div>
  }
  </>
}

export default Admin;