import styled from "styled-components";

type Props = {
  avatar: string;
};

export const StyledUserInfo = styled.div<Props>`
  border: 30px;
  background: linear-gradient(
    rgba(210, 100, 101, 0.7),
    rgba(145, 152, 229, 0.7)
  );
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 14rem);
  grid-template-rows: repeat(2, 6rem);
  border-radius: 15px;
  width: 300px;
  height: 125px;

  .data {
    display: flex;
    flex-direction: column;
  }

  .avatar {
    position: relative;
    border-radius: 15px;
    top: 15%;
    left: 5%;
    height: 100px;
    width: 100px;
    background-image: url(${(props) => props.avatar});
    background-size: cover;
  }

  .text,
  .textUrl {
    position: relative;
    top: 15%;
  }

  .textUrl {
    font-size: 8px;
  }

  .name {
    background-color: #f7797d;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: white;
    border-radius: 10px;
    position: relative;
    height: 50px;
    width: 140px;
    left: -40%;
    top: 15px;

    &:hover {
      background-color: rgba(145, 152, 229, 1);
    }
  }
`;
