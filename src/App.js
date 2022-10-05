import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
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
      <div className="flex h-screen flex-col bg-slate-100">
        <Header />
        <Main cv={cv} />
        <Footer />
      </div>
    );
  }
}

export default App;
