import { useEffect, useState } from "react";
import { KanbanColumn } from "./components/kanban-column";

function App() {
  const [tasksByStatus, setTasksByStatus] = useState([]);
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/tickets")
      .then((response) => response.json())
      .then((data) => {
        const tasksByStatus = data.reduce((acc, task) => {
          const { status } = task;
          if (!acc[status]) {
            acc[status] = [];
          }
          acc[status].push(task);
          return acc;
        }, {});

        setTasksByStatus(tasksByStatus);
      });

    fetch("http://localhost:3333/status")
      .then((response) => response.json())
      .then((data) => {
        setStatuses(data);
      });
  }, []);

  return (
    <>
      <h1 className="main_title">Kanban</h1>

      <main className="kanban">
        {statuses.map((status) => {
          return (
            <KanbanColumn
              key={status.id}
              statusId={status.id}
              title={status.name}
              tasks={tasksByStatus[status.name]}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
