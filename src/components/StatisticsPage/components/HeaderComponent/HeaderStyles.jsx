import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: theme.spacing(4),
    },
    title: {
        color: "#fff",
    },
    backButton: {
        backgroundColor: "#555",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#777",
        },
    },
    // Добавьте дополнительные стили здесь, если они вам нужны
}));
