class Graph {
    numberOfVertices;
    edges;

    constructor(numberOfVertices) {
        this.numberOfVertices = numberOfVertices
        this.edges = []
        for (let i = 0; i < numberOfVertices; i++) {
            let lst = []
            for (let j = 0; j < numberOfVertices; j++) {
                lst.push(0)
            }
            this.edges.push(lst)
        }
    }

    editEdge(i, j) {
        this.edges[i][j] *= -1
        this.edges[j][i] *= -1
    }

    getVisRepresentation() {
        let nodes = []
        for (let i = 0; i < this.numberOfVertices; i++) {
            nodes.push({id: i, label: (i+1).toString()})
        }
        let edges = []
        let maxWeight = this.getMaxWeight()
        for (let i = 0; i < this.numberOfVertices; i++) {
            for (let j = i+1; j < this.numberOfVertices; j++) {
                if (this.edges[i][j] >= 0) {
                    edges.push({from: i, to: j, width: 10 * this.edges[i][j] / maxWeight})
                }
            }
        }
        return {nodes, edges, options: {height: '700px'}}
    }

    getMaxWeight() {
        let maxWeight = Number.MIN_VALUE
        for (let i = 0; i < this.numberOfVertices; i++) {
            for (let j = i+1; j < this.numberOfVertices; j++) {
                maxWeight = Math.max(maxWeight, this.edges[i][j])
            }
        }
        return maxWeight
    }


}



export default Graph