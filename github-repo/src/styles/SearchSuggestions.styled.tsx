import styled from "styled-components";

export const StyledSearchSuggestions = styled.div`
  display: flex;

  .search-suggestion {
    background-color: #f3f3f3;
    color: black;
    padding: 3px;
    padding-left: 10px;
    &:hover {
      background-color: #9b9999;
      color: white;
    }
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .search-suggestions-map {
    border-radius: 0 0 0rem 2rem;
    z-index: 5;
    position: relative;
    top: 30px;
    overflow: auto;
    display: flex;
    max-height: 200px;
    width: 274px;
    flex-direction: column;
  }
`;
