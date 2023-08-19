import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: theme.spacing(4),
      padding: theme.spacing(4),
      borderRadius: '8px',
      backgroundColor: '#333',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(2),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    title: {
      marginBottom: theme.spacing(4),
      color: '#fff',
    },
    linkButton: {
      marginTop: theme.spacing(2),
      width: '100%',
      textDecoration: 'none',
      textAlign: 'center',
      borderColor: '#fff', // Добавьте контрастный цвет границы
      color: '#fff', // Добавьте контрастный цвет текста
    },
    input: {
      '& label.Mui-focused': {
        color: '#fff',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#fff',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#ddd',
        },
        '&:hover fieldset': {
          borderColor: '#fff',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#fff',
        },
      },
      '& .MuiOutlinedInput-input': {
        color: '#fff', // цвет текста
      },
      '& .MuiInputLabel-root': {
        color: '#ddd', // цвет лейбла
      },
      '& .MuiInputLabel-root.Mui-focused': {
        color: '#fff', // цвет лейбла при фокусе
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ddd', // цвет границы
      },
    },
  }));