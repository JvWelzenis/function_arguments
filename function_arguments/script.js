const paintWall = function (color) {
    console.log("the wall is painted " + color);
};

const color = "blue";

paintWall(color);

// then you get 'the wall is painted' undefined

const chooseWall =  (wall) => {
    console.log('the north wall has been painted' + wall);
    console.log('the south wall has been painted' + wall);
}

const wall1 = "pink";
const wall2 = "yellow";

chooseWall(wall1);
chooseWall(wall2);