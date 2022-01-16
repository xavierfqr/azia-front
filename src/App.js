import './App.css';
import FormSection from './components/FormSection';
import UploadSection from './components/UploadSection';

function App() {
  return (
    <div className="App">
      <section>
        <FormSection/>
      </section>
      <section>
        <UploadSection/>
      </section>
    </div>
  );
}

export default App;
