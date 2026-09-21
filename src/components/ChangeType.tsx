import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    function changeType(): void {
        if (questionType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    }

    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            <div>
                {questionType === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </div>
        </div>
    );
}
