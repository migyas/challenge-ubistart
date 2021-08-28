import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;
const Content = styled.div`
  /* max-width: 36rem; */
  display: flex;
  justify-content: center;
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
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 1.4rem;
    margin-bottom: 1.4rem;
  }
`;

const InputContainer = styled.form`
  width: 26rem;
  height: 4rem;
  border: 1px solid #bdbdbd;
  border-radius: 25px;
  margin-top: 1.8rem;
  /* margin-top: 3.4rem; */
  margin-bottom: 1.8rem;
  position: relative;

  input {
    position: absolute;
    top: 0.9rem;
    left: 1rem;
    width: 90%;
    height: 2rem;
    border: none;
    font-size: 1.4rem;
  }
`;

const Divider = styled.div`
  width: 26rem;
  height: 1px;
  background: #c4c4c4;
`;

export { Container, Content, Logo, InputContainer, Featured, Divider };
