import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import { useStyles } from "./TestingPageStyles";
import { mockBotMessages } from "../../utils/mockStatistics/mockData";
import PageWrapper from "../PageWrapper/PageWrapper";
import ChatInterface from "./components/ChatInterface/ChatInterface";
import BotSelector from "./components/BotSelector/BotSelector";
import SupportPage from "../SupportPage/SupportPage";

const TestingPage = () => {
  const classes = useStyles();
  const [selectedBot, setSelectedBot] = useState(null);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState(mockBotMessages);
  const [isSupportPageVisible, setIsSupportPageVisible] = useState(false);

  const handleSendMessage = () => {
    setChatHistory([...chatHistory, { id: Date.now(), message, type: "user" }]);
  };

  let content;

  if (isSupportPageVisible) {
    content = (
      <SupportPage
        classes={classes}
        onBack={() => setIsSupportPageVisible(false)}
      />
    );
  } else if (selectedBot) {
    content = (
      <ChatInterface
        classes={classes}
        chatHistory={chatHistory}
        onSendMessage={handleSendMessage}
        onBotChange={() => setSelectedBot(null)}
        message={message}
        setMessage={setMessage}
      />
    );
  } else {
    content = (
      <div>
        <BotSelector classes={classes} onSelect={setSelectedBot} />
        <div className={classes.buttonContainer}>
          <Button
            className={classes.blueButton}
            onClick={() => setIsSupportPageVisible(true)}
            variant="contained"
            color="primary"
          >
            Техническая поддержка
          </Button>
        </div>
      </div>
    );
  }

  return (
    <PageWrapper title={"Тестирование бота"}>
      <Container className={classes.container}>{content}</Container>
    </PageWrapper>
  );
};

export default TestingPage;
