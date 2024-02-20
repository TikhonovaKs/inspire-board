import { FieldValues, useForm }  from 'react-hook-form';
import useSearch from '../../providers/SearchProvider/SearchProvider.hook';
import './Search.css';

type FormData = {
  keyword: string
}

const Search = () => {
  const { setKeyWord } = useSearch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit = (data: FieldValues) => {
    setKeyWord(data.keyword);
  };

  return (
    <form
      className="search"
      onSubmit={handleSubmit(onSubmit)}
      name="searchform"
      noValidate
    >
      <input
        type="text"
        placeholder="Press to search..."
        className="search__input"
        {...register("keyword", {
          required: {
            value: true,
            message: "Please enter a keyword",
          },
          minLength: {
            value: 1,
            message: "Minimum length is 1",
          },
          maxLength: {
            value: 20,
            message: "Maximum length is 20",
          },
          pattern: {
            value: /^[a-zA-Z\s-]+$/,
            message: "Please enter a valid keword",
          },
        })}
      ></input>
      <div className="search__error">
        {errors?.keyword && (
          <div className="search__error">{errors.keyword.message}</div>
        )}
      </div>
      <button
        type="submit"
        className="search__button search__button_disabled"
        aria-label="Send"
        disabled={!isValid}
      ></button>
    </form>
  );
}

export default Search;
