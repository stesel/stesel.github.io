import { useState, useEffect } from "react";
import "whatwg-fetch";
import { DataUrl } from "../consts/dataUrl";

export function useFetch<D extends {}>(url: DataUrl) {
    const [data, setData] = useState<D | null>(null);
    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }
    useEffect(() => {
        fetchUrl();
    }, []);
    return data;
}
