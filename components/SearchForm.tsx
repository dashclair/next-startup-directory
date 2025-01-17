import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import Search from "../assets/search.svg";
import Image from "next/image";

const SearchForm = ({ query }: { query: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        placeholder="Search Startups"
        className="search-input"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          <Image src={Search} alt="search" className="color-white" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
