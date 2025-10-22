import Back from '../components/Contact/Back'

import {
    Form
} from '@heroui/form'

import {
    Input,
    Textarea
} from '@heroui/input'

function Contact() {
    return (
        <>
            <div className='flex flex-col items-center gap-8 w-full min-h-screen h-auto py-8 bg-black py-8 sm:py-12 md:py-16'>
                <div className="absolute top-8 left-8">
                    <Back />
                </div>
                <p className='text-4xl text-white mt-16'>Pongámonos en contacto</p>
                <Form className='w-1/4 h-auto mt-16 flex flex-col gap-8' validationBehavior='aria'>
                    <Input
                    isRequired
                    label="Nombre"
                    labelPlacement='outside'
                    placeholder='Ingresa tu nombre completo'
                    type='text'
                    color='primary'
                    />
                    <Input
                    isRequired
                    label="Email"
                    labelPlacement='outside'
                    placeholder='Ingresa tu email'
                    type='email'
                    color='primary'
                    />
                    <Textarea
                    isRequired
                    variant='flat'
                    isClearable
                    label="Mensaje"
                    labelPlacement='outside'
                    placeholder='Escribe tu mensaje aquí...'
                    color='primary'
                    />
                </Form>
            </div>
        </>
    )
}

export default Contact