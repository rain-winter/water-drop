import { UserInput } from './dto/user-input';
import { UserType } from './dto/user.type';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    create(params: UserInput): Promise<boolean>;
    find(id: string): Promise<UserType>;
}
