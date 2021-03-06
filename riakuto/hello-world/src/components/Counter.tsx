import { Component, ReactElement } from "react";
import { Button, Card, Statistic } from "semantic-ui-react";
import "../App.css";


type State = { count: number };

class Counter extends Component<unknown, State> {
    constructor(props : unknown) {
        super(props);
        this.state = { count: 0 };
    }

    reset = ():void  => { 
        this.setState( {count: 0} );
    };

    increment = ():void => {
        this.setState(prevState => ({
            count : prevState.count + 1, 
        }));
    }

    render() : ReactElement {
        const { count } = this.state;

        return (
            <div className="count-container">
                <header>
                    <h1>カウンター</h1>
                </header>
                <Card>
                    <Statistic className="number-board">
                        <Statistic.Label>
                            count
                        </Statistic.Label>
                        <Statistic.Value>
                            { count }
                        </Statistic.Value>
                    </Statistic>
                    <Card.Content>
                        <div className="ui two-button">
                            <Button color="red" onClick={ this.reset }>Reset</Button>
                            <Button color="green" onClick={ this.increment }>CountUp</Button>
                        </div>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

export default Counter;