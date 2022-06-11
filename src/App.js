import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import data from "./data.json";
function App() {
  return (
    <>
      <Header />
      {data.map((data) => (
        <Card
        key={data.id}
          id={data.id}
          company={data.company}
          logo={data.logo}
          newItem={data.new}
          featured={data.featured}
          position={data.position}
          role={data.role}
          level={data.level}
          postedAt={data.postedAt}
          location={data.location}
          contract={data.contract}
          languages={data.languages}
          tools={data.tools}
        />
      ))}
    </>
  );
}

export default App;
