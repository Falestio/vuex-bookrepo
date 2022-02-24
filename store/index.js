export const state = () => ({
    books: [],
})

export const mutations = {
    addBook(state, payload) {
        state.books.push(payload)
        console.log('book added')
    },


}

export const actions = {

}

export const getters = {
    getAllBooks(state) {
        return state.books
    }
}