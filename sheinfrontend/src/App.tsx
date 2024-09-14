import React from "react";
import './App.css';
import Login from "./components/Login";

const App: React.FC = () => {
    return (
        <div className="App">
          <Login /> {/* Renderiza el componente Login */}
        </div>
    );
};

export default App;
