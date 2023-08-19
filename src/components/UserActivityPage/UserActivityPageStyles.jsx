import { makeStyles } from "@material-ui/core";

export const useUserActivityStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4),
        backgroundColor: '#f5f5f5',
        borderRadius: '12px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(3),
    },
    activityList: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    backButton: {
        marginRight: theme.spacing(2),
    },
    logoutButton: {
        marginLeft: theme.spacing(2),
    },
}));
