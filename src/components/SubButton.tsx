import { ButtonProps } from '../types/button';

const SubButton = ({ setState, isAlt, buttonText, displayText, calcText, bgColor, altColor, fontColor }: ButtonProps) => {
  return (
    <div>
      <div className='flex justify-center '>
        <p className={`h-4 text-center text-orange-400 text-xs ${!calcText.topLeftText && "opacity-50"}`}>{buttonText.topLeftText}</p>
        <p className={`h-4 text-green-400 text-xs ${!calcText.topRightText && "opacity-50"}`} >{buttonText.topRightText}</p>
      </div>
      <button
        className={`flex justify-center items-center w-16 h-8 ${!bgColor ? "bg-gradient-to-b from-[#E4E6F3] via-[#A8AAB5] to-[#63656F]" : !isAlt && altColor && displayText.mainText === "ALT" ? altColor : bgColor} rounded ${!calcText.mainText && "opacity-70"}`}
        onClick={() => isAlt
          ? setState &&
          calcText.mainText &&
          displayText.mainText &&
          setState(displayText.mainText, calcText.mainText)
          : setState &&
          calcText.topLeftText &&
          displayText.topLeftText &&
          setState(displayText.topLeftText, calcText.topLeftText)
        }
      >
        <p className={`${fontColor ? fontColor : 'text-black'} text-xl font-medium ${!calcText.mainText && "opacity-50"}`} >{buttonText.mainText}</p>
      </button>
    </div>
  )
}

export default SubButton;