import Button from "./Button";

export default function Input() {
  return (
    <div className="flex items-stretch justify-center gap-x-5 w-full">
        <input className="text-3xl w-20 rounded-md text-center bg-gray-100" type="number" defaultValue={10} />
        <Button text={"OK"} color={"bg-green-500"} />
    </div>
  )
}
