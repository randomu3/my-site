import { makeStyles } from "@material-ui/core";

export const useStatisticsStyles = makeStyles((theme) => ({
    statsText: {
        color: "#212121", // Черный
        marginBottom: theme.spacing(2),
        textShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)', // Небольшая тень для текста
        display: 'flex',
        alignItems: 'center',
    },
}));