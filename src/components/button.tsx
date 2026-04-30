type ButtonProp = {
    label : string
}
const Button = ({ label }: ButtonProp) => {
    return (
        <button className="bg-orange-600 py-3 px-5 text-white rounded-md text-[20px] font-md">{label}</button>
    );
}

export default Button;