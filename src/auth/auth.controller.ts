import { Body, Controller, Delete, Post, Request, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { loginDto } from './dto/login.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('signup')
    @ApiOperation({summary: 'Register a new user'})                     // Swagger Documentation
    @ApiResponse({
        status: 201,
        description: 'Register Success',
        schema:{
            example:{
                msg: 'Register Success',
            }
        }
    })
    @ApiResponse({
        status: 500,
        description: 'Register Failed (Email or password is empty)',
        schema:{
            example:{
                statusCode: 500,
                message: 'Internal server error'
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
    })                                                                  // Swagger Documentation
    register(@Body() regDto: RegisterDto){
        return this.authService.Register(regDto); 
    }


    
    @Post('signin')
    @ApiOperation({summary: 'User Login'})                  // Swagger Documentation
    @ApiResponse({
        status: 200,
        description: 'Login Success',
        schema:{
            example:{
                msg: 'Login Success',
            }
        }
    })
    @ApiResponse({
        status: 401,
        description: 'Email or password is wrong',
        schema:{
            example:{
                message: "Invalid Email or Password",
                error: "Unauthorized",
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
    })                                                                  // Swagger Documentation
    login(@Body() loginDto: loginDto, @Request() request, @Response() response){
        return this.authService.Login(loginDto, request, response);
    }


    
    @Delete('signout')
    @ApiOperation({summary: 'User Logout'})                             // Swagger Documentation
    @ApiResponse({
        status: 200,
        description: 'Logout Success',
        schema:{
            example:{
                msg: 'Logout Success',
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
    })                                                                          // Swagger Documentation
    @Post('signin')
    logout(@Response() response){
        return this.authService.logout(response);
    }
}

