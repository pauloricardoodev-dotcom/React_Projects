import React, { Component } from "react";
import './estilo.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frase = [
      "Grandes oportunidades estão a caminho.",
      "A persistência é o caminho do sucesso.",
      "Você vai se surpreender com o que é capaz de conquistar.",
      "Algo bom vai acontecer quando você menos esperar.",
      "Confie mais no seu potencial.",
      "Uma nova ideia trará ótimos resultados.",
      "A paciência hoje evita problemas amanhã.",
      "Seu esforço será recompensado em breve.",
      "O aprendizado nunca é em vão.",
      "Você está no caminho certo, continue.",
      "Mudanças positivas estão se aproximando.",
      "Não tenha medo de recomeçar.",
      "Uma conversa importante trará clareza.",
      "O sucesso começa com pequenos passos.",
      "Seja consistente, não perfeito.",
      "Boas notícias chegarão em breve.",
      "Você aprende algo novo todos os dias.",
      "A disciplina vence a motivação.",
      "Confie no processo.",
      "Grandes resultados exigem tempo.",
      "Sua dedicação fará a diferença.",
      "A sorte favorece quem se prepara.",
      "Você está construindo algo importante.",
      "Cada erro é uma lição disfarçada.",
      "Persistir hoje é vencer amanhã.",
      "Novas portas se abrirão.",
      "Seu futuro depende das escolhas de hoje.",
      "Você é mais forte do que imagina.",
      "A constância supera o talento.",
      "Algo que você deseja está mais perto do que pensa."
    ];
  }
  

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frase.length);
    state.textoFrase = '"' + this.frase[numeroAleatorio] + '"';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img" />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}

export default App;