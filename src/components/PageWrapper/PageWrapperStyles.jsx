import { makeStyles } from "@material-ui/core";

export const useWrapperStyles = makeStyles((theme) => ({
    '@global': {
        body: {
            margin: 0,
            padding: 0,
        },
    },
    root: {
        // font-family: "Roboto", "Helvetica", "Arial", 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Занимает весь экран по высоте
    },
    mainContent: {
        flex: 1, // Занимает все доступное пространство между Header и Footer
        backgroundColor: '#f5f5f5', // Светлый фон для контента
        minHeight: 0, // Обеспечивает правильное растягивание внутри flex контейнера
    },
}));