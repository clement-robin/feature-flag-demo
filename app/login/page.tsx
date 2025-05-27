import Login from "../components/Login";
export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold pb-3">Connexion</h1>
            <Login />
        </div>
    );
}