/* eslint-disable */
import React, {useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from "axios";

function Login() {
	
	const [user, setUser] = useState({cin: "",password: ""});

	let navigate = useNavigate()

	const { cin,password} = user;

const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

	const submitLogin = async (e) => {
		try {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/v1/auth/login", user).then(result=>{
		 /* alert(result.data.user.roles)*/
		  localStorage.setItem('role', result.data.user.roles);


		  localStorage.setItem('user',JSON.stringify(result.data.user));
		//console.log(role);
		const user = localStorage.getItem('user')
		const role = localStorage.getItem('role')
    console.log(username)
		  console.log(user)
		  console.log(role)
		})
		.then(()=>{
			 navigate('/../Home', { replace: true })
             navigate(0)
		})
		}
		catch (err) {
        console.log(err)
		}
		if(!password.length || ! cin.length){
      alert("Invalid login")
    }
    };
	

	return (
		
 <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
		 <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid" alt="Phone image"/>
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
          <div class="form-outline mb-4">
            <input type="number" id="form1Example13" class="form-control form-control-lg" placeholder="Enter your id number"
                            name="cin"
							value={cin}
							 onChange={(e) => onInputChange(e)}/>
            <label class="form-label" for="form1Example13">cin number</label>
          </div>

          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg" placeholder="password"
                            name="password"
							value={password}
                             onChange={(e) => onInputChange(e)} />
            <label class="form-label" for="form1Example23">Password</label>
          </div>


          <button type="submit" class="btn btn-danger btn-lg btn-block"  onClick={(e) =>  submitLogin (e)}
				 >Login</button>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">Welcome Back!</p>
          </div>

        </form>
      </div>
    </div>
  </div>
</section>
		 </div>
	);
}

export default Login;