import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cv: {
        name: 'Hello World',
      },
    };
  }

  render() {
    const { cv } = this.state;

    return <p className="text-center">{cv.name}</p>;
  }
}

export default App;
