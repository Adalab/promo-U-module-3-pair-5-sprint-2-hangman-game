function Form({ word,lastLetter,handleLastLetter }) {
  const handleKeyDown = (ev) => {
    // Sabrías decir para qué es esta línea
    ev.target.setSelectionRange(0, 1);
  };

  const handleChange = (ev) => {
    let re = /^[a-zA-ZñÑá-úÁ-Ú´]$/; //add regular pattern
    if (re.test(ev.target.value) || ev.target.value === '') {
      handleLastLetter(ev.target.value);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='title' htmlFor='last-letter'>
        Escribe una letra:
      </label>
      <input
        autoFocus
        autoComplete='off'
        className='form__input'
        maxLength='1'
        type='text'
        name='last-letter'
        id='last-letter'
        value={lastLetter}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      
    </form>
  );
}

export default Form;
