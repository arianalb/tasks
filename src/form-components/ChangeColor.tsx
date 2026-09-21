import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>): void {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>

            {COLORS.map((colorOption: string) => (
                <Form.Check
                    key={colorOption}
                    type="radio"
                    name="color"
                    label={colorOption}
                    value={colorOption}
                    checked={color === colorOption}
                    onChange={updateColor}
                />
            ))}

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                }}
            >
                {color}
            </div>
        </div>
    );
}
