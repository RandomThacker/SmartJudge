import { Routes, Route} from "react-router-dom";

// Imported pages
import Question from './pages/QPage/Question'
import Navbar from './components/custom/Navbar'
import Page from "./pages/Home/Page";
import ProfilePage from "./pages/Profile/ProfilePage";
import ProblemsPage from "./pages/ProblemSet/ProblemsPage";
import EventPage from "./pages/Events/EventPage";

function App() {

  return (
    <>
    <Navbar />

    <Routes>
    <Route path="/" element={<Page  />} />
    <Route path="/question/:question" element={<Question  />} />
    <Route path="/question/:question/submissions" element={<Question  />} />
    <Route path="/question/:question/discussion" element={<Question  />} />
    <Route path="/user/:username" element={<ProfilePage  />} />
    <Route path="/problems" element={<ProblemsPage  />} />
    <Route path="/events/:eventname" element={<EventPage  />} />
    
    </Routes>
    </> 
  )
}

export default App
