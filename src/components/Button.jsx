/* eslint-disable react/prop-types */
export default function Button({ text, color, handleClick }) {
    return (
        <button
            className={`${color} rounded-md w-[100px] text-gray-100 font-semibold h-[40px] cursor-pointer text-lg`}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}
