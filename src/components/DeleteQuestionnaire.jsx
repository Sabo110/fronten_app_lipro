import { FaTrashCan } from "react-icons/fa6";
import { Tooltip } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { delQuestionnaire } from "../user/User";
import { useMutation } from "@tanstack/react-query";
import Spinner from "./Spinner";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function DeleteQuestionnaire({questionnaire, handleDelete}) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const mutation = useMutation({
        mutationFn: (id) => delQuestionnaire(id),
        onSuccess: () => {
            handleDelete()
            //onClose()
        }
    })
    const deleteQuestionnaire = () => {
       mutation.mutate(questionnaire.id)
    }

    return (
        <>
            <Tooltip content="supprimer le questionnaire">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={onOpen}>
                    <FaTrashCan size={18} className="text-gray-800" />
                </span>
            </Tooltip>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Suppression: {questionnaire.titled}</ModalHeader>
                            <ModalBody>
                                <p>voulez-vous supprimer ce questionnaire ?</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Fermer
                                </Button>
                                <Button color="success" onClick={deleteQuestionnaire} className="flex gap-2 text-white">
                                    Supprimer {mutation.isPending && <Spinner />} {mutation.isSuccess && <FaCheck size={20}/>}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
