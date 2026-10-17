import { Eye, EyeClosed } from "lucide-react"
import { useState } from "react"

const Input = ({
    title,
    type,
    placeholder,
    name,
    value,
    onChange
}) => {
    
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className="font-medium text-xs mb-2 mt-2">{title}</div>
            <div className="relative">
                <input type={show == true ? "text": type}
                       placeholder={placeholder}
                       className="w-full border
                                    text-xs
                                    focus:outline-0
                                 border-stone-300
                                  p-2
                                  rounded-lg"
                        name={name}
                    value={value}
                    onChange={onChange}
                        />
                
                {
                    type == "password" && (
                        <button onClick={() => setShow(!show)} className="top-1.5 cursor-pointer right-0 absolute">
                            
                            {show == true ? <Eye /> : <EyeClosed/>}
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default Input