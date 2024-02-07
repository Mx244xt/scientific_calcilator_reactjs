
const Header = () => {
  return (
    <div className='flex flex-row justify-evenly'>
      <p className="text-white" >Normal</p>
      <p className="text-white">DEC</p>
      <p className="text-white">[DEG]</p>
    </div>
  )
}

export default Header

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-evenly"
//   },
//   text: {
//     color: "white",
//     fontFamily: "Arial",
//   },
// })