function Options() {
  const handleForm = (ev) => {
    ev.preventDefault;
  };

  const handleChangeForm = () => {};
  return (
    <form onSubmit={handleForm} onChange={handleChangeForm}>
      <label className='title' for='word'>
        Escribe aquí la palabra que hay que adivinar:
      </label>
      <input
        autofocus
        autocomplete='off'
        class='form__input'
        maxlength='15'
        type='text'
        id='word'
        name='word'
      />
    </form>
  );
}

export default Options;
