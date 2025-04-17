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
          <div>
            <h3>Example:</h3>
            <p>{`<Badge title="red" variant="rounded" colour="red" />`}</p>
            <p>No variant or colour will default to "rounded" "gray"</p>
          </div>
          <SectionRow rowTitle="Rounded">
            <Badge title="gray" variant="rounded" colour="gray" />
            <Badge title="red" variant="rounded" colour="red" />
            <Badge title="yellow" variant="rounded" colour="yellow" />
            <Badge title="green" variant="rounded" colour="green" />
            <Badge title="blue" variant="rounded" colour="blue" />
            <Badge title="indigo" variant="rounded" colour="indigo" />
            <Badge title="purple" variant="rounded" colour="purple" />
            <Badge title="pink" variant="rounded" colour="pink" />
          </SectionRow>
          <SectionRow rowTitle="Square">
            <Badge title="gray" variant="square" colour="gray" />
            <Badge title="red" variant="square" colour="red" />
            <Badge title="yellow" variant="square" colour="yellow" />
            <Badge title="green" variant="square" colour="green" />
            <Badge title="blue" variant="square" colour="blue" />
            <Badge title="indigo" variant="square" colour="indigo" />
            <Badge title="purple" variant="square" colour="purple" />
            <Badge title="pink" variant="square" colour="pink" />
          </SectionRow>
        </Section>
      </main>
    </>
  );
}

export default App;
