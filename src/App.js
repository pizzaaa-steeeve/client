import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LoginForm from './components/LoginForm';
import LoginPage from './pages/LoginPage/index.jsx'
import RequireAuth from './components/ReguireAuth';
import Todo from './pages/TodosPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/regesiter'/>

    <Route element={<RequireAuth/>} >
      <Route path='/todo' element={<Todo/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
)
}

export default App;
