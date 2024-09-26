
const deleteClientById = async (id: string): Promise<boolean> => {
    const response = await fetch(`/api/clients/${id}`, {
        method: 'DELETE',
    })

    if (response.status !== 200) return false

    return true
}
export default deleteClientById