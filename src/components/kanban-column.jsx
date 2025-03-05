import { KanbanCard } from "./kanban-card";

export function KanbanColumn({ statusId, title, tasks }) {
  function dragEnter(event) {
    event.preventDefault();

    const activeDragZones = document.querySelectorAll(".drag_zone_active");
    activeDragZones.forEach((element) => {
      element.classList.remove("drag_zone_active");
    });

    if (!event.currentTarget.classList.contains("drag_zone_active")) {
      event.currentTarget.classList.add("drag_zone_active");
    }
  }

  function dragOver(event) {
    event.preventDefault();
    const activeDragZones = document.querySelectorAll(".drag_zone_active");
    activeDragZones.forEach((element) => {
      element.classList.remove("drag_zone_active");
    });
  }

  return (
    <section className="kanban_column" onDragEnter={dragEnter} onDragEnd={dragOver}>
      <header className="kanban_column_header">
        <div className="kanban_column_title_letter">{title[0]}</div>
        <h3 className="kanban_column_title">{title}</h3>
      </header>

      <div className="cards_container">
        {tasks.map((task) => {
          return <KanbanCard key={task.id} task={task} />;
        })}
      </div>
    </section>
  );
}
