export const SearchForm = ({ onHandleSubmit }) => {
  const onSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.query;

    if (!value) {
      alert('Enter some query, pls!');
      return;
    }
    onHandleSubmit(value);
    event.target.reset();
  };
  return (
    <form onSubmit={onSubmit}>
      <input name="query" />
      <button type="submit">Search</button>
    </form>
  );
};
