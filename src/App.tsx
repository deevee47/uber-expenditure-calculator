import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  
  const AlertPopup = async () => {
    let [tab] = await chrome.tabs.query({active:true});
    chrome.scripting.executeScript({
      target: {tabId: tab.id! },
      func: () => {
        fetch("https://jsonplaceholder.typicode.com/todos/").then((response) => response).then((e) => e.json()).then((e) => console.log(e));
      }
    })
  };

//Works in context of page
  const bgChange = async () => {
    let [tab] = await chrome.tabs.query({active:true});
    chrome.scripting.executeScript({
      target: {tabId:tab.id!},
      func: () => {
        document.body.style.backgroundColor = "red";
      }
    })
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={AlertPopup}>
          Click me
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div  className='bgchange'>
          <button onClick={bgChange}>
            BG  Change from here
          </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
