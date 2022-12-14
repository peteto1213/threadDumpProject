import Title from "./components/Title/Title";
import Input from "./components/Input/Input";
import Summary from "./components/Summary/Summary";
import Daemon from "./components/Daemon/Daemon";
import { useState } from "react";

function App() {

  const [dump, setDump] = useState({
    total: 0,
    blocked: 0,
    waiting: 0,
    runnable: 0,
    timed: 0,
    daemon: 0,
    nonDaemon: 0,
    ignoredText: '',
    synchronizers: [],
  })

  const reset = () => {
    setDump({
      total: 0,
      blocked: 0,
      waiting: 0,
      runnable: 0,
      timed: 0,
      daemon: 0,
      nonDaemon: 0,
      ignoredText: '',
      synchronizers: [],
    })
  }

  return (
    <div className="App">
      <Title />
      <Input setDump={setDump} reset={reset} />
      <Summary dump={dump} />
      <Daemon dump={dump} />
    </div>
  );
}

export default App;
