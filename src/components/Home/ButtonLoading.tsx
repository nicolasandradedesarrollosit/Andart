import { ButtonDomainProps } from '../../types/Home/navbar';

import {useState} from "react"

import {
    Button
} from '@heroui/button';

import {useNavigate} from "react-router-dom";

function ButtonLoading({ domain, contentButton, variant, color }: ButtonDomainProps) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const loadPage = (path: string) => () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (path.startsWith('#')) {
                const element = document.querySelector(path);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                navigate(path);
            }
        }, 1500);
    };

    return (
        <Button onPress={loadPage(domain)} color={color} variant={variant} isLoading={loading} className='text-white text-sm sm:text-base'>
            {contentButton}
        </Button>
    )
}

export default ButtonLoading;