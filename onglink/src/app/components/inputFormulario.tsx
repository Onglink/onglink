import { HTMLInputTypeAttribute } from "react";


export type InputProps = {
    id?: string;
    name: string;
    value?: string | number;
    type: HTMLInputTypeAttribute;
    placeholder: string;
    className: string;
    changeEvent?: (newValue: string | number) => any;
    blurEvent?: () => any;
}

export default function Input({
    id,
    name,
    placeholder,
    type,
    value,
    className,
    changeEvent = () => {},
    blurEvent = () => {},
}:InputProps){

    return(
        <input
            id={id ?? name}
            name={name}
            placeholder={placeholder}
            type={type}
            value={value}
            className={className}
            onChange={(event) => changeEvent(event.target.value)}
            onBlur={blurEvent}
            />
    )
}
