import React from "react";

class MensajeClick extends React.Component {
    constructor(props){
        super(props);
        this.state = { mensaje: "Hello Developer"};
    }
    componentDidMount(){
        console.log("El componente se ha montado en la pantalla");
    }
    componentDidUpdate(prevProps, prevState){
        console.log("El componente se ha actualizado");
    }
    componentWillUnmount(){
        console.log("El componente va a desaparecer");
    }
    render (){
        return <div>{this.state.mensaje}</div>;
    }
}
export default MensajeClick;