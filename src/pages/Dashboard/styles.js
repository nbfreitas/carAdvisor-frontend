import styled from "styled-components";

export const Container = styled.div`
  /* max-width: 600px; */
  /* margin: 50px auto; */

  display: flex;
  flex-direction: column;

  background: #eff1f3;
  height: 780px;
  /* border-radius: 10px; */
  -webkit-box-shadow: 0px 1px 5px 2px rgba(220, 220, 220, 1) inset;
  -moz-box-shadow: 0px 1px 5px 2px rgba(220, 220, 220, 1) inset;
  box-shadow: 0px 1px 5px 2px rgba(220, 220, 220, 1) inset;

  header {
    display: flex;
    align-self: center;
    align-items: center;
    margin-top: 50px;

    button {
      border: 0;
      background: none;
    }

    strong {
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: 400px 400px;
    grid-gap: 5px;
    margin-top: 30px;
    margin-left: 300px;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  /* background: #708090; */

  opacity: ${props => (props.past ? 0.6 : 1)};
  background: ${props => (props.available ? "#708090" : "#3b9eff")};

  strong {
    display: block;
    color: ${props => (props.available ? "#fff" : "#fff")};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? "#fff" : "#fff")};
  }
`;
