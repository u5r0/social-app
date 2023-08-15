import { Outlet } from "react-router-dom"
import { useAtom } from 'jotai';

import './App.scss'
import { initialTheme } from "./atoms/themeAtom";
import { LeftBar, Navbar, RightBar } from "./components"

const App = () => {
  const [appTheme, setAppTheme] = useAtom(initialTheme);
  const toggle = () => setAppTheme(!appTheme);

  return (
    <div className={appTheme? 'dark': 'light'}>
      <Navbar toggleTheme={toggle} />
      <div className="container">
        <LeftBar />
        <main>
          <Outlet />
        </main>
        <RightBar />
      </div>
    </div>
  )
}

export default App