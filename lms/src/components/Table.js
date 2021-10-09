import styled from "styled-components";

const StyledTable = styled.table`
  border: none;
  border-collapse: seperate;
  td,
  th {
    border: none;
  }
  td {
    padding: 5px 10px;
  }
  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
      cursor: pointer;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
`;

const TableMarkup = ({ titles, data }) => (
  <StyledTable>
    <colgroup>
      {titles.map((title, index) => (
        <col key={index} />
      ))}
    </colgroup>
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {titles.map((title, index) => (
            <td key={index}>{item[title]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

const Table = ({ data }) => (
  <TableMarkup titles={Object.keys(data[0])} data={data} />
);

export default Table;
