import { useFooterStyles } from "./FooterStyles";

const Footer = () => {
    const classes = useFooterStyles();

    return (
        <footer className={classes.footer}>
            <div className={classes.links}>
                <a href="/" className={classes.link}>О нас</a>
                <a href="/contacts" className={classes.link}>Контакты</a>
                <a href="/policy" className={classes.link}>Политика конфиденциальности</a>
            </div>
        </footer>
    );
};

export default Footer;
