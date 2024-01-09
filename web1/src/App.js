import Navbar from './Navbar'
import './App.css';
import SearchBar from './SearchBar';
import TopicSection from './TopicSection';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar /> 
      
      {/* search section */}

      <SearchBar />
      {/* Topic section */}

      <TopicSection />
      {/* Footer */}
    </div>
  );
}

export default App;
