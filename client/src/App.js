import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewTeacherDetails from './Components/ViewTeacherDetails';
import ViewTeachers from './Components/ViewTeachers';
import Login from './Components/Login';
import AddStudent from "./Components/AddStudent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route exact path="/" element={<ViewTeachers />} />
          <Route exact path="/teacher/:id" element={<ViewTeacherDetails />} />
          <Route exact path="/add-student" element={<AddStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
