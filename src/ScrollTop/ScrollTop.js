import { useHistory } from "react-router-dom";
import { useEffect } from "react";


export default function ScrollTop() {
    let history = useHistory();

    useEffect(() => {
        history.listen(() => {
            window.scrollTo(0, 0);
        });
    }, [history]);

    return null;
}