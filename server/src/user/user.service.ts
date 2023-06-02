import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(entity): Promise<boolean> {
    const res = await this.prisma.user.create({
      data: entity,
    })
    console.log(res)
    if (res) {
      return true
    } else {
      return false
    }
  }

  async find(id: string): Promise<User> {
    const res = await this.prisma.user.findFirst({
      where: { id },
    })
    return res
  }
}
