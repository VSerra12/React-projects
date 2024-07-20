import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import PresentationCard from "./pages/PresentationCard"
import ApiSearch from "./pages/ApiSearch"

//rafce
const App = () => {
  return (
    <>
    <Navbar />
    <div className="container">

    <Routes>
      <Route path="/" element={<PresentationCard/>}/>
      <Route path="/apisearch" element={<ApiSearch/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App