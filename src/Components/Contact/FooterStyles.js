import styled from "styled-components";

export const Box = styled.div`
  padding: 60px 60px;
  background: #d69ec2;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 10px 10px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  margin: 30px auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 5px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #220720;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;
  display: inline-block;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Images = styled.div`
  display: flex;
`;

export const Heading = styled.p`
  font-size: 22px;
  color: #220720;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid 1px black;
  color: black;
  padding-top: 15px;
`;
