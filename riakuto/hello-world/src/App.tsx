import { Component, ReactElement } from "react";
import  CharcterList,  { Character } from "./components/CharacterList";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
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
      <header>
        <h1>『SLAM DUNK』登場人物</h1>
      </header>
      <CharcterList school="湘北高校" characters={this.characters} />
      <Counter></Counter>
      <Timer></Timer>
    </div>

    );
  }
}

export default App;