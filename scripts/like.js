/***************************************************************************** 
Cкрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*****************************************************************************/

/* Формирование массивов:
  likeHeartArray[] - svg-иконок (heart) по .like-icon
  likeButtonArray[] - кнопок с текстом "Like/Unlike" по .card__like-button
  likeButtonArray[] - кнопок-оберток svg-иконок по .card__icon-button

  !!! Индексы в масивах HTML-элементов (иконок, кнопок) карточек совпадают */

const likeHeartArray = document.querySelectorAll(".like-icon");
const likeButtonArray = document.querySelectorAll(".card__like-button");
const iconButtonArray = document.querySelectorAll(".card__icon-button");

/* Обработчик onclick всех кнопок с иконками (iconButtonArray[]) и текстом 
(likeButtonArray[]) - toggleIsLiked() */

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

/* toggle(.is-liked) в массиве иконок (likeHeartArray[]) с последующим 
запуском setButtonText() */

function toggleIsLiked(heart, button) {
  heart.classList.toggle("is-liked");
  setButtonText(heart, button);
}

/* Изменение текста кнопок ( Like <=> Unlike) при наличии / отсутствии
.is-liked с timeout 500ms */

function setButtonText(heart, button) {
  if ([...heart.classList].includes("is-liked")) {
    setTimeout(
      () => (button.querySelector(".button__text").textContent = "Unlike"),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector(".button__text").textContent = "Like"),
      500
    );
  }
}
