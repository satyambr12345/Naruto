import './App.css';

function App() {
  const title="Welcome to Naruto's Blogs";
  const likes=50;
  const link="https://google.com"
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <h3>Liked {likes} times</h3>
        <p>{10}</p>
        <p>{"Satyam"}</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
