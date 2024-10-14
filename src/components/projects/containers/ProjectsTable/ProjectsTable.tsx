import { useState } from 'react';
import styles from './ProjectsTable.module.css';

const data = [
  {
    year: '2021',
    project: 'Apollo',
    type: 'Research',
    leader: 'John Doe',
    trader: 'Alice Johnson',
  },
  {
    year: '2019',
    project: 'Orion',
    type: 'Development',
    leader: 'Jane Smith',
    trader: 'Bob Martin',
  },
  {
    year: '2023',
    project: 'Helios',
    type: 'Research',
    leader: 'Michael Clark',
    trader: 'Charlie Evans',
  },
  {
    year: '2020',
    project: 'Poseidon',
    type: 'Marketing',
    leader: 'Olivia Wilson',
    trader: 'Eve Richards',
  },
  {
    year: '2018',
    project: 'Luna',
    type: 'Development',
    leader: 'Noah Taylor',
    trader: 'Dylan Brooks',
  },
  {
    year: '2022',
    project: 'Hercules',
    type: 'Research',
    leader: 'Sophia Moore',
    trader: 'Liam White',
  },
  {
    year: '2024',
    project: 'Zeus',
    type: 'Marketing',
    leader: 'Isabella Anderson',
    trader: 'Emma Cooper',
  },
  {
    year: '2023',
    project: 'Athena',
    type: 'Development',
    leader: 'James Lee',
    trader: 'Lucas Scott',
  },
  {
    year: '2025',
    project: 'Hermes',
    type: 'Research',
    leader: 'Mia Turner',
    trader: 'Henry Wright',
  },
  {
    year: '2017',
    project: 'Ares',
    type: 'Marketing',
    leader: 'William Hill',
    trader: 'Olivia Harris',
  },
  {
    year: '2026',
    project: 'Prometheus',
    type: 'Development',
    leader: 'Ava Martinez',
    trader: 'Benjamin Lewis',
  },
  {
    year: '2016',
    project: 'Gaia',
    type: 'Research',
    leader: 'Ethan Miller',
    trader: 'Amelia Clark',
  },
];

interface projectsData {
  year: string;
  project: string;
  type: string;
  leader: string;
  trader: string;
}

const ProjectsTable = () => {
  const [filteredData, setFilteredData] = useState(data);

  function handleSort(header: keyof projectsData) {
    const tempArr = [...filteredData];
    tempArr.sort((a, b) => a[header].localeCompare(b[header]));

    const sortArray =
      JSON.stringify(tempArr) === JSON.stringify(filteredData)
        ? tempArr.sort((a, b) => a[header].localeCompare(b[header])).reverse()
        : tempArr;

    setFilteredData(sortArray);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.tableContainer}>
          {/* Header */}
          <table>
            <colgroup>
              <col style={{ width: '5%', minWidth: '70px' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
            </colgroup>
            <thead>
              <tr>
                <th
                  onClick={() => handleSort('year')}
                  className="cursor-pointer select-none"
                >
                  Year
                </th>
                <th
                  onClick={() => handleSort('project')}
                  className="cursor-pointer select-none"
                >
                  Project name
                </th>
                <th
                  onClick={() => handleSort('type')}
                  className="cursor-pointer select-none"
                >
                  Project type
                </th>
                <th
                  onClick={() => handleSort('leader')}
                  className="cursor-pointer select-none"
                >
                  Sheep&apos;s leader
                </th>
                <th
                  onClick={() => handleSort('trader')}
                  className="cursor-pointer select-none"
                >
                  Sheep trader
                </th>
              </tr>
            </thead>
          </table>
          {/* Body */}
          <div className={styles.tableBody}>
            <table>
              <colgroup>
                <col style={{ width: '5%', minWidth: '70px' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '20%' }} />
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
