import { FC} from "react";


type Props = {
    target: string
};

const HelloComponent : FC<Props> = ({ target }) => (
    <h1>Hello, { target }!</h1>
    );

export default HelloComponent;