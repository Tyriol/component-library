import "./App.css";
import Section from "./components/Section/Section";
import SectionRow from "./components/SectionRow/SectionRow";
import Badge from "./components/Badge/Badge";

function App() {
  return (
    <>
      <header>
        <h1>Component Library</h1>
      </header>
      <main>
        <Section title="Badges">
          <SectionRow rowTitle="Square">
            <Badge />
          </SectionRow>
        </Section>
      </main>
    </>
  );
}

export default App;
