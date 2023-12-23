import Content from "./components/Content";
import Header from "./components/Header";
import "./styles/app.css";
function App() {
  return(
    <div className="app">
      <div className="app-background">
        <Header/>
        <Content/>
      </div>
    </div>
  )
}

export default App;
