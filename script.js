let input1, input2;
let dropdown;
let selectedImage;
let fontSizeSlider; 
let fontColorSliderH, fontColorSliderS, fontColorSliderB;
let fontSelector;

function setup() {
  let canvas = createCanvas(600,600);
  canvas.parent('column-two');

  input1 = createInput('Title 1');
  input1.parent('column-one');
  input1.class('inputbox');

  input2 = createInput('Title 2');
  input2.parent('column-one');
  input2.class('inputbox');

  fontSizeSlider = createSlider(10, 100, 36); // Min, Max, Default
  fontSizeSlider.parent('column-one');
  fontSizeSlider.class('slider');

  fontColorSliderH = createSlider(0, 360, 255);
  fontColorSliderH.parent('column-one');
  fontColorSliderH.class('slider');

  fontColorSliderS = createSlider(0, 100, 50);
  fontColorSliderS.parent('column-one');
  fontColorSliderS.class('slider');

  fontColorSliderB = createSlider(0, 100, 50);
  fontColorSliderB.parent('column-one');
  fontColorSliderB.class('slider');

  fontSelector = createRadio();
  fontSelector.option('Arial');
  fontSelector.option('Times New Roman');
  fontSelector.option('Comic Sans MS');
  fontSelector.selected('Arial');
  fontSelector.parent('column-one');
  fontSelector.id('fontSelector') 

  dropdown = createSelect();
  dropdown.parent('column-one'); 
  // Add options to the dropdown
  dropdown.option('Image 1','images/image1.jpg');
  dropdown.option('Image 2','images/image2.jpg');
  dropdown.option('Image 3','images/image3.jpg');
  // Attach a change event handler to the dropdown
  dropdown.changed(changeImage);
  dropdown.class('dropdown');

  function saving() {
    saveCanvas(canvas, "Canvas1", "jpg");
  };

  let btn = createButton("Save Image");
  btn.parent('column-one');
  btn.mousePressed(saving);
  btn.class("buttons");
}

function draw() {
  background(0,0,0);
  imageMode(CENTER);

  if (selectedImage) {
    image(selectedImage, width / 2, height / 2); // Center the image if it's loaded
  };

  colorMode(HSB);
  let h = fontColorSliderH.value();
  let s = fontColorSliderS.value();
  let b = fontColorSliderB.value();
  fill(h,s,b);
  
  let selectedFont = fontSelector.value();
  textFont(selectedFont);
  textSize(fontSizeSlider.value());
  textAlign(CENTER, CENTER);
  text(input1.value(),width/2,60);
  text(input2.value(),width/2,height-60);

}

function changeImage() {
  selectedImage = loadImage(dropdown.value()); // Assign the selected image to the global variable
}