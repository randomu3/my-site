import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    card: {
        marginTop: theme.spacing(4),
        backgroundColor: "#444",
        overflow: "hidden", // Это предотвратит выход содержимого за пределы карточки
    },
    cardTitle: {
        color: "#fff",
        marginBottom: theme.spacing(2),
    },
    // Добавьте дополнительные стили здесь, если они вам нужны
}));
