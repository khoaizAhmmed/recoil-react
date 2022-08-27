import { useRecoilValue } from 'recoil'
import { todoListStatusState } from '../store'
export default function TodoListStats() {
    const {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    } = useRecoilValue(todoListStatusState);
  
    const formattedPercentCompleted = Math.round(percentCompleted);
  
    return (
      <ul>
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUncompletedNum}</li>
        <li>Percent completed: {formattedPercentCompleted}</li>
      </ul>
    );
  }