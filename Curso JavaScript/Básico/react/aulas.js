//  -----------------  AULA DE PROPS E COMPONENTES ----------------- 


import React from "react";

const Equipe = (props) => {
    return(
        <div>
         <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
         <Social amsolutions={props.amsolutions}/>
         <hr/>
        </div>
    );
}

const Sobre = (props) =>{
    return(
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade}</h3>
        </div>
    );
}

const Social = (props) => {
    return(
        <div>
            <a href={props.amsolutions}>AM Solutions </a>
            <a>Linkedin </a>
            <a>Youtube </a>
        </div>
    )
}

function App(){
        return (
            <div>
                <h1>Conheça nossa equipe</h1>
                <Equipe nome="Alam" cargo="Programador" idade="31" amsolutions="https://amsolutions.com.br"/>
                <Equipe nome="Nathália" cargo="Policial Penal" idade="28" amsolutions="https://amsolutions.com.br"/>
                <Equipe nome="Luiza" cargo="International" idade="22" amsolutions="https://amsolutions.com.br"/>
            </div>
        );
}

export default App;


//  ---------------------------------------------------------------------------------- 
//  -----------------  TRABALHANDO COM CLASS ----------------- 

import React, {Component} from "react";


class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
                <Social/>
                <hr/>
            </div>
        )
    }
}

class Sobre extends Component {
    render(){
        return(
            <div>
                <h2> Olá meu nome é {this.props.nome},</h2>
                <h2>Sou {this.props.cargo}</h2>
                <h2>Tenho {this.props.idade} anos de idade.</h2>
            </div>
        )
    }
}



const Social = (props) => {
    return(
        <div>
            <a>Facebook </a>
            <a>Instagram </a>
        </div>
    )
}
function App(){
        return (
            <div>
                <h1>Conheça nossa equipe</h1>
                <Equipe nome="Alam" cargo="Programador" idade="31"/>
                <Equipe nome="Nathália" cargo="Policial Penal" idade="28"/>                
            </div>
        );
}

export default App;


//  ---------------------------------------------------------------------------------- 
//  -----------------  TRABALHANDO COM ESTADOS STATES ----------------- 

import React, {Component} from "react";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: 'Alam',
            contador: 0
        };
        this.aumentar = this.aumentar.bind(this)
        this.diminuir = this.diminuir.bind(this)
    }
    
    aumentar(){
        let state = this.state;
        state.contador += 1;
        state.nome = 'Alam Martins'

        this.setState(state)
        
    }

    diminuir(){
        let state = this.state;
        state.nome = 'Alam Martins Morais'

        if(state.contador === 0){
            alert('Chegou no zero.')
            return;
        }

        state.contador -= 1;
        this.setState(state)

    }

    render(){
        return(
            <div>
                <h1>Contador</h1>
                {this.state.nome}
                <h3>
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        )
    }
}

export default App;

//  ---------------------------------------------------------------------------------- 
//  -----------------  TRABALHANDO COM CICLO DE VIDA DO COMPONENTE ----------------- 

import React, {Component} from "react";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            hora: '00:00:00'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({hora: new Date().toLocaleTimeString() })
        },1000)
    }

    componentDidUpdate(){
        console.log('Atualizou')
    }

    shouldComponentUpdate(){
        //retorna true/false
    }

    render(){
        return(
            <div>
                <h1>Meu Projeto {this.state.hora}</h1>
            </div>
        )
    }
}

export default App;


//  ---------------------------------------------------------------------------------- 
//  -----------------  TRABALHANDO COM RENDERIZAÇÃO CONDICIONAL ----------------- 


import React, {Component} from "react";

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            status: false
        };

        this.sair = this.sair.bind(this);
        this.entrar = this.entrar.bind(this);
    }

    sair(){
        this.setState({status: false});
    }

    entrar(){
        this.setState({status: true});
    }


    render(){
        return(
            <div>
                {/* utilizando operação tenária para dar as opçoes */}
                {this.state.status ?
                <div>
                    <h2>Bem-vindo ao sistema</h2>
                    <button onClick={this.sair}>Sair</button>
                </div> :
                <div>
                    <h2>Olá visitante, faça o login!</h2>
                    <button onClick={this.entrar}>Entrar no sistema</button>
                </div>           
                }
            </div>
            

        )
    }
}

export default App;


//  ---------------------------------------------------------------------------------- 
//  -----------------  TRABALHANDO COM LISTA ----------------- 

import React, {Component} from "react";
import Feed from './components/Feed';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {

           feed:[
            {id:1, username: 'Alam', curtidas:10, comentarios:2},
            {id:2, username: 'Nathália', curtidas:120, comentarios:24},
            {id:3, username: 'Sandra', curtidas:30, comentarios:12},
            {id:4, username: 'Eduardo', curtidas: 1, comentarios: 0},
           ]

        };

    }

    render(){
        return(

            <div>
                {/* Map vai varrer todo array e criar novo objeto[item] */}
                {this.state.feed.map((item) => {
                    return(
                       <Feed 
                       id = {item.id} 
                       username = {item.username}
                       curtidas = {item.curtidas}
                       comentarios = {item.comentarios}
                       />
                    )
                })}


            </div>

        )
    }
}

export default App;