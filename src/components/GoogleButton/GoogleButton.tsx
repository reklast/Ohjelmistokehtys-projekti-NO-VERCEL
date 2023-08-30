'use client'

import { Button } from "antd"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import styles from "./GoogleButton.module.scss"

const GoogleButton = () => {

    const searchParams = useSearchParams();
    const callbackUrl = "/dashboard";

    return (
        <Button onClick={() => signIn('google', {callbackUrl})} className = {styles.button}>
            <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="google-svg" />
            Log in with Google
        </Button>
    )
}

export {GoogleButton};
