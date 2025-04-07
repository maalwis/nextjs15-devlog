'use client';
import { useState } from 'react';

// ReactLearningPage is a single component that demonstrates three key concepts:
// 1. Introduction to React Hooks
// 2. Understanding State in React
// 3. Setting State in a Function using the useState hook (demonstrated via a counter-example)
function ReactHooksAndState (){
    //////////////////////////////////////////////////////////////////////////////
    // SECTION 1: INTRODUCTION TO REACT HOOKS
    //////////////////////////////////////////////////////////////////////////////
    //
    // In this first section, we introduce React Hooks.
    // React Hooks are special functions provided by React that allow you to use state and
    // other React features in functional components. Before hooks, you needed class components
    // to manage state or lifecycle methods. Hooks simplify the component logic by making
    // it possible to manage these features directly within functional components.
    //
    // One of the most important hooks is the useState hook, which lets you add state to a
    // functional component. With hooks, you can create dynamic, interactive user interfaces
    // that update efficiently in response to user actions, all without reloading the entire page.
    //
    // This approach also leads to more modular and reusable code.
    //
    //////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////////////
    // SECTION 2: UNDERSTANDING STATE IN REACT
    //////////////////////////////////////////////////////////////////////////////
    //
    // In React, "state" refers to data that a component manages and which can change over time.
    // State is similar to a bookmark in a book that keeps track of your current position.
    // When the state changes, React automatically re-renders the component to reflect these updates.
    //
    // Unlike regular JavaScript variables, state is part of the component's lifecycle and
    // its changes trigger UI updates. This dynamic updating makes your application interactive,
    // as the UI responds to user inputs like button clicks or form entries.
    //
    // Note that state differs from props. Props (short for properties) are read-only and are
    // passed from a parent component to a child component. State, on the other hand, is managed
    // within the component and can be updated based on user interaction or other events.
    //
    //////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////////////
    // SECTION 3: SETTING STATE WITH THE USE STATE HOOK (COUNTER EXAMPLE)
    //////////////////////////////////////////////////////////////////////////////
    //
    // This section demonstrates how to set up state in a functional component using the
    // useState hook. We'll build a simple counter-example where you can increment or decrement
    // a counter-value by clicking buttons.
    //
    // When you call useState, it returns an array with two items:
    //   1. The current state value (here we name it "count").
    //   2. A function to update the state (here we call it "setCount").
    //
    // In this example, we initialize the counter with a value of 0. When a user clicks a button,
    // the corresponding function updates the counter-value and React re-renders the component
    // so that the new value is displayed automatically.
    //
    // The following code implements the counter-logic:
    //   - The "incrementCount" function adds one to the current counter-value.
    //   - The "decrementCount" function subtracts one from the current counter-value.
    // These functions are connected to the onClick event of their respective buttons.
    //
    //////////////////////////////////////////////////////////////////////////////

    // useState is a React hook that allows us to add state to our functional component.
    // We destructure the returned array to get the state variable "count" and the updater function "setCount".
    // We initialize "count" with a value of 0.
    const [count, setCount] = useState(0);

    // This creates a second state variable "step" with the initial value of 1 and its setter function "setStep".
    // The step state controls how much the counter will increment or decrement when buttons are clicked.
    // This demonstrates how components can manage multiple, independent state variables using useState.
    const [step, setStep] = useState(1);

    // This function increments the count by the step value.
    // It calls the "setCount" function with the new state value.
    const incrementCount = () => {
        // Updating state using setCount triggers a re-render of the component.
        // The new value of count is the current count plus the step value.
        setCount(count + step);
    };

    // This function decrements the count by the step value.
    // Like the increment function, it updates the state which causes the component to re-render.
    const decrementCount = () => {
        setCount(count - step);
    };

    return (
        // Main container with consistent styling applied to match Next.js 15 pages
        <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
            {/* Page header with consistent styling across all pages */}
            <header className="mb-8 border-b border-gray-200 pb-4">
                <h1 className="text-3xl font-bold text-blue-600">React Hooks and State</h1>
                <p className="text-gray-600 mt-2">Learn about React hooks, state management, and functional components</p>
            </header>

            {/* SECTION 1: INTRODUCTION TO REACT HOOKS */}
            <section className="mb-8 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Introduction to React Hooks</h2>
                <div className="prose lg:prose-lg">
                    <p>
                        React Hooks are functions that let you "hook into" React features from functional components.
                        They provide a more direct API to the React concepts such as state and lifecycle methods without
                        the need to use class components. This means you can write less code while making your application
                        more interactive and efficient.
                    </p>
                    <p>
                        By using hooks, you gain the ability to separate component logic into reusable functions, which
                        simplifies maintenance and promotes code reuse across your application. Hooks are now a fundamental
                        part of modern React development.
                    </p>
                </div>
            </section>

            {/* SECTION 2: UNDERSTANDING STATE IN REACT */}
            <section className="mb-8 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Understanding State</h2>
                <div className="prose lg:prose-lg">
                    <p>
                        In the context of React, state represents data that can change over time and is used to control
                        the behavior of a component. Think of state as a dynamic bookmark that tells your component where it
                        is or what it should display. Whenever the state changes, React automatically re-renders the component,
                        ensuring that the displayed data is always up to date.
                    </p>
                    <p>
                        Unlike simple variables in JavaScript, state is deeply integrated into Reacts rendering process.
                        This means that any updates to the state will cause the component to update seamlessly, without the
                        need for manual intervention. It is this automatic update mechanism that makes state a powerful tool
                        for building interactive user interfaces.
                    </p>
                    <p>
                        Furthermore, state is different from props. While props are passed down from parent to child components
                        and remain immutable within the child, state is managed locally within a component and can change
                        in response to user interactions or other events.
                    </p>
                </div>
            </section>

            {/* SECTION 3: COUNTER EXAMPLE USING THE USE STATE HOOK */}
            <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Setting State with React Hooks: Counter Example</h2>
                <div className="prose lg:prose-lg mb-6">
                    <p>
                        The counter example below demonstrates how to use the useState hook in a functional component.
                        Here, we maintain a counter state called "count" which is initially set to 0. We then define two
                        functions, "incrementCount" and "decrementCount", to update this state in response to user actions.
                        Clicking on the respective buttons updates the counter, and because the state has changed, React
                        re-renders the component to show the new count.
                    </p>
                    <p>
                        We've enhanced this example with a "step" feature - a second state variable that controls how much
                        the counter increments or decrements with each button click. This demonstrates how a component can
                        manage multiple state variables that interact with each other.
                    </p>
                </div>

                {/* Counter-demo card with consistent card styling */}
                <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                    {/* Display the current counter-value with improved typography */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Counter: <span className="text-blue-600">{count}</span></h3>

                    {/* Input and buttons container with flex layout */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        {/* Step input with label and styling to match the design system */}
                        <div className="flex flex-col">
                            <label htmlFor="step-input" className="text-sm text-gray-600 mb-1">Step Size:</label>
                            <input
                                id="step-input"
                                type="number"
                                value={step}
                                onChange={(e) => setStep(parseInt(e.target.value) || 1)}
                                min="1"
                                className="border border-gray-300 rounded py-2 px-3 w-24 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Buttons styled consistently with blog navigation links */}
                        <button
                            onClick={incrementCount}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                        >
                            Increment by {step}
                        </button>
                        <button
                            onClick={decrementCount}
                            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors"
                        >
                            Decrement by {step}
                        </button>
                    </div>

                    {/* Explanation of the step feature */}
                    <div className="bg-blue-50 border border-blue-100 rounded p-4 mb-4">
                        <h4 className="font-semibold text-blue-800 mb-2">Multiple State Variables</h4>
                        <p className="text-blue-700 text-sm">
                            This enhanced counter uses two state variables: <code className="bg-blue-100 px-1 rounded">count</code> for the counter value and
                            <code className="bg-blue-100 px-1 rounded">step</code> for the increment/decrement amount. The number input lets you control
                            how much to change the count with each button click, demonstrating how multiple state variables can interact.
                        </p>
                    </div>

                    {/* Original explanation with consistent text styling */}
                    <p className="text-gray-600 text-sm mt-4 border-t border-gray-200 pt-4">
                        When you click a button, the corresponding function is triggered, updating the state via the
                        setCount function. React then re-renders this part of the UI, showing the updated counter value.
                    </p>
                </div>
            </section>

            {/* Added a navigation section to link back to other pages */}
            <div className="mt-8 pt-4 border-t border-gray-200">
                <a href="/nextjs-learning/routing/nestedRoute/blog" className="text-blue-500 hover:underline">
                    ← Back to Blog
                </a>
            </div>
        </div>
    );
};

export default ReactHooksAndState;