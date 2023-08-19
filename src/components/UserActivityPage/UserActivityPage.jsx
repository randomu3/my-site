import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useUserActivityStyles } from "./UserActivityPageStyles";
import PageWrapper from "../PageWrapper/PageWrapper";
import { mockUserActivity } from "../../utils/mockUserActivity/mockData";

const UserActivityPage = () => {
  const classes = useUserActivityStyles();

  return (
    <PageWrapper title="Активность пользователя">
      <Container className={classes.container} maxWidth="lg">
        <div className={classes.header}>
          <Typography variant="h5">
            Последние действия пользователя с ботами
          </Typography>
        </div>
        <List className={classes.activityList}>
          {mockUserActivity.map((activity, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={activity.action}
                secondary={activity.date}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </PageWrapper>
  );
};

export default UserActivityPage;
