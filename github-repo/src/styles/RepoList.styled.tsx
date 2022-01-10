import styled from "styled-components";

export const StyledRepoList = styled.div`
  .link {
    font-size: 8px;
  }

  .repository {
    background: linear-gradient(#402e6b, #914594);
    color: white;
    width: 300px;
    height: 50px;
    margin-top: 10px;
    border-radius: 15px;
    font-size: 15px;
    text-align: center;
    padding: 5px;
    transition: background-color 0.5s ease;
    &:hover {
      background: linear-gradient(#9d8cc5, #eebcf0);
    }
  }
`;
