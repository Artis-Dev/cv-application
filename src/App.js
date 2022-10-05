import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex h-screen flex-col bg-slate-100">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
