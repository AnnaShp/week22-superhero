import "./App.css";
import SuperHero from "./components/Superhero";
import SuperHeroes from "./components/Data.json";

function App() {
  return (
    <div className="App">
      {SuperHeroes.map((hero) => (
        <SuperHero
          name={hero.name}
          universe={hero.universe}
          alterego={hero.alterego}
          occupation={hero.occupation}
          friends={hero.friends}
          superpowers={hero.superpowers}
          url={hero.url}
          info={hero.info}
        />
      ))}
    </div>
  );
}

export default App;
