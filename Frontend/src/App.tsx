import { Routes, Route} from "react-router-dom";

// Imported pages
import Question from './pages/QPage/Question'
import Navbar from './components/custom/Navbar'
import Page from "./pages/Home/Page";
import ProfilePage from "./pages/Profile/ProfilePage";

function App() {

  return (
    <>
    <Navbar />

    <Routes>
    <Route path="/" element={<Page  />} />
    <Route path="/:question" element={<Question  />} />
    <Route path="/:question/submissions" element={<Question  />} />
    <Route path="/:question/discussion" element={<Question  />} />
    <Route path="/user/:username" element={<ProfilePage  />} />
    
    </Routes>
    </> 
  )
}

export default App
