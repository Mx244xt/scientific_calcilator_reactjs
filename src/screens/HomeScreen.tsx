import Disply from '../components/Disply';
import MainButton from '../components/MainButton';
import SubButton from '../components/SubButton';
import { ButtonProps } from '../types/button';
import Header from '../components/Header';
import calcProperties from '../lib/calcProperties';
import useBttonAction from '../hooks/useBttonAction';
import CustomizedSwitches from '../components/CustomizedSwitches';

const HomeScreen = () => {
  const { mainButtonObj, subButtonObj } = calcProperties();
  const { setState, isAlt, displaytexts } = useBttonAction();

  return (
    <div className='flex justify-center mt-2 lg:mt-10 lg:mb-10 w-auto h-auto rounded-3xl bg-gray-900'>
      <div className='flex flex-col justify-center m-5 mt-7 p-5 pt-2 pb-2 w-96 h-auto bg-black'>
        <CustomizedSwitches />
        <Header />
        <div className='flex justify-center'>
          <Disply displayText={displaytexts} />
        </div>
        <div className='flex flex-col'>
          {subButtonObj.map((items, i) => (
            <div key={i} className='flex flex-row justify-between'>
              {items.map((item: ButtonProps, j) => (
                <SubButton
                  key={`${i}-${j}`}
                  isAlt={isAlt}
                  setState={setState}
                  buttonText={item.buttonText}
                  displayText={item.displayText}
                  calcText={item.calcText}
                  fontColor={item.fontColor}
                  bgColor={item.bgColor}
                  altColor={item.altColor}
                />
              ))}
            </div>
          ))}
        </div>
        <div className='flex flex-col'>
          {mainButtonObj.map((items, i) => (
            <div key={i} className='flex flex-row justify-between'>
              {items.map((item: ButtonProps, j) => (
                <MainButton
                  key={`${i}-${j}`}
                  isAlt={isAlt}
                  setState={setState}
                  buttonText={item.buttonText}
                  displayText={item.displayText}
                  calcText={item.calcText}
                  fontSize={item.fontSize}
                />
              ))}
            </div>
          ))}
        </div>
      </div >
    </div >
  )
}

export default HomeScreen