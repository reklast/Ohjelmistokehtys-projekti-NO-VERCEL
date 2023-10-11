import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth"
import { Avatar, ConfigProvider } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import { LogOutButton } from "@/components/LogOutButton/LogOutButton";


import styles from './page.module.scss';
import theme from "@/theme/*";


export default async function User() {
    const session = await getServerSession(authConfig);
    
    return (
    <ConfigProvider theme={theme}>
    <div className={styles.mainWrap}>
        <h1 className={styles.userName}>{session?.user?.name}</h1>
        <div className={styles.avatarHolder}>
            {!session?.user?.image 
         ? <Avatar className={styles.userImg} size={150} gap={3} icon={<UserOutlined />}/>
         : <Avatar className={styles.userImg} size={150} gap={3} src={session?.user?.image}/>}
        </div>
        <div className={styles.buttonHolder}>
         <LogOutButton />
        </div>
    </div>
    
    </ConfigProvider>
    )
}