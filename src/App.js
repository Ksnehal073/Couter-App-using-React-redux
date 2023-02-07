import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './actions/index';

function App() {
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch()
  return (
    <div className="wrapper">
      <div className="top">
        <input className="counterNumber" value = {myState}></input>
      </div>
      <div class="bottomButton">
        <button className='increase' onClick={() => dispatch(increase())}>
          Increase
        </button>
        <button className='decrease' onClick={() => dispatch(decrease())}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
