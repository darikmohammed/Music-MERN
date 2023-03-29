import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  color: white;
  td,
  th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
  }

  tr td:nth-child(5),
  tr td:nth-child(6) {
    cursor: pointer;
  }
  th {
    background-color: white;
    color: black;
  }

  tr:nth-child(odd) {
    background-color: rgb(208, 133, 5);
  }

  tr:nth-child(even) {
    background-color: white;
    color: black;
  }
`;

export default Table;
