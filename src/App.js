// import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {

  function receiveHeaderClick(todoText) {
    console.log("Now we're in the parent component!");
    console.log(todoText);
    // AJAX call in parent component
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header randomnumber="13"
          text="Hello World! React is fun :)"
          receiveHeaderClick={receiveHeaderClick}
        >
        </Header>

        {/* <Todo handleDelete={handleDelete}
          handleComplete={handleComplete}
          id={some - id - value}
          text={some - text - value}
        /> */}

      </header>
    </div>
  );
}

export default App;
