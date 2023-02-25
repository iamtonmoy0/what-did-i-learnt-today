import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx'
import Clock from './components/Clock'





function App() {
  return (
   <div>
     <Header/>
     <Clock locale="bd-BD"/>


   </div>
   


  );
}

export default App;
