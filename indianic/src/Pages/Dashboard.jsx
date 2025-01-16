
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import PopUpModal from '../Components/Modal/Modal';
import Header from '../Components/Header/Header';
import { deleteUser, fetchUsers } from '../Services';

const Dashboard = () => {
    const navigate = useNavigate()

    const data = [
        { name: "John Doe", dob: "1990-05-15", email: "johndoe@example1.com", role: "Admin", gender: "Male", status: "Active" },
        { name: "Alice Smith", dob: "1985-11-22", email: "alicesmith@example.com", role: "Editor", gender: "Male", status: "Inactive" },
        { name: "Bob Johnson", dob: "1992-08-30", email: "bobjohnson@example.com", role: "Viewer", gender: "Male", status: "Active" },
        { name: "Charlie Brown", dob: "1994-02-10", email: "charliebrown@example.com", role: "Admin", gender: "Female", status: "Inactive" }
    ];

    const [searchValue, setSearchValue] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tableData, setTableData] = useState(data)
    const [selectedId, setSelectedId] = useState()

    const isAdmin = localStorage.getItem("isAdmin")

    const handleSearch = (event) => {
        let filteredTableData = data.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase()) || item.email.toLowerCase().includes(searchValue.toLowerCase())
        );
        setTableData(filteredTableData)
    };

    useEffect(() => {
        fetchUsers().then((res) => {
            console.log(res)
            setTableData(res)
        })
    }, [])

    const handleDelete = async () => {
        try {
            deleteUser(selectedId)
            console.log("Deleted the user")
        } catch (error) {
            console.log("something went wrong")
        }

    }

    const handleModalOpen = (id) => {
        console.log(id)
        setSelectedId(id)
        setIsModalOpen(true)
    }


    return (
        <div>
            <Header />
            <div style={{ marginTop: "20px" }}>
                <h1>User List</h1>
                <div style={{ display: "flex", gap: "20px" }}>
                    <input
                        type="text"
                        className="form-control my-3"
                        placeholder="Search by email/name"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        style={{ width: "50%" }}
                    />
                    <button className="btn btn-danger btn-sm" style={{ height: "40px", marginTop: "13px" }} onClick={handleSearch}>Search</button>
                    {isAdmin && <div style={{ paddingLeft: "430px" }}>
                        <button className="btn btn-danger btn-sm" >Add User</button>
                    </div>}
                </div>



                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.dob}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{item.role}</td>
                                <td style={{ color: item.status == "Active" ? "green" : "red" }}>{item.status}</td>
                                <td style={{ display: "flex", gap: "10px" }}>
                                    <button className="btn btn-primary btn-sm mr-2" onClick={() => { navigate("/user-form") }}>Edit</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleModalOpen(item._id)}>Delete</button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <PopUpModal show={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleDelete} />
        </div>

    );
};

export default Dashboard;