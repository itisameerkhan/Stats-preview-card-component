import './App.css';
import '../images/image-header-desktop.jpg'

const App = () => {
  return (
    <div className="app-container">
       <div className="app-left">
          <h1>Get <span>insights</span> that help your business grow.</h1>
          <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
          <div className="app-left-inner">
            <div className="div-element">
              <h1>10k+</h1>
              <p>COMPANIES</p>
            </div>
            <div className="div-element">
              <h1>314</h1>
              <p>TEMPLATES</p>
            </div>
            <div className="div-element">
              <h1>12M+</h1>
              <p>QUERIES</p>
            </div>
          </div>
       </div>
       <div className="app-right">
        <div className="overlay"></div>
       </div>
    </div>
  )
}

export default App;