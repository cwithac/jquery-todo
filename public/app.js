$( () => {

  //Page Load Inovation
  app.loadContent();

}); //

//Element Collection/Generating
const $container = $('<section/>').attr('id', 'container');
const $h1Title = $('<h1/>').text('To Do List');
const $input = $('<input/>').attr('type', 'text');
const $ul = $('<ul/>');
const $initialList = ['First', 'Second', 'Third'];

const app = {
  loadContent() {
    $('body').append($container);
    $container.append($h1Title, $input, $ul);
    $ul.each(function(i){
      for (let i = 0; i < $initialList.length; i++) {
        $(this).append('<li><span>X</span> ' + $initialList[i] + '</li>');
        $('li span').addClass('trash');
      }
    });
    this.intitFunctionality();
  },
  intitFunctionality() {
    this.strikethrough();
    this.deleteItem();
  },
  strikethrough() {
    $('li').on('click', (e) => {
      $(e.currentTarget).toggleClass('strikethrough');
    });
  },
  deleteItem(){
    $('.trash').on('click', (e) => {
      e.stopPropagation();
      $(e.currentTarget).parent().fadeOut(500, () => {
        $(e.currentTarget).parent().remove();
      });
    })
  }
};
