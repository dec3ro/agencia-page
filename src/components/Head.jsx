import { useState } from 'react'

const Sun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
  >
    <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"></path>
  </svg>
)

const Moon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
  >
    <path
      fill-rule="evenodd"
      d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
      clip-rule="evenodd"
    ></path>
  </svg>
)

const Bars = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-8"
    >
      <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}

export const Head = () => {
  const [toggle, setToggle] = useState(true)
  const [isActive, setIsActive] = useState(false)

  function changeTheme() {
    setToggle(!toggle)
    document.documentElement.classList.toggle('dark')
  }

  function scrollToPrecios() {
    const sectionPrecios = document.getElementById('pricing');
    sectionPrecios.scrollIntoView({ behavior: 'smooth' });
  }
  
  function scrollToNosotros() {
    const sectionNosotros = document.getElementById('nosotros');
    sectionNosotros.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToServicios() {
    const sectionServices = document.getElementById('services');
    sectionServices.scrollIntoView({ behavior: 'smooth' });
  }
  

  return (
    <header className="flex justify-between items-center xl:px-[150px] px-4 py-[15px] dark:bg-neutral-900 border-b-[3px] bg-white border-dashed dark:border-[#292929] fixed xl:w-[calc(100vw-17px)] z-50 w-full top-0">
      <h1 className="flex-grow basis-0 text-3xl font-mono text-stone-900/80 dark:text-white xl:px-0">
        d0
      </h1>
      <div
        className="md:hidden flex justify-center items-center"
        onClick={() => setIsActive(!isActive)}
      >
        <Bars />
      </div>
      <ul
        className={`flex xl:justify-center items-center xl:gap-[54px] text-lg md:text-base gap-5 py-4 md:py-0 dark:text-stone-200 [&>li]:hover:cursor-pointer text-stone-900/80 md:flex-row flex-col md:static absolute bg-white md:bg-transparent transition-all dark:bg-neutral-900 ${
          isActive ? 'left-0' : '-left-64'
        } top-[76px] h-dvh md:h-auto md:w-auto w-[250px]`}
      >
        <li onClick={scrollToNosotros}>Nosotros</li>
        <li onClick={scrollToPrecios}>Precios</li>
        <li onClick={scrollToServicios}>Servicios</li>
      </ul>
      <div className="flex justify-end items-center flex-grow basis-0">
        <div className="flex justify-center items-center xl:gap-4">
          <button
            className="border-2 p-2 rounded-md border-transparent dark:hover:border-stone-600 hover:border-emerald-400 hover:bg-emerald-200/80 hover:text-white transition-all dark:hover:bg-neutral-600/25 text-stone-900 dark:text-stone-200"
            onClick={() => changeTheme()}
          >
            {toggle ? <Moon /> : <Sun />}
          </button>
          <button className="px-4 dark:bg-stone-200 dark:text-neutral-900 font-bold py-2 rounded justify-center items-center gap-3 bg-gradient-to-t from-blue-300 to-emerald-400 text-white xl:flex hidden">
            Contactanos
          </button>
        </div>
      </div>
    </header>
  )
}
