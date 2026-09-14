import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        if (attempts > 0) {
            setAttempts(attempts - 1);
            setInProgress(true);
        }
    }

    function stopQuiz(): void {
        setInProgress(false);
    }

    function mulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <div>Attempts: {attempts}</div>

            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>

            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>

            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
