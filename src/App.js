import React from 'react';
import Store from './components/Store'
import {products} from './components/data'
import './App.css';


export default function App() {
  return (<Store products={products} />)
}


// class App extends React.Component {
//   render() {
//     return <Store products={products}/>
//   }
// };
