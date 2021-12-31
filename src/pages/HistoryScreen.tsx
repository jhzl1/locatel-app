import React from "react";
import HistoryItem from "../components/HistoryItem";
import PageContainer from "../components/ui/PageContainer";

const HistoryScreen = () => {
  return (
    <PageContainer titlePage="Movimientos" buttomBack>
      <HistoryItem amount={12} />
      <HistoryItem amount={15} />
      <HistoryItem amount={9} />
      <HistoryItem amount={2} />
      <HistoryItem amount={3} />
      <HistoryItem amount={7} />
    </PageContainer>
  );
};

export default HistoryScreen;
