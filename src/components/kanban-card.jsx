import { CircleUserRound, Flag } from "lucide-react";

const priorityColors = {
  Low: {
    color: "#1e90ff",
    fill: "#007acc",
  },
  Medium: {
    color: "#f1c40f",
    fill: "#d4af37",
  },
  High: {
    color: "#e74c3c",
    fill: "#c0392b",
  },
};

export function KanbanCard({ task }) {
  return (
    <div className="kanban_card" draggable="true">
      <p className="card_title">{task.title}</p>

      <div className="card_info">
        <CircleUserRound size={18} />
        {task.developer && (
          <div className="card_developers">
            {task.developer.split("%").map((dev, index) => {
              const dev_name_initials = dev
                .split(" ")
                .slice(0, 2)
                .map((name) => name[0])
                .join("");
              return (
                <div
                  key={dev}
                  className="dev_initial_circle"
                  title={dev}
                  style={{ zIndex: 20 - index }}
                >
                  <span>{dev_name_initials}</span>
                </div>
              );
            })}
          </div>
        )}

        {!task.developer && <span>-</span>}
      </div>

      <div className="card_info">
        <Flag
          size={16}
          fill={priorityColors[task.priority]?.fill || "transparent"}
          color={priorityColors[task.priority]?.color || "white"}
        />
        <span>{task.priority || "-"}</span>
      </div>

      <div className="card_status">
        <span>{task.status}</span>
      </div>
    </div>
  );
}
