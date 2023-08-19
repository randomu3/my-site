import { makeStyles } from "@material-ui/core";

export const useHeaderStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        backgroundColor: "#BDBDBD",
    },
    title: {
        marginBottom: theme.spacing(2),
        color: "#212121",
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        '@media (max-width: 320px)': {
            flexDirection: 'column',
            alignItems: 'center',
        },
        '@media (min-width: 375px) and (max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'stretch',
        },
    },
    button: {
        '@media (max-width: 320px)': {
            width: '80%', // уменьшим до 80% для мобильных устройств
            marginBottom: theme.spacing(1),
        },
        '@media (min-width: 375px) and (max-width: 768px)': {
            width: '100%',
            marginBottom: theme.spacing(1),
        },
    },
}));
