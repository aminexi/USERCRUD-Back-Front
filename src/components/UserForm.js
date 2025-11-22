import React, { useEffect, useState } from "react";
import "./User.css";

export default function UserForm({ onSave, editing, onCancel }) {
    const [form, setForm] = useState({
        nom: "",
        email: "",
        age: ""
    });

    useEffect(() => {
        if (editing) {
            setForm({
                id: editing.id,
                nom: editing.nom || "",
                email: editing.email || "",
                age: editing.age ?? ""
            });
        } else {
            setForm({ nom: "", email: "", age: "" });
        }
    }, [editing]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submit = (e) => {
        e.preventDefault();
        onSave({
            ...form,
            age: form.age === "" ? null : Number(form.age)
        });

        if (!editing) setForm({ nom: "", email: "", age: "" });
    };

    return (
        <div className="form-card">
            <h3>{form.id ? "Modifier utilisateur" : "Ajouter un utilisateur"}</h3>

            <form onSubmit={submit} className="form-container">
                <div className="form-group">
                    <label>Nom</label>
                    <input
                        type="text"
                        name="nom"
                        placeholder="Entrez le nom"
                        value={form.nom}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Entrez l'email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={form.age}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-buttons">
                    <button type="submit" className="btn btn-save">
                        {form.id ? "Enregistrer" : "Ajouter"}
                    </button>

                    {form.id && (
                        <button
                            type="button"
                            className="btn btn-cancel"
                            onClick={onCancel}
                        >
                            Annuler
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
