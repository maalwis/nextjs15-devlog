// src/app/react-learning/asynchronous/page.jsx

'use client';
import React, { useState } from 'react';

/**
 * Understanding the Asynchronous Nature of React State Updates
 *
 * This component demonstrates how React state updates are asynchronous
 * and why it is important to use updater functions when your new state depends
 * on the previous state. In React, when you call a state setter function like
 * setCount, the state change does not occur immediately. Instead, React schedules
 * the update, and may batch multiple updates for performance optimizations.
 *
 * This means that if you perform several state updates in a row, they might all
 * refer to the same initial state value if you don't use an updater function.
 * Updater functions ensure that each update works with the most recent state.
 */
export default function AsyncStateUpdates() {
    // Initialize a counter state with an initial value of 0.
    const [count, setCount] = useState(0);

    /**
     * incrementCount: Increments count by 1.
     * This is a straightforward state update where we add 1 to the current count.
     * Since state updates are asynchronous, React schedules the update and re-renders
     * the component with the new count value when ready.
     */
    const incrementCount = () => {
        setCount(count + 1);
    };

    /**
     * decrementCount: Decrements count by 1.
     * Similarly, this function subtracts 1 from the current count. Even though the update
     * is asynchronous, React ensures that the component eventually re-renders with the updated value.
     */
    const decrementCount = () => {
        setCount(count - 1);
    };

    /**
     * incrementTwiceProblem: Attempts to increment the count twice using the current state value.
     *
     * Explanation of the problem:
     * When calling setCount(count + 1) twice in a row, both calls capture the same value of 'count'
     * at the time the function is executed. For example, if count is 5:
     *   - The first call computes 5 + 1, so it sets the count to 6.
     *   - The second call also computes 5 + 1 (because count is still 5 in this execution context),
     *     so it also sets the count to 6.
     *
     * Even though two updates are scheduled, React batches them together, and the net effect
     * is that the count only increases by 1 instead of 2.
     */
    const incrementTwiceProblem = () => {
        setCount(count + 1); // Both of these use the same initial 'count'
        setCount(count + 1);
        // Final result: if the count was 5, it becomes 6, not 7.
    };

    /**
     * incrementTwiceCorrect: Correctly increments the count twice using an updater function.
     *
     * By using an updater function (i.e., a function that receives the previous state as an argument),
     * we guarantee that each update is based on the most current state value.
     *
     * For example, if count is 5:
     *   - The first updater call receives 5 and returns 6.
     *   - The second updater call then receives the updated value (6) and returns 7.
     *
     * Thus, the count correctly increments by 2.
     */
    const incrementTwiceCorrect = () => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    };

    /**
     * incrementTwiceAlternative: Alternative syntax to increment the count twice.
     *
     * This version uses a shorter parameter name for clarity. The logic is exactly the same
     * as incrementTwiceCorrect – it leverages the updater function to ensure each state update
     * has the latest value.
     */
    const incrementTwiceAlternative = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
    };

    /**
     * incrementByAmount: Increments the count by a given amount.
     *
     * This demonstrates a more dynamic use of updater functions. Instead of incrementing by 1,
     * this function allows you to pass in any number as the increment. It uses the updater function
     * to ensure that the new value is based on the latest state.
     */
    const incrementByAmount = (amount) => {
        setCount(prevCount => prevCount + amount);
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-4">Understanding Asynchronous State Updates</h1>

            <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Current Count: {count}</h2>

                <div className="flex flex-wrap gap-2">
                    {/* Basic increment/decrement buttons */}
                    <button
                        onClick={decrementCount}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Decrement (-1)
                    </button>

                    <button
                        onClick={incrementCount}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Increment (+1)
                    </button>

                    {/* Button demonstrating the problem with multiple state updates */}
                    <button
                        onClick={incrementTwiceProblem}
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                        +2 (Incorrect Way)
                    </button>

                    {/* Button using the updater function approach */}
                    <button
                        onClick={incrementTwiceCorrect}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        +2 (Correct Way)
                    </button>

                    {/* Button using the alternative naming convention */}
                    <button
                        onClick={incrementTwiceAlternative}
                        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                    >
                        +2 (Alternative Syntax)
                    </button>

                    {/* Buttons demonstrating dynamic increments */}
                    <button
                        onClick={() => incrementByAmount(5)}
                        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                    >
                        +5
                    </button>

                    <button
                        onClick={() => incrementByAmount(10)}
                        className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
                    >
                        +10
                    </button>
                </div>
            </div>

            {/* Additional Educational Explanations */}
            <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-bold mb-2">Key Concept: Asynchronous State Updates</h3>
                    <p>
                        In React, state updates are <strong>asynchronous</strong> by design. When you invoke a state setter function such as <code>setCount</code>,
                        the update is scheduled rather than happening instantly. This allows React to optimize performance by batching
                        multiple state updates into a single re-render.
                    </p>
                    <p>
                        This asynchronous behavior means that reading the state immediately after calling its setter might not reflect the new value.
                        Instead, the update is queued, and the component is re-rendered later with the latest state.
                    </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-bold mb-2">The Problem with Direct State Updates</h3>
                    <p>
                        If you perform multiple state updates that depend on the current state value (e.g., <code>setCount(count + 1)</code>),
                        each update may refer to the same outdated value of <code>count</code>. This can lead to unexpected results.
                    </p>
                    <pre className="bg-gray-100 p-2 mt-2 rounded overflow-x-auto">
                        {`// If count is 5:
                        setCount(count + 1); // computes as setCount(5 + 1)
                        setCount(count + 1); // computes as setCount(5 + 1)
                        // Final result: count becomes 6, not 7`}
                    </pre>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-bold mb-2">Using Updater Functions to Solve the Problem</h3>
                    <p>
                        To ensure that each state update works with the most current value, pass an updater function to <code>setCount</code>.
                        This function takes the previous state as its argument, ensuring that consecutive updates are applied correctly.
                    </p>
                    <pre className="bg-gray-100 p-2 mt-2 rounded overflow-x-auto">
                        {`// If count is 5:
                        setCount(prevCount => prevCount + 1); // prevCount is 5, returns 6
                        setCount(prevCount => prevCount + 1); // prevCount is now 6, returns 7
                        // Final result: count becomes 7`}
                    </pre>
                    <p className="mt-2">
                        Reacts guarantee that the updater function receives the most up-to-date state value makes it the recommended approach
                        when new state depends on the previous state.
                    </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-bold mb-2">When to Use Updater Functions</h3>
                    <ul className="list-disc pl-5">
                        <li>When the new state depends on the previous state value</li>
                        <li>When performing multiple state updates in quick succession</li>
                        <li>Inside event handlers or asynchronous callbacks where state might change unexpectedly</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
