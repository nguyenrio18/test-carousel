import React from 'react';
import Carousel from './components/Carousel';
import './App.css'
import './styles/output.css'

const COLORS = [
  { color: "grey" },
  { color: "red" },
  { color: "blue" },
]

function App() {
  return (
    <div className="App">
      <div className="container-carousel p-3">
        <Carousel time={5000}>
          {
            COLORS.map((image, index) =>
              <div key={index} style={{
                width: 600,
                height: 300,
                backgroundColor: image.color,
              }}></div>)
          }
        </Carousel>
      </div>
    </div>
  );
}

export default App;
