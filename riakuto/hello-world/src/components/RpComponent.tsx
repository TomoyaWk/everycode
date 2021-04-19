import React, { Component, FC, ReactElement } from "react";

type ChildProps = {
    count: number,
    reset: () => void,
    increment: () => void,
};

type Props = {
    max: number, 
    children: (props: ChildProps) => ReactElement
};

type State = { count: number };

class CounterProvider extends Component <Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = { count: 0 }
    }

    reset = (): void  => this.setState({ count: 0 });
    increment = (): void => this.setState((state) => ({ count: state.count + 1 }));
    
    componentDidUpdate = (): void => {
        if(this.state.count > this.props.max) this.reset();
    };

    render = (): ReactElement =>
        this.props.children({
            count: this.state.count,
            reset: this.reset,
            increment: this.increment
        });
}

const Counter: FC<{ max: number }> = ({ max }) => (
    <CounterProvider max={ max }>
    {({ count, reset, increment }) => (
        <div>
            <div>
                { count } / { max }
            </div>
            <button onClick={ reset } type="button"> Reset </button>
            <button onClick={ increment } type="button"> +1 </button>
        </div>
    )}
    </CounterProvider>
);

export default Counter;

