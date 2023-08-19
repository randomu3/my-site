import React from "react";
import { Container } from "@material-ui/core";
import { activityData, profitData } from "../../utils/mockStatistics/mockData";
import { useStyles } from "./StatisticsPageStyles";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import StatisticsInfo from "./components/StatisticsInfo/StatisticsInfo";
import ChartCard from "./components/ChartCard/ChartCard";
import PageWrapper from "../PageWrapper/PageWrapper";

const StatisticsPage = () => {
  const classes = useStyles();
  return (
    <PageWrapper title="Статистика">
      <Container className={classes.container}>
        <StatisticsInfo />
        <ChartCard
          title="Активность по месяцам"
          data={activityData}
          dataKeys={[
            { dataKey: "messages", stroke: "#8884d8" },
            { dataKey: "commands", stroke: "#82ca9d" },
          ]}
        />
        <ChartCard
          title="Прибыль по месяцам"
          data={profitData}
          dataKeys={[{ dataKey: "profit", stroke: "#f48fb1" }]}
        />
      </Container>
    </PageWrapper>
  );
};

export default StatisticsPage;
