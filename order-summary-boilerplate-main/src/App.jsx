import Hero from "./components/Hero";
import Buttons from "./components/Buttons";

function App() {
  return (
    <main>
      <Hero />
      <div className="main-content">
        <Buttons />
      </div>
    </main>
  );
}

export default App;
