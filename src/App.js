import "./App.css";
import AddSubtractCounter from "./Components/AddSubtractCounter/AddSubtractCounter";
import DisplayCounter from "./Components/DisplayCounter/DisplayCounter";
import IncrementDecrementCounter from "./Components/IncrementDecrementCounter/IncrementDecrementCounter";

function App() {
    return (
        <div className="App">
            <DisplayCounter />
            <IncrementDecrementCounter />
            <AddSubtractCounter />
        </div>
    );
}

export default App;
