import instance from "../instances/instance";

// create noteServices
const noteServices = {
    getNotes: async () => {
        return await instance.get('/notes');
    },
    getNotesById: async (id) => {
        return await instance.get(`/notes/${id}`);
    }
}

export default noteServices;