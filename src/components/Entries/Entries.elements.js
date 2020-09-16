import styled from "styled-components";
import { FaWikipediaW } from "react-icons/fa";
import { Container } from "../../globalStyles";

export const EntriesContainer = styled(Container)`
  margin-top: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.article`
  padding: 15px 15px;
  max-width: 30%;
  min-width: 400px;
`;

export const CardHeader = styled.div`
  padding: 15px;
  text-align: center;
  letter-spacing: 1.2px;
  background-color: #fff;
  border-left: solid 5px #7f0de9;
  border-right: solid 5px #22e6cc;
  border-top-left-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardBody = styled.div`
  letter-spacing: 1px;
  background-color: #fff;
  padding: 10px 15px 30px 15px;
  border-left: solid 5px #ccc;
  border-right: solid 5px #e64922;
  border-bottom-right-radius: 25px;
`;

export const EntryTitle = styled.h3`
  font-size: 1.6rem;
  line-height: 1.2;
  margin-left: 10px;
  margin-top: 2px;
  font-weight: 400;
`;

export const EntryLink = styled.a`
  text-decoration: none;
  color: #007bff;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

export const EntryText = styled.p`
  & > span {
    padding: 5px;
    background-color: #f1fdb9;
  }
`;

export const CardHeaderWikiIcon = styled(FaWikipediaW)`
  color: #747474;
  font-size: 34px;
  align-self: baseline;
`;
