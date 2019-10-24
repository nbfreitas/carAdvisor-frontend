import styled from "styled-components";

export const Container = styled.div`
  /* background: #fff; */
  background: #fff;
  padding: 0px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-left: 55px;
      padding-right: 20px;
      height: 40px;
      /* border-right: 1px solid #eee; */
    }

    a {
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
  margin-right: 20px;
  padding-left: 20px;
  /* border-left: 1px solid #eee; */
  text-align: center;

  div {
    text-align: right;
    justify-content: center;

    /* strong {
      display: block;
      color: #333;
    } */

    a {
      /* display: block; */
      margin-left: 30px;
      margin-right: 10px;
      font-size: 12px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.8);
    }

    img {
      float: right;
      width: 22px;
      height: 22px;
      margin-right: 50px;
      border-radius: 50%;
    }
  }
`;
