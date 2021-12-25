import React, {useState} from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import Graph from "../model/Graph";


const parseGraph = (graphTextInput, graphEditsTextInput) => {
    let graphInput = graphTextInput.split(/[^(0-9)+]/).filter(x => x).map(x => parseInt(x, 10))
    let graphEditInput = graphEditsTextInput.split(/[^(0-9)+]/).filter(x => x).map(x => parseInt(x, 10))

    if (graphInput.length === 0) {
        return new Graph(0)
    }
    let numberOfVertices = graphInput[0]
    let graph = new Graph(numberOfVertices)
    let weightIndex = 1
    for (let i = 0; i < numberOfVertices; i++) {
        for (let j = i+1; j < numberOfVertices; j++) {
            weightIndex += 3
            let weight = graphInput[weightIndex];
            graph.edges[i][j] = weight
            graph.edges[j][i] = weight
        }
    }

    for (let i = 0; i < graphEditInput.length; i += 2) {
        graph.editEdge(graphEditInput[i], graphEditInput[i + 1])
    }

    return graph
}

const GraphInput = ({open, setGraph, handleClose}) => {

    let [graphTextInput, setGraphTextInput] = useState('')
    let [graphEditsTextInput, setGraphEditsTextInput] = useState('')

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Graph Input</DialogTitle>
            <DialogContent>
                <TextField
                    multiline
                    value={graphTextInput}
                    onChange={e => setGraphTextInput(e.target.value)}
                />
                <TextField
                    multiline
                    value={graphEditsTextInput}
                    onChange={e => setGraphEditsTextInput(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={() => setGraph(parseGraph(graphTextInput, graphEditsTextInput))}>Submit</Button>
            </DialogActions>
        </Dialog>
    )
}

export default GraphInput