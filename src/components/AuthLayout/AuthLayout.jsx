import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LoadingSpinner from "../../UX/Loader/LoadingSpinner"

export default function Protected({ children, authentication = true }) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/")
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

    return loader ? <LoadingSpinner /> : <>{children}</>

}
