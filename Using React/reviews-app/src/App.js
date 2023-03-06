import './App.css';
import Reviews from './Components/Reviews'

function App() {
  return (
    <div className="App">
      <main>
        <section className="container">
          <div className='title'>
            <h1 className='heading'>Our Reviews</h1>
            <div className='underline'></div>
          </div>
          <Reviews/>
        </section>
      </main>
    </div>
  );
}

export default App;
