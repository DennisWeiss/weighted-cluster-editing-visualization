import './App.css'
import GraphInput from './components/GraphInput'
import GraphVis from 'react-graph-vis'
import {useState} from "react";
import {Button} from "@mui/material";
import Graph from "./model/Graph";

const App = () => {

  let [graphInputOpen, setGraphInputOpen] = useState(false)
  let [graph, setGraph] = useState(new Graph(0))

  return (
    <div className="App">
      <GraphInput open={graphInputOpen} setGraph={setGraph} handleClose={() => setGraphInputOpen(false)}/>
      <Button onClick={() => setGraphInputOpen(true)}>Input New Graph</Button>
      <GraphVis
        graph={graph.getVisRepresentation()}
      />
    </div>
  )
}

export default App
