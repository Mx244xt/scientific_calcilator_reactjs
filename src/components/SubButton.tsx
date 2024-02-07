import { ButtonProps } from '../types/button';

const SubButton = ({ setState, isAlt, buttonText, displayText, calcText, bgColor, fontColor }: ButtonProps) => {
  return (
    <div>
      <div className='flex justify-center '>
        <p className={`h-4 text-center text-orange-400 text-xs ${!calcText.topLeftText && "opacity-50"}`}>{displayText.topLeftText}</p>
        <p className={`h-4 text-green-400 text-xs ${!calcText.topRightText && "opacity-50"}`} >{displayText.topRightText}</p>
      </div>
      <button
        className={`flex justify-center items-center w-16 h-8  ${bgColor ? bgColor : "bg-gradient-to-b from-[#E4E6F3] via-[#A8AAB5] to-[#63656F]"} rounded ${!calcText.mainText && "opacity-70"}`}
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "space-between"
//   },
//   TouchableHighlight: {
//     borderRadius: 5
//   },
//   linearGradient: {
//     justifyContent: "center",
//     alignItems: "center",
//     height: 30,
//     margin: 1,
//     borderRadius: 2
//   },
//   mainText: {
//     color: "#000",
//     fontSize: 22,
//     fontWeight: "500",
//     fontFamily: "Arial",
//   },
//   textTopContainer: {
//     flexDirection: "row",
//     marginTop: 2,
//   },
//   textLeftTop: {
//     flex: 1,
//     justifyContent: "center",
//     textAlign: "center",
//     color: "orange",
//     fontSize: 14,
//     fontFamily: "Arial",
//   },
//   textRightTop: {
//     color: "green",
//     fontSize: 14,
//     fontFamily: "Arial",
//   },
// });