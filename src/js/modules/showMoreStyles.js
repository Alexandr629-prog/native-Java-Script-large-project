import {getResourse} from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
        const btn = document.querySelector(trigger);

    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeInUp');
    // });

    // btn.addEventListener('click', () => {
    //     cards.forEach(card => {
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     // btn.style.display = 'none';
    //     btn.remove();
    // });

    btn.addEventListener('click', function(){
        getResourse('http://localhost:3000/style')
        .then(res => {
            this.remove();
            createCards(res.styles);
        })
        .catch(error =>
            {faildResponsse();
             console.log(error);
            });
        
    });


    function createCards(respoonse){
        respoonse.forEach(item=>{
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML =`
            <div class=styles-block>
             <img src=${item.src} alt="style">
           <h4>${item.title}</h4>
            <a href${item.link}Подробнее</a>
            </div>`;
            document.querySelector(wrapper).appendChild(card);
        });
    }
    function faildResponsse(){
        let fail = document.createElement('div');
        fail.classList.add('animated', 'fadeInUp', 'status');
        fail.textContent = "Что-то пошло не так...";
        document.querySelector(wrapper).appendChild(fail);
    }
};

export default showMoreStyles;
