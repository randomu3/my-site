import React from "react";
import {
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import PageWrapper from "../PageWrapper/PageWrapper";
import { useStyles } from "./NewsletterManagementStyles";
import { useNavigate } from "react-router-dom";
import { mockNewsletters } from "../../utils/mockLetterManagement/mockData";

const NewsletterManagement = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const goToNewsletterManagement = () => {
    navigate("/dashboard/"); // Updated path navigation
  };

  return (
    <PageWrapper title="Рассылка: Управление рассылками">
      <Container className={classes.container} maxWidth="lg">
        <Button onClick={goToNewsletterManagement} className={classes.backButton}>
          Назад
        </Button>

        <Typography variant="h6" className={classes.title}>
          Список текущих рассылок:
        </Typography>

        <List>
          {mockNewsletters.map((newsletter) => (
            <ListItem key={newsletter.id} button>
              <ListItemText
                primary={newsletter.name}
                secondary={newsletter.description}
              />
            </ListItem>
          ))}
        </List>

        <Button className={classes.createNewsletterButton}>
          Создать новую рассылку
        </Button>
      </Container>
    </PageWrapper>
  );
};

export default NewsletterManagement;
