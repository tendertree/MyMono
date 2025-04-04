/*
 * Simple Todo Task Line
 */
interface TodoTaskProps {
  id: string;
  title: string;
  state: string;
}

interface TaskProps {
  task: TodoTaskProps;
  onArchiveTask?: () => void;
  onPinTask?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }: TaskProps) {
  return (
    <div className="list-item bg-red-100">
      <label htmlFor={`title-${id}`} aria-label={title}>
        <input type="text" value={title} readOnly name="title" id={`title-${id}`} />
      </label>
    </div>
  );
}

