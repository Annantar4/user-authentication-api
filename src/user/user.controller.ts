import { Controller, Get, Req, Request, Response, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
import { ApiCookieAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('api/user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Throttle({default: {limit: 3, ttl: 60000}}) //Rate limit 3 request in 1 minute
    @Get('profile')
    @ApiOperation({summary: 'Get user profile'})                            // Swagger Documentation
    @ApiCookieAuth('token')
    @ApiResponse({
        status: 200,
        description: 'User Profile',
        schema:{
            example:{
                data:{
                    id: 9,
                    username: "putra",
                    email: "putra@gmail.com"
                }
            }
        }
    })
    @ApiResponse({
        status: 401,
        description: 'User has logged out',
        schema:{
            example:{
                message: "Unauthorized",
                statusCode: 401
            }
        }
    })
    @ApiResponse({
        status: 429,
        description: 'Rate Limit (Too Many Requests)',
        schema:{
            example:{
                statusCode: 429,
                message: 'ThrottlerException: Too Many Requests'
            }
        }
    })                                                                                       // Swagger Documentation
    @UseGuards(JwtAuthGuard)
    getProfile(@Request() req){
        return this.userService.GetProfile(req);
    }
}

