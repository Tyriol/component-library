import "./App.css";
import Section from "./components/Section/Section";
import Badge from "./components/Badge/Badge";

function App() {
  return (
    <>
      <header>
        <h1>Component Library</h1>
      </header>
      <main>
        <Section title="Badges">
          <Badge />
        </Section>
      </main>
    </>
  );
}

export default App;
