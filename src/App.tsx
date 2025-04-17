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
          <SectionRow rowTitle="Rounded">
            <Badge variant="rounded" />
            <Badge variant="rounded" colour="red" />
            <Badge variant="rounded" colour="yellow" />
            <Badge variant="rounded" colour="green" />
            <Badge variant="rounded" colour="blue" />
            <Badge variant="rounded" colour="indigo" />
            <Badge variant="rounded" colour="purple" />
            <Badge variant="rounded" colour="pink" />
          </SectionRow>
          <SectionRow rowTitle="Square">
            <Badge variant="square" />
            <Badge variant="square" colour="red" />
            <Badge variant="square" colour="yellow" />
            <Badge variant="square" colour="green" />
            <Badge variant="square" colour="blue" />
            <Badge variant="square" colour="indigo" />
            <Badge variant="square" colour="purple" />
            <Badge variant="square" colour="pink" />
          </SectionRow>
        </Section>
      </main>
    </>
  );
}

export default App;
