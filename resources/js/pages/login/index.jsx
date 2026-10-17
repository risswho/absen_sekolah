import { useState } from "react"
import Input from "../../components/form/Input"
import { toast } from "sonner"
import { auth } from "../../api/auth"


const Login = () => {

    const [form, setForm] = useState({
        username: "",
        password: ""
    })


    const gantiForm = ({ target }) => {
        const { name, value } = target
        let _form = structuredClone(form)
        _form[name] = value

        setForm(_form)
    }
    const submit = () => {

        if (form.username == "") {
            toast.error(`Username mohon diisi.`)
        } else if (form.password == "") {
            toast.error("Password mohon diisi.")
        } else {
            auth({
                username: form.username,
                password: form.password
            }).then((res) => {
                if (res.data.message) {
                    toast.success(res.data.message)
                    // save token nya 
                    localStorage.setItem("token", res.data.token)
                }
            }).catch((err) => {

                if (err.response?.data?.message) {
                    toast.error(err.response?.data?.message)
                }

            })
        }


    }


    return (
        <div className=" h-screen  bg-gray-500 grid grid-cols-1 content-center ">
            <div className=" flex justify-center">
                <div className="bg-gray-400 shadow-2xl w-full max-w-3xl p-2 rounded-md">
                    <div className="bg-gray-400 h-screen sm:h-[90vh] xl:h-100 p-1 flex gap-4 rounded-sm">
                        <div className="w-[40%] hidden sm:block relative !bg-cover rounded-sm" style={{ background: "url('/img-login.jpg')" }}>
                            {/* TITLE NAMA APLIKASI */}
                            <div className="absolute text-[13px] bottom-4 text-white font-medium left-4">
                                Aplikasi Absensi Siswa & Guru
                                <div className="mt-1 font-bold text-xl">
                                    SMKN PURWOSARI
                                </div>
                            </div>
                        </div>
                        <div className="grow grid grid-cols-1 content-center">
                            <div className="p-5 sm:p-10">
                                <div className="font-bold">SIGN IN</div>
                                <div className="text-xs">Selamat Datang di aplikasi Absen!</div>

                                <div className="mt-3">
                                    <Input
                                        title="Username"
                                        type="text"
                                        name="username"
                                        value={form.username}
                                        onChange={gantiForm}
                                        placeholder="Masukan Username"
                                    />
                                    <Input
                                        title="Password"
                                        type="password"
                                        name="password"
                                        value={form.password}
                                        onChange={gantiForm}
                                        placeholder="Masukan Password"
                                    />
                                </div>

                                <div>
                                    <button
                                        onClick={submit}
                                        className="mt-5 bg-indigo-100 text-gray-800 p-2 w-full font-bold rounded-md text-md shadow-md">
                                        SIGN IN
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login