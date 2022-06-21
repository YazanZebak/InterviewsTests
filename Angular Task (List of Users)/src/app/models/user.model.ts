

export class User { 

    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;

    constructor(user: Partial<User>) {
        this.id = user.id ?? 0; 
        this.email = user.email ?? "";
        this.first_name = user.first_name ?? "";
        this.last_name = user.last_name ?? "";
        this.avatar = user.avatar ?? ""; 
    }

    public static fromDTO(user: any): User { 
        return new User(user);
    }

    public static fromDTOArray(users: any[]): User[] { 
         if(users.length === undefined) users = [users];
         return users.map(user => this.fromDTO(user));
    }
}