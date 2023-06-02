import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserInput } from './dto/user-input'
import { UserType } from './dto/user.type'
import { UserService } from './user.service'

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => Boolean, { description: '新增用户' })
  async create(@Args('params') params: UserInput): Promise<boolean> {
    return await this.userService.create(params)
  }

  @Query(() => UserType, { description: '使用 ID 查询用户' })
  async find(@Args('id') id: string): Promise<UserType> {
    return await this.userService.find(id)
  }
}
