import { Button, TextField } from "@material-ui/core";

const ChatInterface = ({ classes, chatHistory, onSendMessage, onBotChange, message, setMessage }) => (
    <div>
      <div className={classes.chatBox}>
        {chatHistory.map((msg) => (
          <div key={msg.id} className={msg.type === "bot" ? classes.botMessage : classes.userMessage}>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
        variant="outlined"
        placeholder="Введите ваше сообщение..."
        className={classes.input}
      />
      <div className={classes.buttonContainer}>
        <Button onClick={onSendMessage} className={classes.button}>
          Отправить
        </Button>
        <Button onClick={onBotChange} className={classes.button} variant="contained" color="primary">
          Сменить бота
        </Button>
      </div>
    </div>
  );

  export default ChatInterface;