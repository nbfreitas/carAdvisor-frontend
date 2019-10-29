import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 0px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img#logo {
      margin-right: 20px;
      padding-right: 20px;
      height: 38px;
      border-right: 1px solid #eee;
    }

    /* img#schedule {
      height: 18px;
      margin-left: 35px;
      margin-right: 5px;
    } */

    a {
      margin-left: 10px;
      margin-right: 10px;
      font-size: 15px;
      color: rgba(0, 0, 0, 0.8);
      font-weight: bold;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  /* text-align: center; */

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
`;
