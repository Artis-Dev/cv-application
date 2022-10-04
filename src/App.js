import React from 'react';

import Header from './components/Header';

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

    return (
      <div>
        <Header />
        <p className="text-center">{cv.name}</p>
      </div>
    );
  }
}

export default App;
