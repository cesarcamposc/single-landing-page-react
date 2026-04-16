import Button from "./Button"

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center px-4 md:px-8 py-5 mb-5 text-white'>
        <header className='text-2xl text-orange-700 font-bold'>César Campos</header>
      <ul className='hidden md:flex gap-10'>
        <li><a href="https://www.google.com" className='text-gray-700 hover:text-orange-700 transition'>Home</a></li>
        <li><a href="#about" className='text-gray-700 hover:text-orange-700 transition'>About</a></li>
        <li><a href="#services" className='text-gray-700 hover:text-orange-700 transition'>Services</a></li>
        <li><a href="#contact" className='text-gray-700 hover:text-orange-700 transition'>Contact</a></li>
      </ul>
        <Button className='px-6 py-3'>Resume</Button>
    </nav>    
  )
}

export default NavBar