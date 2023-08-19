import { makeStyles } from "@material-ui/core";

export const useFooterStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3),
        backgroundColor: "#F5F5F5", // Светло-серый
        color: "#212121", // Черный
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '1px solid #BDBDBD', // Серый
        fontFamily: 'Roboto, sans-serif',
    },
    links: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        '@media (max-width: 320px)': {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    link: {
        margin: theme.spacing(1),
        color: "#212121", // Черный
        textDecoration: 'none',
        fontSize: '0.9rem', 
        '&:hover': {
            color: "#BDBDBD", // Серый при наведении
            textDecoration: 'underline',
        },
    },
}));