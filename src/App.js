import './App.css';
import ShoppingList from './components/ShoppingList';
import Bag from './components/Bag';

function App() {
  return (
    <>
      <Bag />
      <div className='list-app'>
        <ShoppingList />
      </div>
    </>
  );
}

export default App;
