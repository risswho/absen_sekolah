import { Bell, Flame, LogOut } from "lucide-react"
import { useContext } from "react"
import SearchNavigasi from "../input/SearchNavigasi"
import NavigasiButton from "../buttons/NavigasiButton"

const Navigasi = () => {
    const { user } = useContext(GlobalConsumer)
    console.log(user)
    return (
        <div className="h-37.5 p-10">
            <div className="flex items-center gap-5">
                <Flame size={50} className="text-[#506959]" />
                <div>
                    <div className="text-lg">hello {user.nama}</div>
                    <div className="text-[13px]">selamat datang di aplikasi absen</div>
                </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-2 justify-end">
                <SearchNavigasi />
                <NavigasiButton>
                    <Bell size={20} />
                </NavigasiButton>
                <NavigasiButton>
                    <LogOut size={20} />
                </NavigasiButton>
            </div>
        </div>
    )
}

export default Navigasi