import { ButtonProps } from '../types/button';

const MainButton = ({ setState, isAlt, buttonText, displayText, calcText, fontSize }: ButtonProps) => {
  return (
    <button className='relative flex justify-center items-center w-16 h-12 mt-2 rounded font-medium bg-gradient-to-b from-[#656565] to-[#232323]'
      onClick={() => isAlt
        ? setState &&
        calcText.mainText &&
        displayText.mainText &&
        setState(displayText.mainText, calcText.mainText)
        : setState &&
        calcText.topText &&
        displayText.topText &&
        setState(displayText.topText, calcText.topText)
      }>
      <p className={`absolute top-0 right-1 text-orange-500 text-xs ${!calcText.topText && "opacity-25"}`}>{buttonText.topText}</p>
      <div className='flex justify-center items-center'>
        <p className={`text-white ${fontSize ? fontSize : 'text-2xl'} font-medium ${!calcText.mainText && "opacity-25"}`}>{buttonText.mainText}</p>
      </div>
      <p className={`absolute bottom-0 right-1 text-xs text-green-500 ${!calcText.bottomText && "opacity-25"}`}>{buttonText.bottomText}</p>
    </ button>
  )
}

export default MainButton;