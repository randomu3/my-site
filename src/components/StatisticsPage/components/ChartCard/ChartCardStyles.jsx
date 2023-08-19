import { makeStyles } from "@material-ui/core";

export const useChartStyles = makeStyles((theme) => ({
    card: {
        marginTop: theme.spacing(4),
        backgroundColor: "#F5F5F5", // Светло-серый
        overflow: "hidden",
    },
    cardTitle: {
        color: "#212121", // Черный
        marginBottom: theme.spacing(2),
    },
}));