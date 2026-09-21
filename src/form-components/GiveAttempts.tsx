import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [amount, setAmount] = useState<string>("");

    function updateAmount(event: React.ChangeEvent<HTMLInputElement>): void {
        setAmount(event.target.value);
    }

    function useAttempt(): void {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }

    function gainAttempts(): void {
        const numberToGain = parseInt(amount);

        if (!isNaN(numberToGain)) {
            setAttempts(attempts + numberToGain);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attempts}</div>
            <input type="number" value={amount} onChange={updateAmount} />
            <button onClick={useAttempt} disabled={attempts === 0}>
                Use
            </button>
            <button onClick={gainAttempts}>Gain</button>
        </div>
    );
}
