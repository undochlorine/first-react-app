const startState = {
    images: [
        {id: 0, src: "https://www.quickanddirtytips.com/sites/default/files/styles/article_main_image/public/images/2332/people-persons-peoples.jpg?itok=OXWARzCz", alt: "p1"},
        {id: 1, src: "https://assets.weforum.org/article/image/XaHpf_z51huQS_JPHs-jkPhBp0dLlxFJwt-sPLpGJB0.jpg", alt: "p2"},
        {id: 2, src: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?quality=75&width=982&height=726&auto=webp", alt: "p3"},
        {id: 3, src: "https://personalexcellence.co/files/5-people.jpg", alt: "p4"},
        {id: 4, src: "https://i.insider.com/5cb8b133b8342c1b45130629?width=700", alt: "p5"}
    ]
};
function profileReducer(state=startState, action={}) {
    return state;
}

export default profileReducer;