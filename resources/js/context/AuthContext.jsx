import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getCurentUser } from "../api/auth";
import { Loader } from "lucide-react";

//bikin global variable
export const GloblaConsumer = createContext()

//bikin provider
const GlobalProvider = ({
    children
}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    //mengecek user sudah login atau belum
    const init = () => {
        //promise -> tunggu hingga dia dapat response
        getCurentUser().then((res) => {
            if (res.data.status) {
                setUser(res.data.data)
            }
            setLoader(false)
        }).catch((e) => {
            setLoader(false)
        })
    }

    // ketika document ready
    useEffect(() => {
        init()
    }, [])
    //ketika state user dirubah
    useEffect(() => {
        //user?.id itu tidak boleh null | undefined | 0
        if (user?.id) {
            //jika user berada diurl : /login maka diredirect ke dashboard
            if (location.pathname.includes("/login")) {
                //redirect ke dashboard
                navigate('/dashboard', { replace: true })
            }
        } else {
            //redirect ke /login
            navigate('/login', { replace: true })
        }
    }, [user])

    return (
        <GloblaConsumer.Provider value={{ user, setUser }}>
            {
                //jika loader state itu true
                //cara mengecek loader menggunakan "!"
                loader ?
                //tampilkan halaman loader
                    <Loader />
                    :
                //jika loader tidak true maka tampilkan halaman yang diminta user
                    children
            }

        </GloblaConsumer.Provider>
    )
}

export default GlobalProvider