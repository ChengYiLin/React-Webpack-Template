import { FC } from "react";
import ReactDOM from "react-dom/client";

const App: FC = () => {
    return <div>Hello React 18</div>;
};

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
