import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useWrapperStyles } from "./PageWrapperStyles";

const PageWrapper = ({ children, title }) => {
    const classes = useWrapperStyles();

    return (
        <div className={classes.root}>
            <Header title={title} />
            <main className={classes.mainContent}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PageWrapper;
