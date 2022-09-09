(() => {
    interface Role {
        name: string
    }

    interface User {
        name: string;
        roles: Role[]
    }

    const user: User = {
        name: 'Jhon',
        roles: []
    }

    const userName = user['name'];

    const roleNames = 'roles';

    type UserRoles = User['roles'];
    type UserRoles2 = User[typeof roleNames];

    const roles = ['admin', 'user', 'super-user'] as const;


    // type roleType = typeof roles;
    // const test: roleType = ['admin', 'user', 'super-user'];

    type roleType = typeof roles[number];
    const test: roleType = 'admin';
})();