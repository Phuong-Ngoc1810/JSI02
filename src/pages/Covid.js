// import React from 'react'
// const url = 'https://covid-193.p.rapidapi.com/countries';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6bb2067e96mshf412f67b1b4aa75p112959jsn15e565b4ec93',
// 		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
// 	}
// };
// async function callApi(){
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
//     document.getElementById('cm').innerText = result.results

// } catch (error) {
// 	console.error(error);
// }
// }
// callApi()

// function Covid() { 
//   return (
//     <div>
//         <h1>Covid-19</h1>
//         <div id ='Cm'>
//            <p>Tổng số ca mắc covid-19: </p>
//            <p id ='cm'></p>
//         </div>
//         <div id ='Cm'>
//            <p>Tổng số người chết: </p>
//            <p id =''></p>
//         </div>
//         <div id ='Cm'>
//            <p>Tổng số ca mắc mới trong ngày: </p>
//            <p id =''></p>
//         </div>
//     </div>
//   )
// }

// export default Covid


// import React from 'react'

// function RegisAndLogin() {
//   const registerButton =document.getElementById("register");

// const loginButton =document.getElementById("login");

// const container =document.getElementById("container");

// registerButton.addEventListener("click", ()=> { container.classList.add("right-panel-active");

// });

// loginButton.addEventListener("click", () => {

// container.classList.remove("right-panel-active");

// });
//   return (
//     <div class='container' id='container'>
//       <div class='form-container register-container'>
//         <form action='#'>
//           <h1>Register</h1>
//           <input type='text' placeholder='Username'></input>
//           <input type='email' placeholder='Email'></input>
//           <input type='password' placeholder='Password'></input>
//           <button>Register</button>
//           <span>or use your account</span>
//           <div class='social-container'>

//           </div>
//         </form>
//       </div>
//       <div class='form-container login-container'>
//         <form action='#'>
//           <h1>Login</h1>
//           <input type='text' placeholder='Username'></input>
//           <input type='password' placeholder='Password'></input>
//           <div class='content'>
//             <div class='checkbox'>
//               <input type='checkbox' name='checkbox' id='checkbox'></input>
//               <label for='Remember me'></label>
//             </div>
//             <div class='pass-link'>
//               <a href='#'>Forgot your password?</a>
//             </div>
//           </div>
//           <button>Login</button>
//           <span>or use your account</span>
//           <div class='social-container'>

//           </div>
//         </form>
//       </div>
//       <div class='overlay-container'>
//         <div class='overlay'>
//           <div class='overlay-panel overlay-left'>
//             <h1 class='title'>Welcome <br>friends</br></h1>
//             <p>If you have an account, login here and have fun</p>
//             <button class='ghost' id='login'>Login</button>
//           </div>
//           <div class='overlay-panel overlay-right'>
//             <h1 class='title'>Start yout <br>journey now</br></h1>
//             <p>If you don't have an account yet, join us and start your journey</p>
//             <button class='ghost' id='register'>Register</button>
//           </div>
//         </div>
//       </div>
//     </div>
    
//   )
// }

// export default RegisAndLogin

import React, { useState, useEffect } from 'react';

const Covid = (WrappedComponent) => {
    const Covid = (props) => {
        const [data, setData] = useState();

        const getData = async () => {
            const url = 'https://asos10.p.rapidapi.com/api/v1/getProductListBySearchTerm?searchTerm=Tomm&currency=USD&country=US&store=US&languageShort=en&sizeSchema=US&limit=50&offset=0&sort=recommended';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'ce2234ad95msh9d8c5043404fc84p1913a6jsn5df080088056',
                    'x-rapidapi-host': 'asos10.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result)
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
        // Fetch data on component mount and whenever the props change.
        useEffect(() => {
            getData()
        }, []);
        return <WrappedComponent data={data} {...props} />;
    };

    return Covid;
};
export default Covid;