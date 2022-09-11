(() => {
    interface HTTPResponse<T extends 'success' | 'error'> {
        code: number;
        data: T extends 'success' ? string : Error;
    }

    const suc: HTTPResponse<'success'> = {
        code: 200,
        data: 'Test'
    }

    const err: HTTPResponse<'error'> = {
        code: 500,
        data: new Error('Failed!')
    }

    /**
     * Перегрузка функций.
     */
    interface User {
        id: number;
        name: string
    }

    interface UserPersistend {
        dbId: string;
    }

    function getUser(id: number): User;
    function getUser(dbId: string): UserPersistend;
    function getUser(idOrdbId: string | number): User | UserPersistend {
        if (typeof idOrdbId === 'number') {
            return {
                id: 5,
                name: 'Test'
            }
        } else {
            return {
                dbId: '502asn21s',
            }
        }
    }

    /**
     * Condidtional Generic
     */
    type UserOfUserPersistend<T extends string | number> = T extends number ? User : UserPersistend;

    function getUser2<T extends string | number>(id: T): UserOfUserPersistend<T> {
        if (typeof id === 'number') {
            const user: User = {
                id: 5,
                name: 'Test'
            };
            return user as UserOfUserPersistend<T>;
        } else {
            const user: UserPersistend = {
                dbId: '502asn21s'
            };
            return user as UserOfUserPersistend<T>
        }
    }
})();