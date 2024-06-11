import { Link } from "react-router-dom"
import { FaCircleQuestion } from "react-icons/fa6";
import { FaFileCirclePlus } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Member({ children }) {

    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    return (
        <>
            <div className="pb-16">
                {children}
            </div>
            <Navigation logout={logout} />
        </>

    )
}

function Navigation({ logout }) {
    const location = useLocation();
    const links = [
        {
            text: 'Questionnaires',
            icon: <FaCircleQuestion size={25} />,
            path: '/member/questionnaires/'
        },
        {
            text: 'Questionnaire',
            icon: <FaFileCirclePlus size={25} />,
            path: '/member/'
        },
    ]
    return (
        <>
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium w-full">
                    {links.map((link, index) => (
                        <Link key={index} to={link.path} className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ${location.pathname === link.path ? 'text-primary-600' : ''
                            }`}>
                            {link.icon}
                            <span className="text-sm  dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{link.text}</span>
                        </Link>
                    ))}
                    <button onClick={logout} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <CiLogin size={30} />
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Member