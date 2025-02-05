import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HealthCheck, HealthCheckService, HttpHealthIndicator, PrismaHealthIndicator } from '@nestjs/terminus';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('health') // Health check endpoints 
export class HealthController {
    constructor(private readonly health: HealthCheckService, private readonly http: HttpHealthIndicator, private readonly db: PrismaService, private readonly dbHealth: PrismaHealthIndicator){}

    @Get()
    @ApiOperation({summary: 'Health Check'}) // Swagger Documentation
    @ApiResponse({
            status: 200,
            description: 'Health Check',
            schema:{
                example:{
                    status: "ok",
                    info: {
                        google: {
                            status: "up"
                        },
                        database: {
                            status: "up"
                        }
                    },
                    error: {},
                    details: {
                        google: {
                            status: "up"
                        },
                        database: {
                            status: "up"
                        }
                    }
                }
            }
        })
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
        status: 503,
        description: 'Health Check is not successful',
        schema:{
            example:{
                status: "error",
                info: {},
                error: {
                    google: {
                        status: "down",
                        message: "timeout of 5000ms exceeded"
                    },
                    database: {
                        status: "down",
                        message: "timeout of 1000ms exceeded"
                    }
                },
                details: {
                    google: {
                        status: "down",
                        message: "timeout of 5000ms exceeded"
                    },
                    database: {
                        status: "down",
                        message: "timeout of 1000ms exceeded"
                    }
                }
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
    @HealthCheck()
    check(){
        return this.health.check([
            async () => this.http.pingCheck('google', 'https://google.com'),  //check ping
            async () => this.dbHealth.pingCheck('database', this.db) //check database
        ])
    }
}
