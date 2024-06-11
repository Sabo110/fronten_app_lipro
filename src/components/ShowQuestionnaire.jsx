import { Tooltip } from "@nextui-org/react";
import { BsEye } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ShowQuestionnaire({ questionnaire }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [icon, setIcon] = useState(<BsEyeFill />)
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <>

            <Tooltip content="consulter le questionnaire">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={onOpen}>
                    <BsEye className="text-gray-800" size={20}/>
                </span>
            </Tooltip>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full" scrollBehavior="inside">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">  <span> Sujet: <strong>{questionnaire.titled}</strong> </span></ModalHeader>
                            <ModalBody>
                                <h1 className="text-xl font-bold">Question à choix multiples</h1>
                                <div className="ps-5">
                                    {questionnaire.qcms.map((qcm, index) => (
                                        <Qcm qcm={qcm} key={index} num={index + 1} />
                                    ))}
                                </div>

                                <h1 className="text-xl font-bold">Question à réponses ouvertes</h1>
                                <div className="ps-5">
                                    {questionnaire.opens.map((open, index) => (
                                        <Open open={open} key={index} num={index + 1} />
                                    ))}
                                </div>

                                <h1 className="text-xl font-bold">Question à réponse vrai ou faux</h1>
                                <div className="ps-5">
                                    {questionnaire.true_or_false_list.map((true_or_false, index) => (
                                        <TrueOrFalse true_or_false={true_or_false} key={index} num={index + 1}/>
                                    ))}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Fermer
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

function Qcm({ qcm, num }) {
    return (
        <div>
            <h1 className="font-bold">{num}- {qcm.titled} </h1>
            <div className="px-4 pt-2">
                <ul>
                    {qcm.choiceOne && <li>a- {qcm.choiceOne} </li>}
                    {qcm.choiceTwo && <li>b- {qcm.choiceTwo} </li>}
                    {qcm.choiceThree && <li>c- {qcm.choiceThree} </li>}
                </ul>
                <ShowOrHiddenAnswer answer={qcm.answer} />
            </div>
        </div>
    )
}

function Open({ open, num }) {
    return (
        <div>
            <h1 className="font-bold">{num}- {open.titled} </h1>
            <div className="px-4 pt-2">
                <ShowOrHiddenAnswer answer={open.answer} />
            </div>
        </div>
    )
}

function TrueOrFalse({ true_or_false, num }) {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }
    return (
        <div>
            <h1 className="font-bold">{num}- {true_or_false.titled} </h1>
            <div className="px-4 pt-2">
                <span className="inline-block" onClick={handleShow}> {show ? <BsEyeFill size={20} className="cursor-pointer" /> : <BsEyeSlashFill size={20} className="cursor-pointer" />} </span>
                <motion.p className="text-red-700 invisible" animate={{ visibility: show ? 'visible' : 'hidden' }}> {true_or_false.answer ? 'Vrai' : 'Faux'}  </motion.p>
            </div>
        </div>
    )
}

function ShowOrHiddenAnswer({ answer }) {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }
    return (
        <>
            <span className="inline-block" onClick={handleShow}> {show ? <BsEyeFill size={20} className="cursor-pointer" /> : <BsEyeSlashFill size={20} className="cursor-pointer" />} </span>
            <motion.p className="text-red-700 invisible" animate={{ visibility: show ? 'visible' : 'hidden' }}> {answer}  </motion.p>
        </>
    )
}
export default ShowQuestionnaire