import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('');
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowresult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState('');

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord);
        }, 75 * index)
    }

    const onSent = async (input) => {
        // console.log('hello');

        setResultData('');
        setLoading(true);
        setShowresult(true);
        setRecentPrompt(input);
        const response = await run(input);
        let formattedResponse = response
            .split("\n\n") // Split paragraphs
            .map(paragraph => {
                return paragraph
                    .split("**")
                    .map((text, index) => (index % 2 === 1 ? `<b>${text}</b>` : text))
                    .join("") // Apply bolding for **text**
                    .split("* ")
                    .map((text, index) => (index === 0 ? text : `<li>${text}</li>`))
                    .join("") // Apply bullet point formatting
            })
            .map(paragraph => `<p>${paragraph}</p>`)
            .join(""); // Wrap each paragraph in <p> tags

        // Render formatted HTML in React
        // setResultData(formattedResponse);
        let newResponseArray = formattedResponse.split(" ");
        for(let i=0;i<newResponseArray.length;i++)
        {
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+" ");
        }

        setLoading(false);
        setInput('');

    }


    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;