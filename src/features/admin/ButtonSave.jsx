
export default function ButtonSave({ title, onClick,type='button' }) {
    return (
        <button onClick={onClick} type={type} className='bg-OtherColor-darkGreen rounded-2xl text-MonoColor-50 py-2 px-10 text-[18px] font-normal  active:text-MonoColor-600 active:bg-Primary-light'>{title}</button>
    )
}
