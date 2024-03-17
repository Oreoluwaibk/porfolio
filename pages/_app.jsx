import { ConfigProvider } from 'antd';
import 'tailwindcss/tailwind.css';
// import "../styles/"
import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import theme from '@/theme/themeConfig';

export default function App({ Component, pageProps }) {
    return (
        <ConfigProvider theme={theme}>
             <Component {...pageProps} />
        </ConfigProvider>
    )
}