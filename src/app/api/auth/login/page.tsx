
import { LoginForm } from "@/components/LoginForm/LoginForm";

import styles from "./loginPage.module.scss";

export default async function Login() {
  return (
    <div className={styles.mainFormWrapper}>
      <div className={styles.formSection}>
        <h1>Heippalappu</h1>
        <LoginForm />
      </div>
    </div>
  );
}
