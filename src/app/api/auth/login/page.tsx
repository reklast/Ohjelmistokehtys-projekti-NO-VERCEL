import { ConfigProvider } from "antd";

import { LoginForm } from "@/components/LoginForm/LoginForm";

import styles from './loginPage.module.scss'
import theme from "@/theme/*";


export default async function Login() {
    return (
    <ConfigProvider theme={theme}>
        <div className={styles.mainFormWrapper}>
            <div className={styles.formSection}>
                <h1>Heippalappu</h1>
                <LoginForm />
            </div>
        </div>
    </ConfigProvider>
    )
}
