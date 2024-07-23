import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import PresentationCard from "./pages/PresentationCard"
import ApiSearch from "./pages/ApiSearch"
import { UserProvider } from "./contexts/UserContext"

//rafce
const App = () => {
  return (
    <UserProvider>
      <Navbar />
      <div className="container">

        <Routes>
          <Route path="/React-projects/" element={<PresentationCard />} />
          <Route path="/React-projects/apisearch" element={<ApiSearch />} />
        </Routes>
      </div>
    </UserProvider>
  )
}

export default App