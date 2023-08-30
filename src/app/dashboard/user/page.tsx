import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth"

export default async function User() {
    const session = await getServerSession(authConfig);
    
    return (
    <div>
        <h1>User profile {session?.user?.name}</h1>
        {session?.user?.image && <img src={session.user.image} alt=""/>}
    </div>
    )
}