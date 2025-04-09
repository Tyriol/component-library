import "./App.css";
import Badge from "./components/Badge/Badge";

function App() {
  return (
    <>
      <header>
        <h1>Component Library</h1>
      </header>
      <main>
        <section className="badges">
          <h2>Badges</h2>
          <div className="badge-options">
            <Badge />
            <Badge size="sm" />
            <Badge size="lg" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
