import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Switch,
  FormControlLabel,
  Paper
} from '@material-ui/core';
import PageWrapper from '../PageWrapper/PageWrapper';
import { useStyles } from './SecurityStyles';
import { mockSessions } from '../../utils/mockSecurity/mockData';

const SecurityPage = () => {
  const classes = useStyles();
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleTwoFactorAuthToggle = () => {
    setTwoFactorAuth(!twoFactorAuth);
  };

  return (
    <PageWrapper title="Безопасность">
      <Container className={classes.container} maxWidth="md">
        <section className={classes.section}>
          <Typography variant="h6" className={classes.headerTitle}>
            Активные сессии
          </Typography>
          {mockSessions.map((session) => (
            <Paper key={session.id} className={classes.card}>
              <Typography>{session.device}</Typography>
              <Typography variant="body2" color="textSecondary">
                Последний вход: {session.lastLogin}
              </Typography>
            </Paper>
          ))}
          <Button color="secondary" onClick={() => {/* Logout all sessions logic here */ }}>
            Выход из всех сессий
          </Button>
        </section>

        <section className={classes.section}>
          <Typography variant="h6" className={classes.headerTitle}>
            Двухфакторная аутентификация
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={twoFactorAuth}
                onChange={handleTwoFactorAuthToggle}
              />
            }
            label="Включена"
          />
        </section>
      </Container>
    </PageWrapper>
  );
};

export default SecurityPage;
