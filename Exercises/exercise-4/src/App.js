import './App.css';
import "./components/Movie.js";
import GenreList from "./components/GenreList";

const thrillers = [
    {
        title: "Psycho",
        director: "Alfred Hitchcock",
        year: "1960",
    },
    {
        title: "Silence of the Lambs",
        director: "Jonathan Demme",
        year: "1991",
    },
    {
        title: "Eyes Wide Shut",
        director: "Stanley Kubrick",
        year: "1999",
    },
];

const scifi = [
    {
        title: "Metropolis",
        director: "Fritz Lang",
        year: "1927",
    },
    {
        title: "2001: A Space Odyssey",
        director: "Stanley Kubrick",
        year: "1968",
    },
    {
        title: "Robocop",
        director: "Paul Verhoeven",
        year: "1987",
    },
];

const comedy = [
    {
        title: "Free Guy",
        director: "Shawn Levy",
        year: "2021",
    },
    {
        title: "The Internship",
        director: "Shawn Levy",
        year: "2013",
    },
    {
        title: "Ted",
        director: "Seth MacFarlane",
        year: "2012",
    },
];

function App() {
  return (
    <div className="App">
      <GenreList title="Thrillers" movies={thrillers}/>
      <GenreList title="Sci-fi" movies={scifi}/>
      <GenreList title="Comedy" movies={comedy}/>
    </div>
  );
}

export default App;
