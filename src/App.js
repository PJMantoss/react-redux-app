import LeftBar from './components/leftbar/LeftBar';
import Navbar from './components/navbar/Navbar';
import Update from './components/update/Update';
import Rightbar from './components/rightbar/Rightbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <LeftBar />
        <Update />
        <Rightbar />
      </div>
    </>
  );
}

export default App;