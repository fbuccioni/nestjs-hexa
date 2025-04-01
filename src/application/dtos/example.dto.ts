import { ApiProperty } from '@nestjs/swagger';

import { Example } from '../../domain/models/example.model';


export class ExampleDto extends Example {
    @ApiProperty( { description: 'Identified of the example', format: "uuid" } )
    id: string;

    @ApiProperty( { description: 'Name of the example person' } )
    name: string;

    @ApiProperty( { description: "Age of the example person" } )
    age: number;

    @ApiProperty( { description: "Eamil of the example person" } )
    email: string;
}
