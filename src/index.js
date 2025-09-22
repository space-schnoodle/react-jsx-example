// 1) Import the React and ReactDOM libraries
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  // Exaple 1
  // const date = new Date();
  // const time = date.toLocaleTimeString();
  //return <h1>{new Date().toLocaleTimeString()}</h1>;

  return <input type="number" min={5} max={10} />
}

// 5) Show the component on the screen
root.render(<App />);
