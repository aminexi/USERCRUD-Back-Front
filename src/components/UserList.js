import React, { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import "./User.css";

const API = "http://localhost:8090/api/users";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [editing, setEditing] = useState(null);

    const load = async () => {
        const res = await axios.get(API);
        setUsers(res.data);
    };

    useEffect(() => { load(); }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Supprimer cet utilisateur ?")) return;
        await axios.delete(`${API}/${id}`);
        load();
    };

    const handleSave = async (user) => {
        if (user.id) {
            await axios.put(`${API}/${user.id}`, user);
        } else {
            await axios.post(API, user);
        }
        setEditing(null);
        load();
    };

    return (
        <div className="container">
            <h1 className="title">User Management</h1>

            <UserForm
                onSave={handleSave}
                editing={editing}
                onCancel={() => setEditing(null)}
            />

            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    {users.map(u => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.nom}</td>
                            <td>{u.email}</td>
                            <td>{u.age ?? "-"}</td>
                            <td className="actions">
                                <button
                                    className="btn btn-edit"
                                    onClick={() => setEditing(u)}
                                >
                                    Modifier
                                </button>

                                <button
                                    className="btn btn-delete"
                                    onClick={() => handleDelete(u.id)}
                                >
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {users.length === 0 && (
                    <p className="no-data">Aucun utilisateur trouvé</p>
                )}
            </div>
        </div>
    );
}
