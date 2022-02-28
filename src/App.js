import "./App.css";
import DisplayCounter from "./Components/DisplayCounter/DisplayCounter";
import IncrementDecrementCounter from "./Components/IncrementDecrementCounter/IncrementDecrementCounter";

function App() {
    return (
        <div className="App">
            <DisplayCounter />
            <IncrementDecrementCounter />
        </div>
    );
}

export default App;
