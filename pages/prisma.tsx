import { GetServerSideProps } from "next";
import { prismaClient } from "../lib/prisma";

type User = {
    id: number,
    name: string,
}

type Props = {
    user: User | null,
}

const PrismaTest = ({user}: Props) => {
    return user ? <div>Hello! {user.name}</div> : <div>No User</div>
}

export default PrismaTest;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const user = await prismaClient.user.findFirst();
    return {
        props: {
            user: user ? { id: user.id, name: user.name } : null,
        },
    };
}