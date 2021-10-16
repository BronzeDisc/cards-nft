import React, { useRef, useContext } from "react";
import styled from "styled-components";
import Card from "../Components/Card";
import { AuthContext } from "../providers/context";

export const Container = styled.div`
  height: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Market = () => {
  const { nft, setNft, marketCards, setMarketCards, myInfos, setMyInfos } =
    useContext(AuthContext);

  // console.log(marketCards);

  return (
    <Container>
      {marketCards.map((item, key) => {
        return (
          <div key={key}>
            <Card card={item}></Card>
          </div>
        );
      })}
    </Container>
  );
};

export default Market;
