
import './App.css';

import { Routes, Route } from "react-router-dom";
import Registration from './pages/registration/Registrationpage'
import Entrypage from './pages/entry/Entrypage';
// import Resetpassword from './components/password-reset/passwordreset';
function App() {
  return (
    <div className="App">
			<Routes>
        <Route path="/" element={<Entrypage />} />
        <Route path="/registration" element={<Registration />} />
        {/* <Route path="/password-reset" element={<Resetpassword />} /> */}

        

      </Routes>
		</div>
  );
}

export default App;
