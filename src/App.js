import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

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
      <div className="flex h-screen flex-col">
        <Header />
        <p className="grow py-4 text-center">{cv.name}</p>
        <Footer />
      </div>
    );
  }
}

export default App;
