import { makeStyles } from "@material-ui/core";

export const useFooterStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3),
        backgroundColor: "#F5F5F5",
        color: "#212121",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '1px solid #BDBDBD',
        fontFamily: 'Roboto, sans-serif',
    },
    links: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '60%',  // уменьшим, чтобы ссылки не касались краёв на больших экранах
        maxWidth: '600px',  // максимальная ширина, чтобы сохранять отступы на широких экранах
        '@media (max-width: 600px)': {  // добавим промежуточную точку для адаптации
            justifyContent: 'space-evenly',
            width: '100%',
        },
        '@media (max-width: 320px)': {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    link: {
        margin: theme.spacing(1),
        color: "#212121",
        textDecoration: 'none',
        fontSize: '0.9rem', 
        '&:hover': {
            color: "#BDBDBD",
            textDecoration: 'underline',
        },
        '@media (max-width: 480px)': {  // уменьшим размер текста на меньших экранах
            fontSize: '0.8rem',
        },
    },
}));
