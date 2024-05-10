import './App.css';
import ToDoApp from './Components/ToDoApp'
import ToDoForm from './Components/ToDoForm';

function App() {
  return (
    <div className="App">
      <h2 className="heading">To DO List✨</h2>
      <ToDoForm/>
      <ToDoApp/>
    </div>
  );
}

export default App;
