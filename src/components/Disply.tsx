import { useEffect, useRef } from "react";

type Props = {
  displayText: string[][];
}

const Disply = ({ displayText }: Props) => {
  const scrollBottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [displayText]);
  return (
    <div id="disp" className="w-full h-40 p-3 bg-lime-100 rounded-xl overflow-auto border-2 border-white">
      {displayText.map((items, i) => {
        return (
          <div key={i} className="flex flex-wrap">
            {items.map((item, j) => {
              return (
                <div key={j} ref={scrollBottomRef} className="">
                  <p className="text-3xl break-all">{item}</p>
                </div>
              )
            })}
          </div>)
      })}
    </div>
  )
}

export default Disply