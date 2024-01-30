import { useEffect, useState } from "react"

const useLocalStorage = () => {
    const [error, setError] = useState(false);
    const [value, setValue] = useState("");

    const setValueLocally = (key, value) => {
        try {
            if (!value || !key) {
                setError(true)
            } else {
                window.localStorage.setItem(key, value);
                setError(false);
                setValue("data added successfully");
            }
        } catch (error) {
            setError(true)
        }
    }

    const getValueLocally = (key) => {
        try {
            if (!key) {
                setError(true)
            } else {
                const x = window.localStorage.getItem(key);
                const data = x || "No data found!";
                setError(false);
                setValue(data);
            }
        } catch (error) {

            console.log("x is--->", error
            );
            setError(true)
        }
    }

    const deleteValue = (key) => {
        try {
            if (!key) {
                setError(true);
            } else {
                window.localStorage.removeItem(key);
                setError(false);
                setValue("Removed successfully!");

            }
        } catch (error) {
            setError(true)
        }

    }

    return [error, getValueLocally, setValueLocally, value, deleteValue]
}

export default useLocalStorage;

