import "./App.css";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <div className="container">
      <h1 style={{ marginBottom: '1rem' }}>QRCode Generator</h1>
      <Form />
    </div>
  );
};

export default App;
