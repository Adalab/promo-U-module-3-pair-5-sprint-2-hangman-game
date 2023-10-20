import { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from './Footer';
import Instructions from './Instructions';
import Options from './Options';

// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';
import '../styles/Dummy.scss';
import '../styles/Letters.scss';
import '../styles/Form.scss';
import '../styles/Header.scss';
import '../styles/Footer.scss';
import '../styles/instructions.scss';

function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events

  const title = 'Juego del ahorcado';
  const classCss = 'header__title';

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  const handleChangeForm = (ev) => {
    setWord(word);
  };

  return (
    <div className='page'>
      <Header title={title} classCss={classCss} />
      <main className='main'>
        <section>
          <SolutionLetters word={word} userLetters={userLetters} />
          <ErrorLetters word={word} userLetters={userLetters} />
          <Form
            word={word}
            lastLetter={lastLetter}
            handleLastLetter={handleLastLetter}
          />
        </section>
        <Dummy numberErrors={getNumberOfErrors()} />
      </main>
      <Routes>
        <Route path='/instructions' element={<Instructions />} />
        <Route path='/options' element={<Options />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
