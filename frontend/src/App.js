import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate= useNavigate()
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  const handleuser = (eve) => {
    setUser(eve.target.value)
  }

  const handlepass = (eve) => {
    setPass(eve.target.value)
  }

  function check(){
    var logindetails = axios.get(`http://localhost:5000/login?username=${user}&password=${pass}`)
    logindetails.then(function(data){
      if(data.data == true){
        console.log("Login Successful")
        navigate("/success")
      }
      else{
        console.log("Login Failed")
        navigate("/failure")
      }
    })
  }

  return (
     <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-xs bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-500 mb-6">Login</h2>
        
        <input
          onChange={handleuser}
          name="username"
          placeholder="Username"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <input
          type="password"
          onChange={handlepass}
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button
          onClick={check}
          className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
