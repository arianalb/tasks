import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";
import { duplicateQuestion } from "./objects";
/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQuestions = questions.filter(
        (question: Question): boolean => question.published,
    );
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmptyQuestions = questions.filter((question: Question): boolean =>
        (
            question.body === "" &&
            question.expected == "" &&
            question.options.length === 0
        ) ?
            false
        :   true,
    );
    return nonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    const q = questions.find(
        (question: Question): boolean => question.id === id,
    );
    if (q?.id === id) {
        return q;
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const removeQuestion = questions.filter(
        (question: Question): boolean => !(question.id === id),
    );
    return removeQuestion;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map((question: Question): string => question.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sums = questions.map((question: Question): number => question.points);

    return sums.reduce(
        (currentSum: number, sum: number) => currentSum + sum,
        0,
    );
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const publishedQuestions = getPublishedQuestions(questions);
    return sumPoints(publishedQuestions);
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const questionCSV =
        "id,name,options,points,published\n" +
        questions
            .map(
                (question: Question): string =>
                    `${question.id},${question.name},${question.options.length},${question.points},${question.published}`,
            )
            .join("\n");
    return questionCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false,
        }),
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const publishedQuestions = questions.map(
        (question: Question): Question => ({ ...question, published: true }),
    );
    return publishedQuestions;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    //filter by question type 
    const multChoice = questions
        .filter(
            (question: Question): boolean =>
                question.type === "multiple_choice_question",
        );

    
    const shortAnswer = questions
        .filter(
            (question: Question): boolean =>
                question.type === "short_answer_question",
        );

    //if filtered is less than all then its false, otherwise its true
    return multChoice.length===questions.length || shortAnswer.length===questions.length;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    const newQuestions = [...questions, makeBlankQuestion(id, name, type)];
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    //make deep copy
    const newCopy = questions.map(
        (question: Question): Question => ({ ...question }),
    );
    //edit the field
    const renamedQuestion = newCopy.map(
        (question: Question): Question =>
            question.id === targetId ?
                { ...question, name: newName }
            :   { ...question },
    );
    return renamedQuestion;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] { 
    const targetQuestion = questions.find((questions:Question): boolean => questions.id === targetId,);
    
    if((targetQuestion?.type === "multiple_choice_question")&& (newQuestionType === "short_answer_question")){
        return questions.map((question:Question): Question=> question.id === targetId ? {...question, type: newQuestionType, options:[] }:{...question});
    }else{
        return questions.map((question:Question): Question=> question.id === targetId ? {...question, type: newQuestionType }:{...question});
    }
}

function addElement(
    options: string[],
    targetIndex: number,
    newOption: string,
): string[] {
    if (targetIndex === -1) {
        return [...options, newOption];
    }

    return options.map((option: string, index: number): string =>
        index === targetIndex ? newOption : option,
    );
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    const newQuestions = questions.map(
        (question: Question): Question =>
            question.id === targetId ?
                {
                    ...question,
                    options: addElement(
                        question.options,
                        targetOptionIndex,
                        newOption,
                    ),
                }
            :   { ...question },
    );

    return newQuestions;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    const newQuestions = [...questions];

    const targetIndex: number = newQuestions.findIndex(
        (question: Question): boolean => question.id === targetId,
    );

    newQuestions.splice(
        targetIndex + 1,
        0,
        duplicateQuestion(newId, newQuestions[targetIndex]),
    );

    return newQuestions;
}
