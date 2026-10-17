const NavigasiButton = ({
    //children itu maksudnya apapun yang ada
    //diantara tagging element itu akan masuk ke children
    //misal <komponen>yang didalam sini akan dianggap children</komponen>
    children
}) => {
    return (
        <button className="w-12 h-12 bg-white/50 shdow-2xl flex justify-center items-center rounded-full">
            {children}
        </button>
    )
}

export default NavigasiButton