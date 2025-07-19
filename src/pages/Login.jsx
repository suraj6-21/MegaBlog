import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import { Login as LoginComponent } from '../components'

function Login() {

  // Handler to be called on successful login
  const handleLoginSuccess = () => {
    toast('🦄 Login successful!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };


  return (
    <div className='py-8'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <LoginComponent onLoginSuccess={handleLoginSuccess} />
    </div>
  )
}

export default Login