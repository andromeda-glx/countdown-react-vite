/* eslint-disable react/prop-types */
export default function Button({ text, color, handleClick, isDisabled }) {
    return (
        <button
            className={`${color} rounded-md w-[100px] text-gray-100 font-semibold h-[40px] cursor-pointer text-lg disabled:opacity-40 disabled:bg-gray-600`}
            onClick={handleClick}
            disabled={isDisabled}
        >
            {text}
        </button>
    )
}
