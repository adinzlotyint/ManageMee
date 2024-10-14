import styles from './Projects.module.css';
import InvoicingDetails from './containers/InvoicingDetails/InvoicingDetails';
import Notes from './containers/Notes/Notes';
import ProjectsTable from './containers/ProjectsTable/ProjectsTable';
import ProjectSummary from './containers/ProjectSummary/ProjectSummary';
import SheepsTable from './containers/SheepsTable/SheepsTable';

//Projects page layout
const Projects = () => {
  return (
    <main
      className={`${styles['projects-grid-layout']} font-[Jua] text-2xl mb-4`}
    >
      <div className="col-start-2 row-start-2">
        <ProjectSummary />
      </div>
      <button className="col-start-2 row-start-4 text-center">
        Assign yourself
      </button>
      <div className="relative col-start-2 row-start-6 row-span-8">
        <SheepsTable />
      </div>
      <div className="relative col-start-4 row-start-2 row-span-5">
        <InvoicingDetails />
      </div>
      <div className="relative col-start-6 row-start-2 row-span-3">
        <Notes />
      </div>
      <input
        type="text"
        className="col-start-6 row-start-6"
        placeholder="Search through table . . ."
      />
      <div className="col-start-4 row-start-8 row-span-8 col-span-3">
        <ProjectsTable />
      </div>
    </main>
  );
};

export default Projects;
