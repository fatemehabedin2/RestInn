import '../assets/css/App.css'
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import PropertyDescriptionPage from '../pages/PropertyDescriptionPage';
import PropertyListingPage from '../pages/PropertyListingPage' ;
import PropertyTypePage from '../pages/PropertyTypePage';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const App = () => 
{
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="propertylisting" element={<PropertyListingPage />} />
        <Route path="propertylisting/:id" element={<PropertyDescriptionPage/>} />
        <Route path="/propertytypes/:type" element={<PropertyTypePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
