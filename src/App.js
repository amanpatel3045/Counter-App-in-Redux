import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './action/counter';


// //Action => INCREMENT, DECREMENT
// const increment =()=>{
//   return{
//     type:'INCREMENT'
//   }
// }


// //Reducers => how to update the state, operations of action
// const Counter = (state = 0,action) =>{
  
// switch(action.type){
//   case 'INCREMENT':
//     return state+1;
//     case 'DECREMENT':
//       return state-1;
//       default:
//         return state;
// }
  
// }



// //Store => Globalized state, it contains all states of our react application
// let Store = createStore(Counter);

// Store.subscribe(()=>console.log(Store.getState()))


// //Dispatch => Execute action or call action
// Store.dispatch(increment())




function App() {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch();
  let payLoadValue = 2;
  return (
    <div className="App">
    <h1>Counter: {counter}</h1>
    <button onClick={()=>dispatch(increment(payLoadValue))}>INCREMENT BY 2</button>
    <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
    </div>
  );
}

export default App;
