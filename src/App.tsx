import { Outlet } from "react-router-dom"

import './App.scss'
import { LeftBar, Navbar, RightBar } from "./components"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <LeftBar />
        <main>
          <Outlet />
        </main>
        <RightBar />
      </div>
    </>
  )
}

export default App