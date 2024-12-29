import { KanbanCard } from "./kanban-card";

export function KanbanColumn({ statusId, title, tasks }) {
  function dragEnter(event) {
    event.preventDefault();
    event.target.classList.add("drag_zone_active");
  }

  function dragLeave(event) {
    event.target.classList.remove("drag_zone_active");
  }

  return (
    <section className="kanban_column">
      <header className="kanban_column_header">
        <div className="kanban_column_title_letter">{title[0]}</div>
        <h3 className="kanban_column_title">{title}</h3>
      </header>

      <div
        className="cards_container"
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
      >
        {tasks.map((task) => {
          return <KanbanCard key={task.id} task={task} />;
        })}
      </div>
    </section>
  );
}
