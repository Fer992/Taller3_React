import React from "react";
import MensajeClick from './MensajeClick';
import Contador from './Contador';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {mostrarComponente: true}; 
  }
  toggleComponent=() => {
    this.setState((prevState =>({mostrarComponente: !prevState.mostrarComponente})))
  }
  render(){
    return(
      <div>
        <Contador />
        <button onClick={this.toggleComponent}>
          {this.state.mostrarComponente          
          ? "Ocultar MensajeClick"
          : "Mostrar MensajeClick"
          }</button>
          {this.state.mostrarComponente && <MensajeClick/>}
      </div>
    );
  }
}
export default App;
