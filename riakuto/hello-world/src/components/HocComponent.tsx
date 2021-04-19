import { FC, Component, ReactElement } from "react";

type InjectedProps = {
    count: number,
    reset: () => void;
    increment: () => void;
};

type Props = {
    max: number
};

type State = {
    count: number
}

//
// こちら側でCounterComponentに対してpropsを通してロジックや状態を注入している
//
const withCounter = (WrappedComponent: FC <Props & Partial<InjectedProps>>) => 
    class EnhancedComponent extends Component<Props, State> {
        constructor(props: Props){
            super(props);
            this.state = { count: 0 }
        }

        reset = (): void => this.setState({ count: 0 });

        increment = (): void => this.setState((state) => ({ count: state.count + 1 }));
        
        componentDidUpdate = () : void => {
            if(this.state.count > this.props.max) this.reset();
        };

        render = () : ReactElement => (
            <WrappedComponent 
                max = { this.props.max }
                count = { this.state.count }
                reset = { this.reset }
                increment = { this.increment }
            />
        );
    };

//
// 状態やロジックを持たない表示のみに関心を持つコンポーネント（presentatial Component）
//
//
const CounterComponent : FC<Props & Partial<InjectedProps>> = ({
    max,
    count = 0,
    reset = () => undefined,
    increment = () => undefined
}) => (
    <div>
        <div>
            { count } / { max }
        </div>
        <button onClick={ reset } type="button">
            Reset
        </button>
        <button onClick={ increment } type="button">
            +1
        </button>
    </div>
);

    export default withCounter(CounterComponent);