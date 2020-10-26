/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против..."
  ]
};

const sortedArray = movieDB.movies.sort();
const adUnits = document.querySelectorAll('.promo__adv img');
let genre = document.body.getElementsByClassName('promo__genre');
let bg = document.body.querySelector('.promo__bg');
let li = document.body.querySelectorAll('.promo__interactive-item');

adUnits.forEach(el => {
  el.remove();
});

genre[0].innerHTML = 'драма';
bg.style.background = 'url(../img/bg.jpg) center top/cover no-repeat';
li.forEach((el, i) => {
  el.innerHTML = `${i + 1}. ${sortedArray[i]}`;
});