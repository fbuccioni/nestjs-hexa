import { IsArray, IsEnum } from 'class-validator';

import { IsCoordinate } from '../validators/is-coordinate.validator';


export class MultiPoint {
    @IsEnum(['MultiPoint'])
    type = 'MultiPoint' as const;

    @IsArray()
    @IsCoordinate({ each: true })
    coordinates: Coordinate[];
}
