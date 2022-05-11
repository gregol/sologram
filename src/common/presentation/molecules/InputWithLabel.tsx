import React from 'react'
import { Label } from '../atom/label/Label';
import { Input } from '../atom/input/Input';

export const InputWithLabel = ({...props}) => {
    return (
        <div>
            <Label>
                {props?.name}
            </Label>
            <Input {...props} />
        </div>
    )
}
