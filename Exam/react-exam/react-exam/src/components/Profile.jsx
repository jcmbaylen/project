import { useState } from 'react'

const Profile = ({ profile, onRemove, onUpdate, index }) => {
    const [ confirmation, toggleConfirmation ] = useState(false)
    const [ deleteConfirmation, toggleDeleteConfirmation ] = useState(false)
    const [ editForm, toggleEditForm ] = useState(false)

    // console.log(profile)

    // const onEdit = () => {
    //     toggleEditForm(
    //         (prevState) => !prevState
    //     )
    //     toggleDeleteConfirmation(false)
    //     toggleConfirmation(
    //         (prevState) => !prevState
    //     )
    // }

    // const onDelete = () => {
    //     toggleEditForm(false)
    //     toggleDeleteConfirmation(
    //         (prevState) => !prevState
    //     )
    //     toggleConfirmation(
    //         (prevState) => !prevState
    //     )
    // }

    const onEdit = () => {
        toggleEditForm((prevState) => !prevState);
        toggleDeleteConfirmation(false);
        toggleConfirmation((prevState) => !prevState);
    };
    const onDelete = () => {
        toggleEditForm(false);
        toggleDeleteConfirmation((prevState) => !prevState);
        toggleConfirmation((prevState) => !prevState);
    };

    const onEditConfirm = () => {
        onUpdate(profile, index)
        // console.log(profile)
        toggleConfirmation(false)
        toggleDeleteConfirmation(false)
    }

    const onDeleteConfirm = () => {
        onRemove(profile)
        // console.log(profile)
        toggleConfirmation(false)
        toggleDeleteConfirmation(false)
    }

    const onCancel = () => {
        // toggleConfirmation(false)
        toggleConfirmation(false);
        toggleDeleteConfirmation(false);
        toggleEditForm(false);
    }

    // console.log(profile)
    return (
        <div className="flex flex-row justify-around border border-b-3 border-gray-300 p-4 my-4 rounded-lg">
            { profile.fields.map(
                (field) => field.config.show_in_listing && (
                    <div key={ field.config.key } className="flex-1 capitalize">
                        { field.data }
                    </div>
                )
            ) }
            <div className={ `${ confirmation ? 'block' : 'hidden' } inset-0 fixed flex justify-center items-center bg-black/30` }>
                <div className="bg-white w-[500px] mx-auto h-[300px] rounded-xl p-4 flex flex-col items-center justify-center">
                    { editForm && (
                        <>
                            <p className="mb-12">Are you sure to update this profile?</p>
                            <div className="flex gap-4">
                                <button
                                    onClick={ onCancel }
                                    className="bg-gray-400 text-white rounded-lg px-4 py-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={ onEditConfirm }
                                    className="bg-blue-400 text-white rounded-lg px-4 py-2"
                                >
                                    Update
                                </button>
                            </div>
                        </>
                    ) }
                    { deleteConfirmation && (
                        <>
                            <p className="mb-12">Are you sure to delete this profile?</p>
                            <div className="flex gap-4">
                                <button
                                    onClick={ onCancel }
                                    className="bg-gray-400 text-white rounded-lg px-4 py-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={ onDeleteConfirm }
                                    className="bg-red-400 text-white rounded-lg px-4 py-2"
                                >
                                    Confirm
                                </button>
                            </div>
                        </>
                    ) }
                </div>
            </div>
            <div className="flex-1 capitalize flex gap-2">
                <button onClick={ onEdit } className="bg-blue-400 text-white rounded-lg px-4 py-2">
                    Edit
                </button>
                <button onClick={ onDelete } className="bg-red-400 text-white rounded-lg px-4 py-2">
                    Delete
                </button>
            </div>
        </div>
    )
}

export { Profile }
