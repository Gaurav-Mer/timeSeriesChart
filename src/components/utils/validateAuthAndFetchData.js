import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { useDispatch } from "react-redux";
import { updateUsername } from "../../reduxConfig/slices/userSlice";

const validateAuthAndFetchData = (initalData = {}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const validateAuthAndFetchData = async () => {
        try {
            const response = await fetch("https://todo-list-backend-3ytm.onrender.com/api/setAuth", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // Include credentials for cross-origin requests
            });
            const jsonData = await response.json();
            if (response?.status === 200) {
                if (jsonData?.hasOwnProperty("rData")) {
                    if (jsonData?.rData?.id) {
                        const profileData = await fetch(
                            `https://todo-list-backend-3ytm.onrender.com/api/fetchProfileData?id=${jsonData?.rData?.id}`
                        );
                        if (profileData) {
                            const rData = await profileData.json();

                            if (profileData?.status === 200) {
                                setLoading(false)
                                return dispatch(updateUsername({ userData: rData?.rData }));
                            }
                        }
                    }
                }
                setLoading(false);
                dispatch(updateUsername({ userData: jsonData?.rData }));
            } else {
                setLoading(false);
            }
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (Object.keys(initalData)?.length <= 0) {
            validateAuthAndFetchData();
        }
    }, [initalData]);

    return { loading, error };
};

export default validateAuthAndFetchData;