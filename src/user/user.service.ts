import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { Request, Response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService){}

    async GetProfile(req: Request): Promise<{data: User}>{
        const data = await this.prisma.user.findUnique({
            where: {
                email: req.user['email']
            }
        })
        
        if (!data) {
            throw new ForbiddenException()
        }

        delete data.password;
        return {data}
    }
}
