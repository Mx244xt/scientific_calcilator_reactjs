import Disply from '../components/Disply';
import MainButton from '../components/MainButton';
import SubButton from '../components/SubButton';
import { ButtonProps } from '../types/button';
import Header from '../components/Header';
import calcProperties from '../lib/calcProperties';
import useBttonAction from '../hooks/useBttonAction';

const HomeScreen = () => {
  const { mainButtonObj, subButtonObj } = calcProperties();
  const { setState, isAlt, displaytexts } = useBttonAction();

  return (
    <div className='flex flex-col justify-center mt-2 lg:mt-10 lg:mb-10 p-5 w-96 h-auto rounded-xl bg-black'>
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
  )
}

export default HomeScreen