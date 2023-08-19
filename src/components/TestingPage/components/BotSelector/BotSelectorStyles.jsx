import { makeStyles } from "@material-ui/core";

export const useBotSelectorStyles = makeStyles((theme) => ({
    subtitle: {
      color: "#fff",
      marginBottom: theme.spacing(2),
    },
    card: {
      marginBottom: theme.spacing(2),
      backgroundColor: "#673AB7", // Фиолетовый фон
      color: "#FFFFFF", // Белый цвет текста для контраста
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      borderRadius: "8px",
      [theme.breakpoints.down("xs")]: {
        margin: theme.spacing(1, 0),
      },
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "column", 
      alignItems: "center", 
      marginTop: theme.spacing(2),

      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
    blueButton: {
      backgroundColor: '#5C6BC0',
      color: "#fff",
      "&:hover": {
        backgroundColor: "#3F51B5",
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: theme.spacing(1),
      },
    },
    bot: {
        color: "#fff",
    },
    count: {
      margin: theme.spacing(1, 2),
      color: "#fff",    
      [theme.breakpoints.down("xs")]: {
        fontSize: '0.8rem',
      },
    },
}));
