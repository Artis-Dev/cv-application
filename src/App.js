import Header from './components/Header';
import Builder from './components/Builder';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <Builder />
      <Footer />
    </div>
  );
}

export default App;
