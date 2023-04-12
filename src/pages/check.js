import React, { useState } from 'react';

function DataTable() {
    const [data, setData] = useState([
        { id: 1, name: 'John Doe', age: 32 },
        { id: 2, name: 'Jane Smith', age: 27 },
        { id: 3, name: 'Bob Johnson', age: 45 },
        { id: 4, name: 'Alice Lee', age: 29 },
        { id: 5, name: 'Tom Brown', age: 38 },
        { id: 6, name: 'Sara Kim', age: 31 },
        { id: 7, name: 'Mike Chen', age: 22 },
        { id: 8, name: 'Emily Liu', age: 26 },
        { id: 9, name: 'David Wang', age: 33 },
        { id: 10, name: 'Lucy Li', age: 28 },
    ]);
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 5; // Number of items per page

    // Calculate the index of the first and last items on the current page
    const lastIndex = currentPage * pageSize;
    const firstIndex = lastIndex - pageSize;

    // Slice the data array to get only the items on the current page
    const currentData = data.slice(firstIndex, lastIndex);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                {currentPage > 1 && (
                    <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
                )}
                {currentPage < Math.ceil(data.length / pageSize) && (
                    <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                )}
            </div>
        </div>
    );
}

export default DataTable;
