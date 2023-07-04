import {useSession as useNextAuthSession} from 'next-auth/react';

// refactoring for local testing vs production functionality

export const useSession = () => {
    if (process.env.NEXT_PUBLIC_MOCK_NEXT_AUTH) {
        return {
            data: {
                user: {
                    name: 'test',
                    email: 'test@gmail.com',
                    image: 'image'
                },
            },
            status: 'authenticated'
        }
    } else {
        return useNextAuthSession();
    }
}