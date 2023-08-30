'use client'

import { Button, Form, Input, Space } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { FormEventHandler, ReactElement } from "react";
import { GoogleButton } from "../GoogleButton/GoogleButton";

import styles from './LoginForm.module.scss'


function LoginForm(): ReactElement {
    const router = useRouter();

    const handleLogIn: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)

        const res = await signIn("credentials", {
            username: formData.get('username'),
            password: formData.get('password'),
            redirect: false,
        });

        if (res && !res.error){
            router.push('/dashboard');
        }
        else {
            console.log(res);
        }
    }
    return (
        <Form onSubmitCapture={handleLogIn}>
            <Form.Item>
                <div>Käyttäjätunnus</div>
                <Input type="username" name="username" required={true} />
            </Form.Item>
            <Form.Item>
                <div>Salasana</div>
                <Input type="password" name="password" required={true} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className={styles.logInButton}>Kirjaudu</Button>
            </Form.Item>
            <GoogleButton />
            
        </Form>
    )
}

export {LoginForm};
