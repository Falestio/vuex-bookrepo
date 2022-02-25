export const state = () => ({
    books: [],
})

export const mutations = {
    addBook(state, payload) {
        state.books.push(payload)
        console.log('book added')
    },

    deleteBook(state, book) {
        state.books.splice(book, 1)
    },

}

export const actions = {

}

export const getters = {
    getAllBooks(state) {
        return state.books
    }
}