import {
    Link
} from '@heroui/link';

function Back() {
    const anchorIcon = () => {
        return (
            <svg className='w-6 h-6 ml-2' xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
                <path fill="#3a88fe" d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z"/>
            </svg>
        )
    }

    return (
        <Link href='/' showAnchorIcon anchorIcon={anchorIcon()}>
            Volver a inicio
        </Link>
        
    )
}

export default Back;