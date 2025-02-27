import styles from "./Projects.module.css";
import InvoicingDetails from "./containers/InvoicingDetails/InvoicingDetails";
import Notes from "./containers/Notes/Notes";
import ProjectsTable from "./containers/ProjectsTable/ProjectsTable";
import ProjectSummary from "./containers/ProjectSummary/ProjectSummary";
import SheepsTable from "./containers/SheepsTable/SheepsTable";

//Projects page layout
const Projects = () => {
  return (
    <main className={styles.projectsGridLayout}>
      <div className={styles.projectSummary}>
        <ProjectSummary />
      </div>
      <button className={styles.assignButton}>Assign yourself</button>
      <div className={styles.sheepsTable}>
        <SheepsTable />
      </div>
      <div className={styles.invoicingDetails}>
        <InvoicingDetails />
      </div>
      <div className={styles.notes}>
        <Notes />
      </div>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search through table . . ."
      />
      <div className={styles.projectsTable}>
        <ProjectsTable />
      </div>
    </main>
  );
};

export default Projects;
