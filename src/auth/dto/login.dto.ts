import { ApiProperty } from "@nestjs/swagger";

export class loginDto{

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
}