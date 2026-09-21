import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateName(event: React.ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>): void {
        setIsStudent(event.target.checked);
    }

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>): void {
        setEditMode(event.target.checked);

        if (event.target.checked) {
            setName("");
        }
    }

    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                type="switch"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />

            {editMode ?
                <div>
                    <Form.Control value={name} onChange={updateName} />
                    <Form.Check
                        id="student-checkbox"
                        type="checkbox"
                        label="Student"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                </div>
            :   <div>
                    {name} is {isStudent ? "" : "not "}a student
                </div>
            }
        </div>
    );
}
