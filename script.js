const question = document.querySelector('#question') 
const answers = document.querySelectorAll('.result');

const listAnswerToSendEmail = [

];
let questionNumber = 0;
const questions = [
    {
        question: 'Bạn thích con động vật nào nhất',
        answers: [
        'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=cbe66879ae8c0ac09975d945f39137f6',
        'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80',
        'https://image.freepik.com/free-vector/cute-pig-is-sitting-with-two-finger-cartoon-illustration_403370-527.jpg',
        'https://daohieu.com/wp-content/uploads/2020/05/con-tho-trang-co-mat-do-1024x910.jpg'
        ],
        title: [
            'cho',
            'meo',
            'lon',
            'tho',
        ]
    },
    {
        question: 'Bạn thích ban nhạc nào nhất',
        answers: [
        'https://m.media-amazon.com/images/I/51U9O6OEBhL.jpg',
        'https://media.vov.vn/sites/default/files/styles/large/public/2021-07/imaginedragons2-2000x1270-1-1392x884.jpg',
        "https://m.media-amazon.com/images/M/MV5BMjA2ODY1MDA5MV5BMl5BanBnXkFtZTcwNjU1MzIyOA@@._V1_.jpg",
        "https://static2.yan.vn/YanNews/2167221/201801/20180118-095403-mi0002988920.jpg"
        ],
        title: [
            '1 direction',
            'imagine drag',
            'the beatles',
            'maroon 5',
        ]
    }
];
question.innerHTML = `<h2>${questions[questionNumber].question}</h2>`;
answers.forEach((ans) => {
    ind = ans.dataset.number-1;
    ans.innerHTML = `<img src="${questions[questionNumber].answers[ind]}"/>`;
})

answers.forEach((ans) => {
    ans.addEventListener('click',(e) => {
        ind = ans.dataset.number-1;
        listAnswerToSendEmail.push(questions[questionNumber].title[ind]);
        console.log(listAnswerToSendEmail);
        questionNumber++;
        if(questions[questionNumber]){
            
        question.innerHTML = `<h2>${questions[questionNumber].question}</h2>`;
        answers.forEach((ans) => {
            ind = ans.dataset.number-1;
            ans.innerHTML = `<img src="${questions[questionNumber].answers[ind]}"/>`;
        })
        }else{
            
        }
    })
});

