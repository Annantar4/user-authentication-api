import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { loginDto } from './dto/login.dto';
import { Request, Response } from 'express';
import { error } from 'console';
import { env } from 'process';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService, private readonly jwtservice: JwtService){}

    async Register(data: RegisterDto): Promise<{msg: string}>{
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(data.password, salt);
        const user = await this.prisma.user.create({
            data: {
                email: data.email,
                username: data.username,
                password: hash
            }
        });
        delete user.password
        return {msg: "Register Success"}
    }


    async Login(data: loginDto, req: Request, res: Response){

        const user = await this.prisma.user.findUnique({
            where:{
                email: data.email
            }
        });

        if (!user) {
            throw new UnauthorizedException('Invalid Email or Password');
        }

        const isMatch = await bcrypt.compare(data.password, user.password);

        if (!isMatch) {
            throw new UnauthorizedException('Invalid Email or Password');
        }

        const token = await this.jwtservice.signAsync({
            id: user.id,
            email: user.email
        })

        res.cookie('token', token,{
            httpOnly: true,
            maxAge: 3600000
        }) 

        return res.status(200).send({msg: "Login Success"})


    } 

    async logout(res: Response){
        res.clearCookie('token');

        return res.status(200).send({msg: "Logout Success"})
    }

}
