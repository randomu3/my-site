import React, { useState } from "react";
import {
  Container,
  Typography,
  Switch,
  FormControlLabel,
  Paper
} from "@material-ui/core";
import PageWrapper from "../PageWrapper/PageWrapper";
import { useStyles } from "./NotificationStyles";
import { mockNotifications } from "../../utils/mockNotification/mockData";

const NotificationPage = () => {
  const classes = useStyles();
  const [botNotifications, setBotNotifications] = useState(true);
  const [accountNotifications, setAccountNotifications] = useState(true);

  return (
    <PageWrapper title="Уведомления">
      <Container className={classes.container} maxWidth="md">
        <section className={classes.section}>
          <Typography variant="h6" className={classes.headerTitle}>Последние уведомления</Typography>
          {mockNotifications.map((notification) => (
            <Paper key={notification.id} className={classes.card}>
              <Typography>{notification.content}</Typography>
            </Paper>
          ))}
        </section>

        <section className={classes.section}>
          <Typography variant="h6" className={classes.headerTitle}>Настройки уведомлений</Typography>
          <FormControlLabel
            className={classes.input}
            control={
              <Switch
                checked={botNotifications}
                onChange={() => setBotNotifications(!botNotifications)}
              />
            }
            label="Уведомления о ботах"
          />
          <FormControlLabel
            className={classes.input}
            control={
              <Switch
                checked={accountNotifications}
                onChange={() => setAccountNotifications(!accountNotifications)}
              />
            }
            label="Уведомления о аккаунте"
          />
        </section>
      </Container>
    </PageWrapper>
  );
};

export default NotificationPage;

