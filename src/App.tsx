import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Auth } from "./ui/Auth";
// import { User } from "./ui/User";
// import { Front } from "./ui/Front";

import Header  from "./common/presentation/Header";
import Footer  from "./common/presentation/Footer";
import Home  from "./common/presentation/Home";
import { CreatePost } from './posts/presentation/Card/CreatePost';
import { Login } from "./users/presentation/auth/Login";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* <Route path="/auth" element={<Auth />} /> */}
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/create-post" element={<CreatePost/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
