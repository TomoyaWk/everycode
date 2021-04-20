import { FC, useState } from "react";
import { Button, Card, Statistic } from "semantic-ui-react";


const HookCounter: FC  = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(n => n + 1);
    const reset = () => setCount(0);

    return (
        <Card>
            <Statistic className="number-board">
                <Statistic.Label>Count</Statistic.Label>
                <Statistic.Value>{ count }</Statistic.Value>
            </Statistic>
            <Card.Content>
                <div className="ui two buttons">
                    <Button color="red" onClick={ reset }>Reset</Button>
                    <Button color="green" onClick={ increment }> +1 </Button>
                </div>
            </Card.Content>
        </Card>
    );
};

export default HookCounter;
