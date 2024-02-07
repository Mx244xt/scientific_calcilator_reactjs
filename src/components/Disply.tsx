import { useEffect, useRef } from "react";

type Props = {
  displayText: string[];
}

const Disply = ({ displayText }: Props) => {
  const scrollBottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [displayText]);
  return (
    <div className="w-full h-40 p-3 bg-lime-100 rounded-xl overflow-auto">
      {displayText.map((item, i) => {
        return (
          <div key={i} ref={scrollBottomRef}>
            <p className="text-3xl">{item}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Disply