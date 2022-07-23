import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
      <Navbar title="TextBox" about={"About us"}  />
     <div className='container py-4'>
      <Textarea heading="Enter Text Below:" />
     </div>
    </>
  );
}

export default App;
