import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from "class-validator";


export class TokenRefreshDto {
    @ApiProperty({ description: 'Refresh token'})
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    refreshToken: string
}
