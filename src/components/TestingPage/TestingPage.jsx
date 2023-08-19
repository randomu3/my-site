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
  const [isSupportPageVisible, setIsSupportPageVisible] = useState(false); // Новое состояние

  const handleSendMessage = () => {
    setChatHistory([...chatHistory, { id: Date.now(), message, type: "user" }]);
  };

  return (
    <PageWrapper title={"Тестирование бота"}>
      <Container className={classes.container}>
        {!selectedBot ? (
          <div>
            <BotSelector classes={classes} onSelect={setSelectedBot} />
          </div>
        ) : (
          <ChatInterface
            classes={classes}
            chatHistory={chatHistory}
            onSendMessage={handleSendMessage}
            onBotChange={() => setSelectedBot(null)}
            message={message}
            setMessage={setMessage}
          />
        )}
      </Container>
    </PageWrapper>
  );
};

export default TestingPage;
