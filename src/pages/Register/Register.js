import React from 'react';
import './Register.css'

export default function Register(props) {
  //  const [taiKhoan,setTaiKhoan] = useState('');
  //  const[matKhau,setMatKhau] = useState('');
  //  const[email,setEmail] = useState('');
  // const dispatch =useDispatch();

  //  const handleRegister= e => {
  //     e.preventDefault();
  //     const newUser = {
  //       taiKhoan: taiKhoan,
  //       matKhau: matKhau ,
  //       email: email
  //     };
  //     registerUser(newUser, dispatch);
  //  }
  return   <div>
  <section className="register-container">
  <div className="register-title"> Sign up </div>
<form className='register-form' >
    <label>EMAIL</label>
    <input type="text" placeholder="Enter your email" 
    //  onChange= {e => setEmail(e.target.value)}
    />
    <label>USERNAME</label>
    <input type="text" placeholder="Enter your username" 
    //  onChange= {e => setTaiKhoan(e.target.value)}
    />
    <label>PASSWORD</label>
    <input type="password" placeholder="Enter your password" 
    // onChange= {e => setMatKhau(e.target.value)}
    />
    <button type="submit" className='bg-green-500 p-2 w-22 h-22 mt-2'> Create account </button>
</form>
</section>
</div>
}
