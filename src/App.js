import './App.css';
import ChangeColor from './components/ChangeColor'
import LazyFunction from './components/LazyFunction'
import FormState from './components/FormState';
import PrevState from './components/PrevState'
import SetStateClass from './components/SetStateClass'
import SetStateFunction from './components/SetStateFunction'

function App() {


  return (
    <div className="App">
       <ChangeColor />
       <LazyFunction />
       <FormState />
       <PrevState />
       <SetStateClass />
       <SetStateFunction />
    </div>
  );
}

export default App;
