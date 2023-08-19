import React from "react";
import {
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import PageWrapper from "../PageWrapper/PageWrapper";
import { useBillingStyles } from "./BillingStyles";
import { currentPlan, mockPaymentsHistory } from '../../utils/mockBilling/mockData';

const BillingPage = () => {
  const classes = useBillingStyles();

  return (
    <PageWrapper title="Биллинг и платежи">
      <div className={classes.container}>
        <section className={classes.section}>
          <Typography variant="h6">Текущий тарифный план: {currentPlan}</Typography>
          <Button variant="outlined" color="default" className={classes.button}>
            Обновить тарифный план
          </Button>
        </section>

        <section className={classes.section}>
          <Typography variant="h6">История платежей</Typography>
          <Paper className={classes.paper}>
            <List>
              {mockPaymentsHistory.map((payment) => (
                <ListItem key={payment.id}>
                  <ListItemText primary={`${payment.date}: ${payment.amount}`} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </section>

        <section className={classes.section}>
          <Button variant="outlined" color="default" className={classes.button}>
            Обновить платежную информацию
          </Button>
        </section>
      </div>
    </PageWrapper>
  );
};

export default BillingPage;
