import { useEffect, useState } from "react";
import styles from "./ProjectsTable.module.css";

interface projectsData {
  year: string;
  project: string;
  type: string;
  leader: string;
  trader: string;
}

const ProjectsTable = () => {
  const [filteredData, setFilteredData] = useState<projectsData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5042/projects", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          console.error(`HTTP error: Status ${response.status}`);
        } else {
          const postsData = await response.json();
          setFilteredData(postsData);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  function handleSort(header: keyof projectsData) {
    if (filteredData != null && filteredData.length > 0) {
      const tempArr = [...filteredData];
      tempArr.sort((a, b) => a[header].localeCompare(b[header]));

      const sortArray =
        JSON.stringify(tempArr) === JSON.stringify(filteredData)
          ? tempArr.sort((a, b) => a[header].localeCompare(b[header])).reverse()
          : tempArr;

      setFilteredData(sortArray);
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.tableContainer}>
          {/* Header */}
          <table>
            <colgroup>
              <col style={{ width: "5%", minWidth: "70px" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
            </colgroup>
            <thead>
              <tr>
                <th onClick={() => handleSort("year")}>Year</th>
                <th onClick={() => handleSort("project")}>Project name</th>
                <th onClick={() => handleSort("type")}>Project type</th>
                <th onClick={() => handleSort("leader")}>
                  Sheep&apos;s leader
                </th>
                <th onClick={() => handleSort("trader")}>Sheep trader</th>
              </tr>
            </thead>
          </table>
          {/* Body */}
          <div className={styles.tableBody}>
            <table>
              <colgroup>
                <col style={{ width: "5%", minWidth: "70px" }} />
                <col style={{ width: "20%" }} />
                <col style={{ width: "20%" }} />
                <col style={{ width: "20%" }} />
                <col style={{ width: "20%" }} />
              </colgroup>
              <tbody>
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={5} className={styles.emptyRow}>
                      No projects available
                    </td>
                  </tr>
                ) : (
                  filteredData
                    .map((project, index) => (
                      <tr key={index}>
                        <td>{project.year}</td>
                        <td>{project.project}</td>
                        <td>{project.type}</td>
                        <td>{project.leader}</td>
                        <td>{project.trader}</td>
                      </tr>
                    ))
                    .sort()
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsTable;
