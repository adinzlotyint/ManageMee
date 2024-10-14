import styles from './ProjectsTable.module.css';

const data = [
  {
    year: '2022',
    project: 'XYZ',
    type: 'Type 1',
    leader: 'Adrian Ziętek',
    trader: 'Somebody Else',
  },
  {
    year: '2022',
    project: 'XYZ',
    type: 'Type 1',
    leader: 'Adrian Ziętek',
    trader: 'Somebody Else',
  },
  {
    year: '2022',
    project: 'XYZ',
    type: 'Type 1',
    leader: 'Adrian Ziętek',
    trader: 'Somebody Else',
  },
  {
    year: '2022',
    project: 'XYZ',
    type: 'Type 1',
    leader: 'Adrian Ziętek',
    trader: 'Somebody Else',
  },
  {
    year: '2022',
    project: 'XYZ',
    type: 'Type 1',
    leader: 'Adrian Ziętek',
    trader: 'Somebody Else',
  },
  {
    year: '2022',
    project: 'XYZ',
    type: 'Type 1',
    leader: 'Adrian Ziętek',
    trader: 'Somebody Else',
  },
  {
    year: '2022',
    project: 'XYZ',
    type: 'Type 1',
    leader: 'Adrian Ziętek',
    trader: 'Somebody Else',
  },
  {
    year: '2022',
    project: 'XYZ',
    type: 'Type 1',
    leader: 'Adrian Ziętek',
    trader: 'Somebody Else',
  },
  {
    year: '2022',
    project: 'XYZ',
    type: 'Type 1',
    leader: 'Adrian Ziętek',
    trader: 'Somebody Else',
  },
  {
    year: '2022',
    project: 'XYZ',
    type: 'Type 1',
    leader: 'Adrian Ziętek',
    trader: 'Somebody Else',
  },
  {
    year: '2022',
    project: 'XYZ',
    type: 'Type 1',
    leader: 'Adrian Ziętek',
    trader: 'Somebody Else',
  },
];

const ProjectsTable = () => {
  return (
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
              <th>Year</th>
              <th>Project name</th>
              <th>Project type</th>
              <th>Sheep&apos;s leader</th>
              <th>Sheep trader</th>
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
              {data.length === 0 ? (
                <tr>
                  <td colSpan={5} className={styles.emptyRow}>
                    No projects available
                  </td>
                </tr>
              ) : (
                data.map((project, index) => (
                  <tr key={index}>
                    <td>{project.year}</td>
                    <td>{project.project}</td>
                    <td>{project.type}</td>
                    <td>{project.leader}</td>
                    <td>{project.trader}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectsTable;
