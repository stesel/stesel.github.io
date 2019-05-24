import { useState, useEffect } from "react";
import "whatwg-fetch";
import { DataUrl } from "../consts/dataUrl";

export function useFetch<D extends {}>(url: DataUrl) {
    const [data, setData] = useState<D | null>(null);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json));
    }, [url]);
    return data;
}
