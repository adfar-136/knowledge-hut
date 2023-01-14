
import useCounter from './usecounter'

export default function Like() {
    const {count,increment,decrement} = useCounter()
  return (
    <div>
      <button onClick={increment}>Like {count}</button>
      <button onClick={decrement}>Dislike </button>
      
    </div>
  )
}
