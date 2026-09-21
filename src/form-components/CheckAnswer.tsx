import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>): void {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <input value={answer} onChange={updateAnswer} />
            {answer === expectedAnswer ?
                <span>✔️</span>
            :   <span>❌</span>}
        </div>
    );
}
