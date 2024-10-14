import styles from './SheepsTable.module.css';
import SmallSheep from '../../../../assets/SmallSheep';

const data = [
  { sheep: 'Adrian Ziętek', md: 'TestTd' },
  { sheep: 'TestTh', md: 'TestTd' },
  { sheep: 'TestTh', md: 'TestTd' },
  { sheep: 'TestTh', md: 'TestTd' },
  { sheep: 'TestTh', md: 'TestTd' },
  { sheep: 'TestTh', md: 'TestTd' },
  { sheep: 'TestTh', md: 'TestTd' },
  { sheep: 'TestTh', md: 'TestTd' },
  { sheep: 'TestTh', md: 'TestTd' },
  { sheep: 'TestTh', md: 'TestTd' },
  { sheep: 'TestTh', md: 'TestTd' },
  { sheep: 'TestTh', md: 'TestTd' },
  { sheep: 'TestTh', md: 'TestTd' },
  { sheep: 'TestTh', md: 'TestTd' },
];

const SheepsTable = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tableContainer}>
        {/* Header */}
        <table>
          <colgroup>
            <col style={{ width: '70%' }} />
            <col style={{ width: '30%' }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Sheeps</th>
              <th scope="col">MDs</th>
            </tr>
          </thead>
        </table>
        {/* Body */}
        <div className={styles.tableBody}>
          <table>
            <colgroup>
              <col style={{ width: '70%' }} />
              <col style={{ width: '30%' }} />
            </colgroup>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.sheep}</td>
                  <td>{row.md}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Footer */}
        <table>
          <colgroup>
            <col style={{ width: '70%' }} />
            <col style={{ width: '30%' }} />
          </colgroup>
          <tfoot>
            <tr>
              <td>
                <SmallSheep />
              </td>
              <td>TBA</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SheepsTable;
