import LoginInput from "./LoginInput";

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-[250] w-[400] gap-2 p-4 ">
            <h1 className="text-2xl font-bold pb-3">Se connecter</h1>
            <LoginInput id="email" type="text" placeholder="Email"/>
            <LoginInput id="password" type="password" placeholder="Password"/>
            <div className="w-full pt-3">
                <button className="w-full h-10 bg-blue-500 text-white rounded-md p-2">
                    Connexion
                </button>
            </div>
            
        </div>
    )
}