// import React, { useState} from 'react';
// import './AuthComponent.css'; // Adjust the path to your CSS file
// import logImage from './log.svg'; // Import the image using an import statement
// import registerImage from './register.svg';
// import { Helmet } from 'react-helmet';
// import UserService from '../../services/UserService';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';

//  const AuthComponent = () => {
//   const [isSignUpMode, setIsSignUpMode] = useState(false);
//   const [username, setUsername] = useState("");
//   const [url, SetUrl] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [data, setData] = useState(null)
//   const handleSignInClick = () => {
//     setIsSignUpMode(false);
//   };
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//         const dt = { email, password };
//         console.log(dt);
//         const response = await UserService.getLoginEmail(email, dt)
//         setData(response.data)
//         if (data != null) {
//           if (data.email === "1") {
//             console.log("Not Found");
//             toast.error('🦄 Wow so easy!', {
//               position: "top-right",
//               autoClose: 5000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//               theme: "colored",
//             });
//             console.log(data);
//             console.log("Not Found");
//           } else {
//             toast.success('🦄 Wow so easy!', {
//               position: "top-right",
//               autoClose: 5000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//               theme: "colored",
//             });
//             localStorage.setItem('userData', JSON.stringify(data));
//             navigate("/home")
//             console.log('Found');
//           }
//         }
//         else{
//             toast.error('🦄 Wow so easy!', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "colored",
//               });
//         }
//       } catch (error) {
//         console.error(error);
//         // Handle the error appropriately on the frontend.
//       }
//     };
  


//   const handleRegistration = async (e) => {
//     e.preventDefault()
//     console.log("Registration")
//     const data = {username,email,password,url}
//     console.log(data)
//     await UserService.addUser(data);
//     localStorage.setItem("userData",JSON.stringify(data))
//     navigate("/home")
//   }

//   const handleSignUpClick = () => {
//     setIsSignUpMode(true);
//   };

//   return (
//     <div className={`lcontainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
//       <div className="forms-container">
//         <div className="signin-signup">
//           <form action="home" className="sign-in-form" onSubmit={handleLogin}>
//             <h2 className="title">Sign In</h2>
//             <div className="input-field">
//               <i className="fas fa-user"></i>
//               <input type="text" placeholder="Username" onChange={(e) => {
//                 setEmail(e.target.value)
//               }} value={email} />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-lock"></i>
//               <input type="password" placeholder="Password" onChange={(e) => {
//                 setPassword(e.target.value)
//               }} value={password} />
//             </div>
//             <input type="submit" value="Login" className="btn1 solid" />

//             <p className="social-text">Or Sign in with social platforms</p>
//             <div className="social-media">
//               <a href="#" className="social-icon">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="#" className="social-icon">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="#" className="social-icon">
//                 <i className="fab fa-google"></i>
//               </a>
//               <a href="#" className="social-icon">
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//             </div>
//           </form>

//           <form action="home" className="sign-up-form" onSubmit={handleRegistration}>
//             <h2 className="title">Sign Up</h2>
//             <div className="input-field">
//               <i className="fas fa-user"></i>
//               <input type="text" placeholder="Username" onChange={(e) => {
//                 setUsername(e.target.value)
//               }} value={username} />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-envelope"></i>
//               <input type="email" placeholder="Email" name='email-signup' onChange={(e) => {
//                 setEmail(e.target.value)
//               }} />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-lock"></i>
//               <input type="password" placeholder="Password" onChange={(e) => {
//                 setPassword(e.target.value)
//               }} value={password} />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-user"></i>
//               <input type="text" placeholder="Profile Url" onChange={(e) => {
//                 SetUrl(e.target.value)
//               }} value={url} />
//             </div>
//             <input type="submit" value="Sign Up" className="btn1 solid" />

//             <p className="social-text">Or Sign up with social platforms</p>
//             <div className="social-media">
//               <a href="#" className="social-icon">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="#" className="social-icon">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="#" className="social-icon">
//                 <i className="fab fa-google"></i>
//               </a>
//               <a href="#" className="social-icon">
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="panels-container">
//         <div className="panel left-panel">
//           <div className="content">
//             <h3>New here?</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
//             <button className="btn1 transparent" id="sign-up-btn" onClick={handleSignUpClick}>Sign Up</button>
//           </div>
//           <img src={registerImage} className="image" alt="Sign Up" />
//         </div>
//         <div className="panel right-panel">
//           <div className="content">
//             <h3>One of us?</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
//             <button className="btn1 transparent" id="sign-in-btn" onClick={handleSignInClick}>Sign In</button>
//           </div>
//           <img src={logImage} className="image" alt="Sign In" />
//         </div>
//       </div>
//       <Helmet>
//         <script
//           src="https://kit.fontawesome.com/64d58efce2.js"
//           crossorigin="anonymous"
//         />
//       </Helmet>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//       {/* Same as */}
//       <ToastContainer />
//     </div>
//   );

// };

// export default AuthComponent;