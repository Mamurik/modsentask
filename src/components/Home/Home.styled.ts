import styled from 'styled-components';

export const HomeWrapper = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const HomeMusicImage = styled.img`
  width: 100%;
  height: 16em;
  object-fit: cover;
  margin: 0;

  @media (max-width: 768px) {
    height: 14em;
  }

  @media (max-width: 390px) {
    height: 12em;
    border-radius: 8px;
  }
`;

export const InputWrapper = styled.div`
  padding: 0 32px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }

  @media (max-width: 390px) {
    padding: 0 16px;
    margin-bottom: 16px;
  }
`;

export const ResultText = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #121212;
  padding: 25px 32px 0;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 22px;
    padding: 20px 24px 0;
    margin-top: 25px;
  }

  @media (max-width: 390px) {
    font-size: 20px;
    padding: 16px 16px 0;
    margin-top: 20px;
  }
`;

export const MusicPlayerWrapper = styled.div`
  position: absolute;
  top: 70%;
  right: 60px;
  width: 500px;
  transform: translateY(-50%);

  @media (max-width: 1200px) {
    width: 450px;
    right: 50px;
  }

  @media (max-width: 1024px) {
    width: 400px;
    right: 40px;
  }

  @media (max-width: 900px) {
    width: 350px;
    right: 35px;
  }

  @media (max-width: 768px) {
    width: 320px;
    right: 30px;
  }

  @media (max-width: 640px) {
    width: 280px;
    right: 25px;
  }

  @media (max-width: 540px) {
    width: 240px;
    right: 20px;
  }

  @media (max-width: 480px) {
    width: 220px;
    right: 15px;
  }

  @media (max-width: 390px) {
    width: calc(100% - 32px);
    right: 16px;
    left: 16px;
    top: auto;
    bottom: 16px;
    transform: none;
  }
`;

export const ImagePlayerWrapper = styled.div`
  position: relative;
  margin: 20px 32px;
  min-height: 16em;

  @media (max-width: 768px) {
    margin: 20px 24px 0;
    min-height: 14em;
  }

  @media (max-width: 390px) {
    margin: 16px 0px 0;
    min-height: 12em;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const SelectGroup = styled.div`
  display: flex;
  position: absolute;
  top: 15px;
  right: 40px;
  text-align: center;
  margin-bottom: 10px;
`;

export const SelectTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #252729;
  margin-top: 20px;
`;
