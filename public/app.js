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
      }
    });
    this.intitFunctionality();
  },
  intitFunctionality() {
    this.strikethrough();
    this.deleteItem();
    this.addItem();
  },
  strikethrough() {
    $('ul').on('click', 'li', (e) => {
      $(e.currentTarget).toggleClass('strikethrough');
    });
  },
  deleteItem(){
    $('ul').on('click', 'span', (e) => {
      e.stopPropagation();
      $(e.currentTarget).parent().fadeOut(500, () => {
        $(e.currentTarget).parent().remove();
      });
    })
  },
  addItem() {
    $input.on('keypress', (e) => {
      if (e.which === 13) {
        let $valueText = $(e.currentTarget).val();
        $ul.append('<li><span>X</span> ' + $valueText + '</li>');
        $(e.currentTarget).val('');
      }
    });
  }
};
