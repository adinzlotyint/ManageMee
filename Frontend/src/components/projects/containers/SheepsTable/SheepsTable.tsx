import styles from "./SheepsTable.module.css";
import SmallSheep from "../../../../assets/SmallSheep.svg";

const data: sheepsData[] = [
  { sheep: "Adrian Ziętek", md: 3 },
  { sheep: "TestTh", md: 2 },
  { sheep: "TestTh", md: 3 },
  { sheep: "TestTh", md: 4 },
  { sheep: "TestTh", md: 5 },
  { sheep: "TestTh", md: 6 },
  { sheep: "TestTh", md: 7 },
  { sheep: "TestTh", md: 3 },
  { sheep: "TestTh", md: 1 },
  { sheep: "TestTh", md: 4 },
  { sheep: "TestTh", md: 2 },
  { sheep: "TestTh", md: 7 },
  { sheep: "TestTh", md: 6 },
  { sheep: "TestTh", md: 2 },
];

interface sheepsData {
  sheep: string;
  md: number;
}

const SheepsTable = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tableContainer}>
        <table>
          <colgroup>
            <col style={{ width: "70%" }} />
            <col style={{ width: "30%" }} />
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
              <col style={{ width: "70%" }} />
              <col style={{ width: "30%" }} />
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
            <col style={{ width: "70%" }} />
            <col style={{ width: "30%" }} />
          </colgroup>
          <tfoot>
            <tr>
              <td>
                <img
                  src={SmallSheep}
                  alt="SmallSheep"
                  style={{ verticalAlign: "bottom" }}
                />
              </td>
              <td style={{ textAlign: "center" }}>
                {data.reduce((n, { md }) => n + md, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SheepsTable;
