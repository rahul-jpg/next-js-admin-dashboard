import React, { useState } from 'react';

function DataTable() {

    const [data, setData] = useState([
        {
            name: "rahul",
            age: '28',
            occupation: "developer"
        },
        {
            name: "ashish",
            age: '21',
            occupation: "chaiwala"
        },
        {
            name: "pinky",
            age: '12',
            occupation: "bank"
        },
    ]);

    const [filteredData, setFilteredData] = useState(data);
    const [sortOrder, setSortOrder] = useState('asc');
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const handleSort = (key) => {
        const order = sortOrder === 'asc' ? 'desc' : 'asc';
        const sorted = filteredData.sort((a, b) => {
            const comparison = a[key].localeCompare(b[key]);
            return order === 'asc' ? comparison : -comparison;
        });
        setFilteredData(sorted);
        setSortOrder(order);
    };

    const handleFilterChange = (event) => {
        const value = event.target.value.toLowerCase();
        console.log(value);
        const filtered = data.filter((item) =>
            item.name.toLowerCase().includes(value) ||
            item.age.toString().includes(value) ||
            item.occupation.toLowerCase().includes(value)
        );
        setFilteredData(filtered);
    };



    const handleCheckboxChange = (event, row) => {
        const checked = event.target.checked;
        if (checked) {
            setSelectedRows([...selectedRows, row]);
        } else {
            setSelectedRows(selectedRows.filter((r) => r.name !== row.name));
        }
    };

    const handleSelectAllChange = (event) => {
        const checked = event.target.checked;
        if (checked) {
            setSelectedRows(data);
            setSelectAll(true);
        } else {
            setSelectedRows([]);
            setSelectAll(false);
        }
    };

    const handleDelete = () => {
        let dataFilter = filteredData.filter(row => selectedRows.every(item => row.name === item.name) === false)
        setFilteredData(dataFilter)
        setData(dataFilter)
        setSelectedRows([])
    }


    const tableRows = filteredData.map((item, index) => {
        let check = selectedRows.find(row => row.name === item.name)
        return (<tr key={index}>
            <td><input type="checkbox" checked={selectAll || check} onChange={(event) => handleCheckboxChange(event, item)} /></td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.occupation}</td>
        </tr>

        )
    });

    return (
        <div className='bg-white'>
            <button onClick={handleDelete}>delete</button>
            <input type="text" onChange={handleFilterChange} placeholder="Filter..." />
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" checked={selectAll} onChange={handleSelectAllChange} /></th>
                        <th onClick={() => handleSort('name')}>Name</th>
                        <th onClick={() => handleSort('age')}>Age</th>
                        <th onClick={() => handleSort('occupation')}>Occupation</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
