import "bootstrap/dist/css/bootstrap.css";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Index() {
  return (
    <div className='container py-5 px-5 h-100 todoHome'>
      <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col'>
          <div style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}>
            <div className='card-body py-2 px-2 px-md-5'>
              <p className='h2 text-center mt-3 mb-4 text-primary'>
                Task Tracker App
              </p>

              <TaskForm />
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
