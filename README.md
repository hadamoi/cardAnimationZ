# 💳 Card motion effects
This is a motion effect that positions the card.

#### 🧸 Built with
<img src="https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&logo=greensock&logoColor=white">

#### ✔️ Things to remember
```
buttonAll[index].onclick = function () {
  pageNum = index;
  CARD_EFFECTS();
}
```
* Here, index is passed as a parameter representing the index of the button. When a button is clicked, the pageNum variable is assigned the index of that button, and the CARD_EFFECTS() function is called.
* Inside the CARD_EFFECTS() function, different behaviors are performed depending on the value of the pageNum variable. For example, if pageNum is 0, an animation is executed that moves the cards to the center; if pageNum is 1, an animation is executed that moves the cards to a random position and rotation angle; and if pageNum is 2 and 3, different animations are performed.
* So the index of the button and the index of the page (pageNum) are linked, and clicking the button to update the pageNum will run the animation for that page.
