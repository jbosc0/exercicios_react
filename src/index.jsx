import React from "react";
import { ReactDOM } from "react";

class OlaMundo extends React.Component{
    render(){
        return <h1>Olá mundo</h1>;
    }
}

class Pagina01 extends React.Component{
    render(){
        return(
            <div>
                <OlaMundo></OlaMundo>
                <OlaMundo></OlaMundo>
            </div>    
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<OlaMundo/>)