import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const Content = styled.div`
  max-width: 1250px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 0 auto;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;

    h1 {
      font-family: 'Allison', cursive;
      font-size: 3.5rem;
    }
  }
`;

const Logo = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  margin-bottom: 1rem;
`;

const Featured = styled.main`
  max-width: 1400px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.4rem;
    margin-bottom: 1.4rem;
  }
`;

const InputContainer = styled.form`
  width: 28rem;
  height: 4rem;
  border: 1px solid #bdbdbd;
  border-radius: 25px;
  margin-top: 1.8rem;
  margin-bottom: 1.8rem;
  position: relative;
  background: #ffffff;

  img {
    position: absolute;
    top: 0.9rem;
    right: 0.9rem;
  }

  input {
    position: absolute;
    top: 0.9rem;
    left: 1rem;
    width: 85%;
    height: 2rem;
    border: none;
    background: transparent;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 390px) {
    max-width: 23rem;

    img {
      width: 20px;
    }
  }
`;

const Divider = styled.div`
  width: 26rem;
  height: 1px;
  background: #c4c4c4;
  margin-bottom: 3.4rem;

  @media screen and (max-width: 390px) {
    width: 20rem;

    img {
      width: 20px;
    }
  }
`;

const FeaturedList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;

  flex-wrap: wrap;
  margin: 0 auto;

  @media screen and (max-width: 1300px) {
    padding: 0 1rem;
  }
`;

export {
  Container,
  Content,
  Logo,
  InputContainer,
  Featured,
  Divider,
  FeaturedList,
};
