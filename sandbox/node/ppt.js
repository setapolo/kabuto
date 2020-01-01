var fs = require('fs');
var officegen = require('officegen');
var pptx = officegen('pptx')
var slide
var pObj

pptx.on('finalize', function (written) {
  console.log('Finish to create a PowerPoint file.\nTotal bytes created: ' + written + '\n')
  // clear the temporatory files
})

pptx.on('error', function (err) {
  console.log(err)
})

  pptx.setDocTitle('Sample PPTX Document')
  // do the rest things here
  // console.log('finalize')
  // Let's create a new slide:
  slide = pptx.makeNewSlide()

  slide.name = 'The first slide!'

  // Change the background color:
  slide.back = '000000'

  // Declare the default color to use on this slide:
  slide.color = 'ffffff'

  // Basic way to add text string:
  slide.addText('Created using Officegen version ' + officegen.version)
  slide.addText('Fast position', 0, 20)
  slide.addText('Full line', 0, 40, '100%', 20)

  // Add text box with multi colors and fonts:
  slide.addText([
    { text: 'Hello ', options: { font_size: 56 } },
    { text: 'World!', options: { font_size: 56, font_face: 'Arial', color: 'ffff00' } }
  ], { cx: '75%', cy: 66, y: 150 })
  // Please note that you can pass object as the text parameter to addText.
  // For a single text just pass a text string to addText:
  slide.addText('Office generator', { y: 66, x: 'c', cx: '50%', cy: 60, font_size: 48, color: '0000ff' })


  var out = fs.createWriteStream('example.pptx')
  out.on('error', function (err) {
    console.log(err)
  })
  pptx.generate(out)


