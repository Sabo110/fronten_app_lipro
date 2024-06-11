import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import video from "../assets/video.mp4"
import { FaRegFilePdf } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { GoEye } from "react-icons/go";
function Home() {

  return (
    <div className="min-h-screen">
      <Header />
      <FirstSection />
      <Main />
      <Footer />
    </div>
  )
}

function FirstSection() {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen flex flex-col justify-center mt-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl  tracking-tight leading-none text-gray-900 md:text-4xl lg:text-6xl dark:text-white">Générer des questionnaires de révision</h1>
        <p className="mb-8 text-lg  text-gray-800 lg:text-2xl sm:px-16 xl:px-48 dark:text-gray-400">Générer une fiche de révision n'a jamais été aussi facile, juste un fichier pdf et le questionnaire est là!</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link to="/sign_up/"  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Commençer
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </Link>
        </div>


      </div>
    </section>
  )
}
function Header() {
  return (
    <nav className="z-20 flex justify-around items-center fixed top-0 right-0 left-0 bg-white shadow-sm h-12 md:py-10">
      <img src={logo} alt="" width="70" height="70" />
      <h1 className="md:text-2xl">Générateur de <strong>Questionnaire!</strong></h1>
      <div className="md:block md:flex md:gap-3 hidden">
        <Link to="/sign_up/" className="text-xl">Inscription</Link>
        <Link to="sign_in/" className="text-xl">Connexion</Link>
      </div>
    </nav>
  )
}
function Main() {
  const working = [
    {
      title: 'Télécharger un pdf',
      icon: <FaRegFilePdf size={70} />,
      icon2: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-1-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312z" />
      </svg>
    },
    {
      title: 'Traitement du pdf',
      icon: <FiLoader size={70} />,
      icon2: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-2-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
      </svg>
    },
    {
      title: 'Visualiser le questionnaire',
      icon: <GoEye size={70} />,
      icon2: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-3-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
      </svg>
    }
  ]
  return (
    <div className="min-h-screen">
      <h1 className="lg:text-4xl md:text-2xl text-center px-2 py-20 bg-primary-700 text-white">Comment ça marche ?</h1>
      <div className="grid md:grid-cols-3">
        {working.map((item, index) => (
          <div className="shadow-md h-80 flex flex-col items-center justify-center gap-4 bg-gray-900 text-white" key={index}>
            <span> {item.icon2} </span>
            <h1 className="lg:text-xl md:text-lg"> {item.title} </h1>
            <span> {item.icon} </span>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 py-8">
        <h1 className="lg:text-4xl md:text-2xl text-center">Vidéo de demonstration</h1>
        <div className="relative aspect-video w-full max-w-3xl mx-auto">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={video}
            title="YouTube video player"
            frameorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  )
}
function Footer() {
  return (
    <footer className="px-2 py-8 bg-gray-900">
      <p className="text-center text-white">tous droit reservé @2024</p>
    </footer>
  )
}
export default Home