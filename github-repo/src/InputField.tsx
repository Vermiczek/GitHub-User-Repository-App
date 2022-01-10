import React from "react";
import { useState, useEffect } from "react";
import { StyledInput } from "./styles/InputField.styled";
import { SearchSuggestions } from "./SearchSuggestions";
import { useSearchUpdateContext } from "./ContextProvider";

//Component responsible for processing the input data from user.
export const InputField: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const setSearch = useSearchUpdateContext();

  useEffect(() => {
    setSearch(searchTerm);
  }, [searchTerm]);

  return (
    <StyledInput>
      <input
        type="text"
        //value={copy}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        required
      />
      <span className="placeholder">Username</span>
      <div className="suggestions">
        <SearchSuggestions />
      </div>
    </StyledInput>
  );
};

export default InputField;
