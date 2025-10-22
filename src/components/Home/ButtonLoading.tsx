import {
    Button
} from '@heroui/button';

import { ButtonDomainProps } from '../../types/home/navbar';

import {useState} from "react";

import {useNavigate} from "react-router-dom";

function ButtonLoading({ domain, contentButton, variant, color }: ButtonDomainProps) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const loadPage = (path: string) => () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate(path);
        }, 2500);
    };

    return (
        <Button onPress={loadPage(domain)} color={color} variant={variant} isLoading={loading} className='text-white text-sm sm:text-base'>
            {contentButton}
        </Button>
    )
}

export default ButtonLoading;