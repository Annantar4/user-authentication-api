import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";


export class RegisterDto {

    
    @ApiProperty({
        type: String,
        example: 'putra@gmail.com',
        description: 'Input Email'
    })
    email: string;

    
    @ApiProperty({
        type: String,
        example: 'putra123',
        description: 'Input Password'
    })
    password: string;

    
    @ApiPropertyOptional({
        type: String,
        example: 'putra',
        description: 'Input Username'
    })
    username: string;
}