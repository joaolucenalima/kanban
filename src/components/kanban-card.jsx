import { CircleUserRound, Flag } from "lucide-react";

export function KanbanCard({ task }) {
  const priorityColors = {
    Baixa: {
      color: "#1e90ff",
      fill: "#007acc",
    },
    Média: {
      color: "#f1c40f",
      fill: "#d4af37",
    },
    Alta: {
      color: "#e74c3c",
      fill: "#c0392b",
    },
  };

  return (
    <div className="kanban_card" draggable="true">
      <p className="card_title">{task.title}</p>

      <div className="card_info">
        <CircleUserRound size={18} />
        <span>João Vitor</span>
      </div>

      <div className="card_info">
        <Flag
          size={16}
          fill={priorityColors["Alta"].fill}
          color={priorityColors["Alta"].color}
        />
        <span>Alta</span>
      </div>

      <div className="card_status">
        <span>{task.status}</span>
      </div>
    </div>
  );
}
