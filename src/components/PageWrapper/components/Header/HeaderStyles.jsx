import { makeStyles } from "@material-ui/core";

export const useHeaderStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        backgroundColor: "#BDBDBD", // Серый
    },
    title: {
        marginBottom: theme.spacing(2),
        color: "#212121", // Черный
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        '@media (max-width: 320px)': {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    button: {
        '@media (max-width: 320px)': {
            width: '100%',
            marginBottom: theme.spacing(1),
        },
    },
}));