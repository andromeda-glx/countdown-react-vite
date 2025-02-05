import Countdown from "./components/Countdown"
import Input from "./components/Input"

function App() {
    return (
        <main className="bg-epic-50 h-dvh w-dvw flex items-center justify-center flex-col gap-y-5">
            <Input />
            <Countdown />
        </main>
    )
}

export default App
