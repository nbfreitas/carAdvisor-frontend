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

    img {
      margin-right: 20px;
      padding-right: 20px;
      /* height: 40px; */
      border-right: 1px solid #eee;
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
      /* margin-left: 30px;
      margin-right: 10px; */
      margin-top: 2px;
      font-size: 12px;
      /* font-weight: bold; */
      color: rgba(0, 0, 0, 0.8);
    }
  }
  img {
    /* float: right; */
    /* width: 22px; */
    height: 42px;
    /* margin-right: 50px; */
    border-radius: 50%;
  }
`;