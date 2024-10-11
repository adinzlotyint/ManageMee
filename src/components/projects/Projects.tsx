import "../../styles/Projects.css";
import InvoicingDetails from "./containers/InvoicingDetails";
import Notes from "./containers/Notes";
import ProjectSummary from "./containers/ProjectSummary";
import SheepsTable from "./containers/SheepsTable";

//Projects page layout
const Projects = () => {
  return (
    <div className="projects-grid-layout font-[Jua] text-2xl">
      <div className="col-start-2 row-start-2 projects-container">
        <ProjectSummary />
      </div>
      <button className="col-start-2 row-start-4 projects-container text-center">
        Assign yourself
      </button>
      <div className="relative col-start-2 row-start-6 projects-container row-span-8">
        <SheepsTable />
      </div>
      <div className="relative col-start-4 row-start-2 projects-container row-span-5">
        <InvoicingDetails />
      </div>
      <div className="relative col-start-6 row-start-2 projects-container row-span-3">
        <Notes />
      </div>
      <input
        type="text"
        className="col-start-6 row-start-6 projects-container"
        placeholder="Search throught table . . ."
      />
      <div className="col-start-4 row-start-8 projects-container row-span-8 col-span-3">
        Table
      </div>
    </div>
  );
};

export default Projects;
