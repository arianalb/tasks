import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Easter"
    | "Halloween"
    | "New Year's Day"
    | "Valentine's Day";
const HOLIDAYS_ALPHABETICAL: Holiday[] = [
    "Christmas",
    "Easter",
    "Halloween",
    "New Year's Day",
    "Valentine's Day",
];
const HOLIDAYS_BY_YEAR: Holiday[] = [
    "New Year's Day",
    "Valentine's Day",
    "Easter",
    "Halloween",
    "Christmas",
];
const HOLIDAY_EMOJIS: Record<Holiday, string> = {
    Christmas: "🎄",
    Easter: "🐰",
    Halloween: "🎃",
    "New Year's Day": "🎉",
    "Valentine's Day": "💗",
};
export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");
    function cycleAlphabetically(): void {
        const currentIndex = HOLIDAYS_ALPHABETICAL.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % HOLIDAYS_ALPHABETICAL.length;
        setHoliday(HOLIDAYS_ALPHABETICAL[nextIndex]);
    }
    function cycleByYear(): void {
        const currentIndex = HOLIDAYS_BY_YEAR.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % HOLIDAYS_BY_YEAR.length;
        setHoliday(HOLIDAYS_BY_YEAR[nextIndex]);
    }
    return (
        <div>
            {" "}
            <div> Holiday: {HOLIDAY_EMOJIS[holiday]} </div>{" "}
            <Button onClick={cycleAlphabetically}> Alphabet </Button>{" "}
            <Button onClick={cycleByYear}> Year </Button>{" "}
        </div>
    );
}
