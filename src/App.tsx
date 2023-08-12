import { Outlet } from "react-router-dom"

import { LeftBar, Navbar, RightBar } from "./components"

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <Outlet />
        <RightBar />
      </div>
    </>
  )
}

export default App