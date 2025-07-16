import React from 'react'
import { Logo, Cantainer, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

  const navigate = useNavigate()
  const authStatus = useSelector((state) => state.auth.status)

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className=''>

    </header>
  )
}

export default Header