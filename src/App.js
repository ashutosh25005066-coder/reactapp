import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>Explore our amazing features</p>
      </header>
      <div className="cards-container">
        <Card 
          icon="🚀" 
          title="Fast" 
          description="Lightning-fast performance and instant loading times."
        />
        <Card 
          icon="🎨" 
          title="Beautiful" 
          description="Stunning design with smooth animations and transitions."
        />
        <Card 
          icon="💪" 
          title="Powerful" 
          description="Feature-rich functionality to build amazing applications."
        />
      </div>
    </div>
  );
}

export default App;
