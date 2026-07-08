import React from "react";
import "./NeuralNetwork.css";

const nodes = [
  { id: 1, x: 40, y: 40 },
  { id: 2, x: 40, y: 120 },
  { id: 3, x: 40, y: 200 },

  { id: 4, x: 180, y: 20 },
  { id: 5, x: 180, y: 80 },
  { id: 6, x: 180, y: 160 },
  { id: 7, x: 180, y: 240 },

  { id: 8, x: 330, y: 70 },
  { id: 9, x: 330, y: 170 },
];

const connections = [
  [1,4],[1,5],[1,6],
  [2,4],[2,5],[2,6],[2,7],
  [3,5],[3,6],[3,7],

  [4,8],[4,9],
  [5,8],[5,9],
  [6,8],[6,9],
  [7,8],[7,9],
];

function getNode(id){
  return nodes.find(n=>n.id===id);
}

function NeuralNetwork(){

  return(

    <div className="network-container">

      <svg
        width="380"
        height="280"
        viewBox="0 0 380 280"
      >

        {connections.map((line,index)=>{

          const from=getNode(line[0]);
          const to=getNode(line[1]);

          return(

            <line
              key={index}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              className="network-line"
              style={{animationDelay:`${index*0.08}s`}}
            />

          )

        })}

        {nodes.map((node,index)=>(

          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r="9"
            className="network-node"
            style={{animationDelay:`${index*0.15}s`}}
          />

        ))}

      </svg>

      <h3>Artificial Neural Network</h3>

      <p>Learning • Predicting • Optimizing</p>

    </div>

  )

}

export default NeuralNetwork;