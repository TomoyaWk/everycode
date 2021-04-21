import { Component, ReactElement } from "react";
import  CharcterList,  { Character } from "./components/CharacterList";
import { Container } from "semantic-ui-react";
import Timer from "./components/Timer";
import HocComponent from "./components/HocComponent";
import HelloComponent from "./components/HelloComponent"
import Counter from "./components/RpComponent";
import HookCounter from "./components/HookComponent";
import EffectTimer from "./components/EffectTimer";
import './App.css';

class App extends Component { 
  characters: Character[] =  [
    {
      id: 1,
      name: '桜木花道',
      grade: 1,
      height: 189.2,
    },
    {
      id: 2,
      name: '流川 楓',
      grade: 1,
      height: 187,
    },
    {
      id: 3,
      name: '宮城リョータ',
      grade: 2,
      height: 168,
    },
    {
      id: 4,
      name: '三井 寿',
      grade: 3,
    },
    {
      id: 5,
      name: '赤木剛憲',
      grade: 3,
      height: 197,
    }
  ];

  render(): ReactElement { 
    return (
    <div className="container">
      <Container>
      <header>
        <h1>『SLAM DUNK』登場人物</h1>
      </header>
        <CharcterList school="湘北高校" characters={this.characters} />
        <Counter max={ 10 }></Counter>
        <Timer></Timer>
        <HocComponent max={ 10 }></HocComponent>
        <HelloComponent target="test name"></HelloComponent>
        <HookCounter></HookCounter>
        <EffectTimer limit={ 60 }></EffectTimer>
      </Container>
    </div>
    );
  }
}

export default App;