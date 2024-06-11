import { useState } from "react";
import Member from "./Member"
import Spinner from "../components/Spinner";
import {generateQuestionnaire} from "../user/User";
import { useMutation } from "@tanstack/react-query";
import { FaRegHandPointDown } from "react-icons/fa6";
import ShowQuestionnaire from "../components/ShowQuestionnaire";
import { motion } from "framer-motion";

function GenerateQuestionnaire() {
    const [questionnaire, setQuestionnaire] = useState({titled: '', qcms: [], opens: [], true_or_false_list: []})
    const mutation = useMutation({
        mutationFn: (data) => generateQuestionnaire(data),
        onSuccess: (data) => {
            setQuestionnaire(data)
        },
        onError: (error) => {
            console.log(error);
        }
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        //console.log(form.get('file'));
        mutation.mutate(form.get('file'))

    }
    return (
        <>
            <Member>
                <form action="" onSubmit={handleSubmit}>
                    <FileInput />
                    <div className="mt-4">
                        <button type="submit" disabled={mutation.isPending} className="bg-gray-900 p-4 rounded text-white hover:bg-gray-600 flex gap-2 justify-center items-center mx-auto" >
                            Générez le questionnaire
                            {mutation.isPending && <Spinner />}
                        </button>
                    </div>
                </form>

                {mutation.isSuccess && 
                <div className="mt-4" >
                    <h1 className="flex flex-col gap-2 items-center justify-center text-green-600 px-2">Votre questionnaire a été généreé avec succès vous pouvez le visualisez ici <span><FaRegHandPointDown  size={25}/></span> </h1>
                    <div className="flex justify-center mt-4"><ShowQuestionnaire questionnaire={questionnaire}/></div>
                </div>}

                {mutation.isError &&  <p className="text-center text-red-700 mt-4">Une erreur s'est produite veuillez réesayez</p> }

            </Member>

        </>


    )
}


function FileInput() {
    return (
        <>
            <div className="flex items-center justify-center w-full p-2 md:w-1/2 md:mx-auto">
                <label
                    htmlFor="dropzone-file"
                    className="p-2 flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Cliquez pour télécharger le fichier pdf</span>
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            PDF (MAX. 800x400px)
                        </p>
                    </div>
                    <input id="dropzone-file" type="file" className="w-full" name="file" required />
                </label>
            </div>
        </>
    )
}
export default GenerateQuestionnaire