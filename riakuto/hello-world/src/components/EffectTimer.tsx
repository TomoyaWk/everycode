import { FC, useEffect, useState, useMemo } from "react";
import { Button, Card, Icon, Statistic } from "semantic-ui-react";
import { getPrimes } from "../utill/math-tool";

type TimeProps = {
    limit: number
}

const EffectTimer: FC<TimeProps> = ({ limit }) => {
    const [ timeLeft, setTimeLeft ] = useState(limit);

    const primes = useMemo(() => getPrimes(limit), [limit]);
    const reset = (): void => setTimeLeft(limit);
    const tick = (): void => setTimeLeft(t => t - 1);

    
    useEffect(()=> {
        const timeId = setInterval(tick, 1000);

        return () => clearInterval(timeId);
    }, []);

    useEffect(() => {
        if(timeLeft === 0) setTimeLeft(limit);
    }, [timeLeft, limit]);

    return (
        <Card>
            <Statistic className="number-board">
                <Statistic.Label>time</Statistic.Label>
                <Statistic.Value className={ primes.includes(timeLeft) ? "prime-number" : undefined }>{ timeLeft }</Statistic.Value>
            </Statistic>
            <Card.Content>
                <Button color="red" fluid onClick={ reset }>
                    <Icon name="redo" />
                    RESET
                </Button>
            </Card.Content>
        </Card>
    );
};

export default EffectTimer;